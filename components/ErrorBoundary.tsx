import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the whole app
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // TODO: You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
          <div className="max-w-md w-full text-center">
            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
            </div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              We encountered an unexpected error. Don't worry, it's not your fault.
            </p>

            {/* Technical Details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg text-left">
                <p className="text-xs font-mono text-red-800 dark:text-red-300 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <button
                onClick={this.handleReload}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Go to Homepage
              </button>
            </div>

            {/* Support Message */}
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
              If the problem persists, please contact support at{' '}
              <a 
                href="mailto:ing.yaserhasan@gmail.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                ing.yaserhasan@gmail.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
