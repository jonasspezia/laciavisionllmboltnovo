import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import axios from 'axios';

// Function to fetch available models
export const fetchAvailableModels = async (apiKey: string): Promise<any> => {
  try {
    const response = await axios.get(
      'https://generativelanguage.googleapis.com/v1beta/models',
      {
        params: {
          key: apiKey,
        },
      }
    );
    
    // Filter for multimodal models that can handle video
    const multimodalModels = response.data.models
      .filter((model: any) => 
        model.supportedGenerationMethods.includes('generateContent') &&
        model.name.includes('gemini')
      )
      .map((model: any) => ({
        // Only include serializable properties
        name: model.name,
        displayName: model.displayName || model.name.split('/').pop(),
        description: model.description || '',
        inputTokenLimit: model.inputTokenLimit || 0,
        outputTokenLimit: model.outputTokenLimit || 0,
        supportedGenerationMethods: [...model.supportedGenerationMethods],
        // Add any other primitive properties you need
      }));
    
    return multimodalModels;
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};

// Function to validate API key
export const validateApiKey = async (apiKey: string): Promise<boolean> => {
  try {
    await fetchAvailableModels(apiKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Function to analyze video
export const analyzeVideo = async (
  apiKey: string,
  modelName: string,
  videoFile: File,
  prompt: string
) => {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });

    // Convert video to base64
    const base64Video = await fileToGenerativePart(videoFile);

    const generationConfig = {
      temperature: 0.4,
      topK: 32,
      topP: 1,
      maxOutputTokens: 8192,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const fullPrompt = prompt || 
      `Analyze this video and provide a comprehensive analysis. Format your response as JSON with the following structure:
      {
        "summary": "A concise summary of the entire video",
        "keyPoints": ["Key point 1", "Key point 2", ...],
        "sentiment": "Overall sentiment (Positive/Negative/Neutral/Mixed)",
        "topics": ["Topic 1", "Topic 2", ...],
        "timestamps": [
          {
            "time": "MM:SS",
            "description": "What happens at this timestamp",
            "importance": "high/medium/low"
          },
          ...
        ],
        "detailedAnalysis": [
          {
            "title": "Section title",
            "content": "Detailed analysis of this section"
          },
          ...
        ],
        "keyInsights": ["Important insight 1", "Important insight 2", ...]
      }
      
      Pay special attention to important moments in the video and provide accurate timestamps. Include at least 5-10 timestamps for key moments.`;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: fullPrompt },
            base64Video
          ],
        },
      ],
      generationConfig,
      safetySettings,
    });

    const response = result.response;
    const text = response.text();
    
    try {
      // Try to parse as JSON first
      const parsedResponse = JSON.parse(text);
      
      // Ensure all fields exist with defaults if missing
      return {
        summary: parsedResponse.summary || text,
        keyPoints: parsedResponse.keyPoints || [],
        sentiment: parsedResponse.sentiment || "Unknown",
        topics: parsedResponse.topics || [],
        timestamps: parsedResponse.timestamps || [],
        detailedAnalysis: parsedResponse.detailedAnalysis || [],
        keyInsights: parsedResponse.keyInsights || []
      };
    } catch (e) {
      // If not valid JSON, return the raw text
      console.error("Failed to parse JSON response:", e);
      return {
        summary: text,
        keyPoints: [],
        sentiment: "Unknown",
        topics: [],
        timestamps: [],
        detailedAnalysis: [],
        keyInsights: []
      };
    }
  } catch (error) {
    console.error('Error analyzing video:', error);
    throw error;
  }
};

async function fileToGenerativePart(file: File) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result?.toString().split(',')[1]);
    reader.readAsDataURL(file);
  });
  
  return {
    inlineData: { 
      data: await base64EncodedDataPromise,
      mimeType: file.type
    },
  };
}
