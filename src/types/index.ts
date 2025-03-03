export interface VideoAnalysis {
  summary: string;
  keyPoints: string[];
  sentiment: string;
  topics: string[];
  timestamps?: Timestamp[];
  detailedAnalysis?: DetailedSection[];
  transcription?: string;
  keyInsights?: string[];
}

export interface Timestamp {
  time: string; // Format: "MM:SS" or "HH:MM:SS"
  description: string;
  importance: 'high' | 'medium' | 'low';
}

export interface DetailedSection {
  title: string;
  content: string;
}

export interface GeminiModel {
  name: string;
  displayName: string;
  description: string;
  inputTokenLimit: number;
  outputTokenLimit: number;
  supportedGenerationMethods: string[];
  temperature?: number;
  topP?: number;
  topK?: number;
}

export interface ApiKeyState {
  key: string;
  isValid: boolean;
  selectedModel: string;
}
