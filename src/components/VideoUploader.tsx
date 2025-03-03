import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Video, X } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import { useApiKey } from '../context/ApiKeyContext';
import { useNavigate } from 'react-router-dom';

interface VideoUploaderProps {
  onVideoSelect: (file: File) => void;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ onVideoSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { apiKeyState } = useApiKey();
  const navigate = useNavigate();

  // Check if API key is valid, if not redirect to home
  React.useEffect(() => {
    if (!apiKeyState.isValid) {
      navigate('/');
    }
  }, [apiKeyState.isValid, navigate]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const validateFile = (file: File): boolean => {
    // Check if file is a video
    if (!file.type.startsWith('video/')) {
      setError('Please upload a video file.');
      return false;
    }
    
    // Check file size (limit to 100MB)
    const maxSize = 100 * 1024 * 1024; // 100MB in bytes
    if (file.size > maxSize) {
      setError('File size exceeds 100MB limit.');
      return false;
    }
    
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setError(null);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      
      if (validateFile(file)) {
        setSelectedFile(file);
        onVideoSelect(file);
        createPreview(file);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError(null);
    
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      if (validateFile(file)) {
        setSelectedFile(file);
        onVideoSelect(file);
        createPreview(file);
      }
    }
  };

  const createPreview = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <Card className="w-full">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Upload Video for Analysis</h2>
        
        {!selectedFile ? (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <Upload className="h-6 w-6 text-indigo-600" />
              </div>
              <p className="mb-2 text-sm text-gray-700">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">MP4, MOV, AVI, WebM (Max 100MB)</p>
              
              <Button 
                onClick={handleButtonClick}
                variant="outline"
                className="mt-4"
                size="sm"
              >
                Select Video
              </Button>
              
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="video/*"
                onChange={handleChange}
              />
            </motion.div>
          </div>
        ) : (
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg overflow-hidden bg-black"
            >
              {previewUrl && (
                <video
                  src={previewUrl}
                  controls
                  className="w-full h-auto max-h-[300px] mx-auto"
                />
              )}
              
              <div className="absolute top-2 right-2">
                <button
                  onClick={removeFile}
                  className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
                >
                  <X className="h-4 w-4 text-gray-700" />
                </button>
              </div>
            </motion.div>
            
            <div className="mt-3 flex items-center">
              <div className="mr-3">
                <Video className="h-5 w-5 text-gray-500" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium truncate">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
          </div>
        )}
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-2"
          >
            {error}
          </motion.p>
        )}
      </div>
    </Card>
  );
};

export default VideoUploader;
