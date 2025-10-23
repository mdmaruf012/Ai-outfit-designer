
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface PromptFormProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!isLoading) {
                onSubmit();
            }
        }
    };

    return (
        <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g., a futuristic cyberpunk jacket with neon trim..."
                className="w-full h-12 bg-transparent text-gray-200 placeholder-gray-500 focus:ring-0 focus:outline-none resize-none px-3 py-2"
                rows={1}
                disabled={isLoading}
            />
            <button
                onClick={onSubmit}
                disabled={isLoading || !prompt.trim()}
                className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-xl shadow-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-32 h-10 flex-shrink-0"
            >
                {isLoading ? <LoadingSpinner /> : 'Generate'}
            </button>
        </div>
    );
};
