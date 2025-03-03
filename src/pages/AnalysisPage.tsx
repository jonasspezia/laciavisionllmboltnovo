import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoUploader from '../components/VideoUploader';
import AnalysisResults from '../components/AnalysisResults';
import Button from '../components/ui/Button';
import { useApiKey } from '../context/ApiKeyContext';
import { analyzeVideo } from '../services/geminiApi';
import { VideoAnalysis } from '../types';

const AnalysisPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<VideoAnalysis | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const { apiKeyState } = useApiKey();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoSelect = (file: File) => {
    setSelectedVideo(file);
    // Reset results when a new video is selected
    setResults(null);
  };

  const handleAnalyze = async () => {
    if (!selectedVideo || !apiKeyState.key || !apiKeyState.selectedModel) return;
    
    setIsAnalyzing(true);
    
    try {
      const analysisResults = await analyzeVideo(
        apiKeyState.key,
        apiKeyState.selectedModel,
        selectedVideo,
        customPrompt
      );
      
      setResults(analysisResults);
    } catch (error) {
      console.error('Error analyzing video:', error);
      // Handle error state
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VideoUploader onVideoSelect={handleVideoSelect} />
          
          {selectedVideo && !isAnalyzing && !results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-6"
            >
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Analysis Options</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Custom Prompt (Optional)
                  </label>
                  <textarea
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Enter a custom prompt for the AI analysis, or leave blank for default analysis"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 min-h-[100px]"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Leave empty for standard analysis or customize how the AI should analyze your video.
                  </p>
                </div>
                
                <Button
                  onClick={handleAnalyze}
                  className="w-full"
                >
                  Analyze Video
                </Button>
              </div>
            </motion.div>
          )}
          
          {selectedVideo && (
            <div className="mt-6">
              <video
                ref={videoRef}
                src={selectedVideo ? URL.createObjectURL(selectedVideo) : ''}
                controls
                className="w-full rounded-lg shadow-md"
                style={{ display: results || isAnalyzing ? 'block' : 'none' }}
              />
            </div>
          )}
          
          <AnalysisResults 
            results={results} 
            isLoading={isAnalyzing} 
            videoRef={videoRef}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AnalysisPage;
