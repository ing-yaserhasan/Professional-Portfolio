import React from 'react';
import { Code } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * LoadingSpinner Component
 * Displays a loading animation with optional message
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative">
          {/* Spinning Ring */}
          <div 
            className={`${sizeClasses[size]} border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin`}
          ></div>
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl p-2 animate-pulse">
              <Code size={iconSizes[size]} className="text-white" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            {message}
          </p>
          
          {/* Animated Dots */}
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Page Loading Component
 * Used for initial page load
 */
export const PageLoading: React.FC = () => {
  return <LoadingSpinner message="Preparing your experience..." size="lg" />;
};

/**
 * Content Loading Skeleton
 * Used for lazy-loaded components
 */
export const ContentLoadingSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-8 animate-pulse">
        {/* Header Skeleton */}
        <div className="space-y-3">
          <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/4"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
        </div>

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl mb-4"></div>
              <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded mb-3 w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
