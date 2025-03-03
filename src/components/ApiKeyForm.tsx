import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Key } from 'lucide-react';
import { useApiKey } from '../context/ApiKeyContext';
import { validateApiKey, fetchAvailableModels } from '../services/geminiApi';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';
import { GeminiModel } from '../types';

const ApiKeyForm: React.FC = () => {
  const { apiKeyState, setApiKey, setIsValid, setSelectedModel } = useApiKey();
  const [inputKey, setInputKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  const [models, setModels] = useState<GeminiModel[]>([]);
  const [selectedModelId, setSelectedModelId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsValidating(true);

    try {
      const isValid = await validateApiKey(inputKey);
      
      if (isValid) {
        setApiKey(inputKey);
        setIsValid(true);
        
        // Fetch available models
        const availableModels = await fetchAvailableModels(inputKey);
        setModels(availableModels);
      } else {
        setError('Invalid API key. Please check and try again.');
      }
    } catch (err) {
      setError('Error validating API key. Please try again.');
    } finally {
      setIsValidating(false);
    }
  };

  const handleModelSelect = (modelName: string) => {
    setSelectedModelId(modelName);
    setSelectedModel(modelName);
    navigate('/upload');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full">
              <Key className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Enter Your Gemini API Key
          </h2>
          
          {!apiKeyState.isValid ? (
            <form onSubmit={handleSubmit}>
              <Input
                type="password"
                placeholder="Enter your Gemini API key"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                required
                label="API Key"
                error={error}
              />
              
              <Button 
                type="submit" 
                className="w-full mt-4"
                disabled={isValidating || !inputKey}
              >
                {isValidating ? 'Validating...' : 'Validate Key'}
              </Button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                You can get your API key from the Google AI Studio.
              </p>
            </form>
          ) : models.length > 0 ? (
            <div>
              <h3 className="text-lg font-medium mb-4">Select a Model</h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {models.map((model) => (
                  <motion.div
                    key={model.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedModelId === model.name
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                    onClick={() => handleModelSelect(model.name)}
                  >
                    <div className="font-medium">{model.displayName || model.name.split('/').pop()}</div>
                    {model.description && (
                      <div className="text-sm text-gray-600 mt-1">{model.description}</div>
                    )}
                    <div className="text-xs text-gray-500 mt-2">
                      Input limit: {model.inputTokenLimit} tokens • Output limit: {model.outputTokenLimit} tokens
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto"></div>
              <p className="mt-2">Loading available models...</p>
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
};

export default ApiKeyForm;
