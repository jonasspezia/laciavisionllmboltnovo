import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageCircle, Tag, BarChart2, Clock, Lightbulb, ChevronDown, ChevronUp, Play, Brain } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import { VideoAnalysis, Timestamp, DetailedSection } from '../types';
import ReactMarkdown from 'react-markdown';

interface AnalysisResultsProps {
  results: VideoAnalysis | null;
  isLoading: boolean;
  videoRef?: React.RefObject<HTMLVideoElement>;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results, isLoading, videoRef }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (isLoading) {
    return (
      <Card className="p-6 mt-6">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">Analyzing video...</p>
          <p className="text-sm text-gray-500 mt-2">This may take a few minutes depending on the video length</p>
        </div>
      </Card>
    );
  }

  if (!results) {
    return null;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleTimestampClick = (timeString: string) => {
    if (!videoRef?.current) return;
    
    // Convert MM:SS or HH:MM:SS to seconds
    const timeParts = timeString.split(':').map(Number);
    let seconds = 0;
    
    if (timeParts.length === 2) {
      // MM:SS format
      seconds = timeParts[0] * 60 + timeParts[1];
    } else if (timeParts.length === 3) {
      // HH:MM:SS format
      seconds = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];
    }
    
    // Set video time and play
    videoRef.current.currentTime = seconds;
    videoRef.current.play();
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-amber-100 text-amber-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Format content with markdown
  const formatMarkdown = (content: string) => {
    // If content is already in markdown format, return as is
    if (content.includes('#') || content.includes('*') || content.includes('```') || content.includes('- ')) {
      return content;
    }
    
    // Otherwise, add some basic markdown formatting
    return content
      .split('\n\n')
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0)
      .join('\n\n');
  };

  // Custom renderer for markdown components
  const MarkdownRenderer = ({ children }: { children: string }) => {
    return (
      <div className="prose prose-indigo max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-2xl font-bold text-indigo-800 mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-xl font-bold text-indigo-700 mb-3" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-lg font-bold text-indigo-600 mb-2" {...props} />,
            p: ({ node, ...props }) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4 space-y-2" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4 space-y-2" {...props} />,
            li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-gray-600 my-4" {...props} />
            ),
            code: ({ node, inline, ...props }) => 
              inline 
                ? <code className="bg-gray-100 text-indigo-600 px-1 py-0.5 rounded text-sm" {...props} />
                : <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4 text-sm" {...props} />,
            a: ({ node, ...props }) => <a className="text-indigo-600 hover:text-indigo-800 underline" {...props} />,
            strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
            em: ({ node, ...props }) => <em className="italic text-gray-700" {...props} />,
          }}
        >
          {children}
        </ReactMarkdown>
      </div>
    );
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 mt-6"
    >
      {/* Summary */}
      <motion.div variants={item}>
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-white mr-2" />
              <h3 className="text-lg font-semibold text-white">Summary</h3>
            </div>
          </div>
          <div className="p-6">
            <MarkdownRenderer>
              {formatMarkdown(results.summary)}
            </MarkdownRenderer>
          </div>
        </Card>
      </motion.div>

      {/* Chain of Thought */}
      <motion.div variants={item}>
        <Card className="overflow-hidden border-2 border-indigo-100">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
            <div className="flex items-center">
              <Brain className="h-5 w-5 text-white mr-2" />
              <h3 className="text-lg font-semibold text-white">Chain of Thought Analysis</h3>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-b from-indigo-50 to-white">
            <div className="space-y-4">
              {/* First level of analysis */}
              <div className="border-l-4 border-indigo-300 pl-4">
                <h4 className="font-semibold text-indigo-800 mb-2">Initial Observations</h4>
                <p className="text-gray-700 mb-3">
                  {results.keyPoints && results.keyPoints.length > 0 
                    ? results.keyPoints[0] 
                    : "The video presents a structured narrative with clear main points."}
                </p>
              </div>
              
              {/* Second level of analysis */}
              <div className="border-l-4 border-purple-300 pl-4 ml-4">
                <h4 className="font-semibold text-purple-800 mb-2">Deeper Analysis</h4>
                <p className="text-gray-700 mb-3">
                  {results.keyInsights && results.keyInsights.length > 0 
                    ? results.keyInsights[0] 
                    : "Upon deeper examination, several key themes emerge throughout the content."}
                </p>
              </div>
              
              {/* Third level of analysis */}
              <div className="border-l-4 border-blue-300 pl-4 ml-8">
                <h4 className="font-semibold text-blue-800 mb-2">Critical Insights</h4>
                <p className="text-gray-700 mb-3">
                  {results.keyInsights && results.keyInsights.length > 1 
                    ? results.keyInsights[1] 
                    : "The most significant insight reveals the underlying message and purpose."}
                </p>
              </div>
              
              {/* Conclusion */}
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-indigo-800 mb-2">Conclusion</h4>
                <p className="text-gray-700">
                  {results.sentiment 
                    ? `The overall ${results.sentiment.toLowerCase()} tone supports the main thesis and reinforces the key arguments.` 
                    : "The analysis reveals a coherent structure with well-supported arguments and clear conclusions."}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Key Insights */}
      {results.keyInsights && results.keyInsights.length > 0 && (
        <motion.div variants={item}>
          <Card>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Key Insights</h3>
              </div>
              <ul className="space-y-3">
                {results.keyInsights.map((insight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex"
                  >
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">
                      <MarkdownRenderer>{insight}</MarkdownRenderer>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Timestamps */}
      {results.timestamps && results.timestamps.length > 0 && (
        <motion.div variants={item}>
          <Card>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Key Moments</h3>
              </div>
              <div className="space-y-3">
                {results.timestamps.map((timestamp: Timestamp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex-shrink-0 mr-3 font-mono"
                      onClick={() => handleTimestampClick(timestamp.time)}
                    >
                      <Play className="h-3 w-3 mr-1" />
                      {timestamp.time}
                    </Button>
                    <div className="flex-grow">
                      <MarkdownRenderer>{timestamp.description}</MarkdownRenderer>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getImportanceColor(timestamp.importance)} ml-2 flex-shrink-0`}>
                      {timestamp.importance}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Key Points */}
      {results.keyPoints && results.keyPoints.length > 0 && (
        <motion.div variants={item}>
          <Card>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Key Points</h3>
              </div>
              <ul className="space-y-3">
                {results.keyPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex"
                  >
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">
                      <MarkdownRenderer>{point}</MarkdownRenderer>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Detailed Analysis */}
      {results.detailedAnalysis && results.detailedAnalysis.length > 0 && (
        <motion.div variants={item}>
          <Card>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Detailed Analysis</h3>
              </div>
              <div className="space-y-4">
                {results.detailedAnalysis.map((section: DetailedSection, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection(`section-${index}`)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    >
                      <span className="font-medium text-gray-800">{section.title}</span>
                      {expandedSections[`section-${index}`] ? (
                        <ChevronUp className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                    {expandedSections[`section-${index}`] && (
                      <div className="p-4 bg-white">
                        <MarkdownRenderer>{formatMarkdown(section.content)}</MarkdownRenderer>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Topics and Sentiment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topics */}
        {results.topics && results.topics.length > 0 && (
          <motion.div variants={item}>
            <Card>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Tag className="h-5 w-5 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {results.topics.map((topic, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Sentiment */}
        {results.sentiment && (
          <motion.div variants={item}>
            <Card>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart2 className="h-5 w-5 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Overall Sentiment</h3>
                </div>
                <div className="text-center py-4">
                  <div className={`text-xl font-bold ${
                    results.sentiment.toLowerCase().includes('positive') 
                      ? 'text-green-600' 
                      : results.sentiment.toLowerCase().includes('negative')
                        ? 'text-red-600'
                        : 'text-amber-600'
                  }`}>
                    {results.sentiment}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AnalysisResults;
