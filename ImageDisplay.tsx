
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ImageDisplayProps {
    imageUrl: string | null;
    isLoading: boolean;
}

const Placeholder = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-gray-800 border-2 border-dashed border-gray-600 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-300">Your Outfit Visualization</h3>
        <p className="text-gray-500 mt-1">Describe your design below to see it here.</p>
    </div>
);

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading }) => {
    return (
        <div className="w-full flex-grow flex items-center justify-center aspect-[9/16] bg-gray-800/50 rounded-2xl overflow-hidden relative shadow-inner">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-10">
                    <div className="text-center">
                        <LoadingSpinner size="lg" />
                        <p className="mt-4 text-lg text-gray-300">Designing your outfit...</p>
                    </div>
                </div>
            )}
            {!isLoading && !imageUrl && <Placeholder />}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Generated outfit"
                    className="w-full h-full object-contain transition-opacity duration-500 ease-in-out opacity-0 animate-fade-in"
                    style={{ animation: 'fadeIn 0.5s forwards' }}
                />
            )}
            <style>
                {`
                    @keyframes fadeIn {
                        to {
                            opacity: 1;
                        }
                    }
                `}
            </style>
        </div>
    );
};
