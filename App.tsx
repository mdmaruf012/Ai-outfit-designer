
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { ImageDisplay } from './components/ImageDisplay';
import { ErrorAlert } from './components/ErrorAlert';
import { generateOutfitImage } from './services/geminiService';

const App: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async () => {
        if (!prompt.trim()) {
            setError('Please enter a description for the outfit.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setImageUrl(null);

        try {
            const generatedImageUrl = await generateOutfitImage(prompt);
            setImageUrl(generatedImageUrl);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(`Failed to generate image. Please try again. Error: ${errorMessage}`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 sm:p-6">
            <div className="w-full max-w-2xl mx-auto flex flex-col h-full">
                <Header />
                <main className="flex-grow flex flex-col mt-8">
                    <ErrorAlert message={error} />
                    <ImageDisplay imageUrl={imageUrl} isLoading={isLoading} />
                </main>
                <footer className="w-full sticky bottom-0 bg-gray-900 bg-opacity-80 backdrop-blur-md py-4 mt-auto">
                    <PromptForm
                        prompt={prompt}
                        setPrompt={setPrompt}
                        onSubmit={handleGenerate}
                        isLoading={isLoading}
                    />
                </footer>
            </div>
        </div>
    );
};

export default App;
