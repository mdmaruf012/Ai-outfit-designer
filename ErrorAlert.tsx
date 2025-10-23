
import React from 'react';

interface ErrorAlertProps {
    message: string | null;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
    if (!message) {
        return null;
    }

    return (
        <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg relative mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{message}</span>
        </div>
    );
};
