import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ApiKeyState } from '../types';

interface ApiKeyContextType {
  apiKeyState: ApiKeyState;
  setApiKey: (key: string) => void;
  setIsValid: (isValid: boolean) => void;
  setSelectedModel: (model: string) => void;
}

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined);

export const ApiKeyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [apiKeyState, setApiKeyState] = useState<ApiKeyState>({
    key: '',
    isValid: false,
    selectedModel: '',
  });

  const setApiKey = (key: string) => {
    setApiKeyState((prev) => ({ ...prev, key }));
  };

  const setIsValid = (isValid: boolean) => {
    setApiKeyState((prev) => ({ ...prev, isValid }));
  };

  const setSelectedModel = (selectedModel: string) => {
    setApiKeyState((prev) => ({ ...prev, selectedModel }));
  };

  return (
    <ApiKeyContext.Provider value={{ apiKeyState, setApiKey, setIsValid, setSelectedModel }}>
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = (): ApiKeyContextType => {
  const context = useContext(ApiKeyContext);
  if (!context) {
    throw new Error('useApiKey must be used within an ApiKeyProvider');
  }
  return context;
};
