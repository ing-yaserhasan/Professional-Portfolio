/**
 * Analytics Utilities
 * Helper functions for tracking page views and events
 * Works with Google Analytics (gtag.js)
 */

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a page view
 * @param path - The page path (e.g., '/', '/portfolio')
 */
export const trackPageView = (path: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
      page_path: path,
    });
    console.log('📊 Page view tracked:', path);
  } else {
    console.log('📊 Analytics not initialized - Page view:', path);
  }
};

/**
 * Track a custom event
 * @param action - The action being tracked (e.g., 'click', 'download')
 * @param category - The category (e.g., 'engagement', 'navigation')
 * @param label - Optional label for more context
 * @param value - Optional numeric value
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
    console.log('📊 Event tracked:', { action, category, label, value });
  } else {
    console.log('📊 Analytics not initialized - Event:', { action, category, label, value });
  }
};

/**
 * Track button clicks
 * @param buttonName - The name of the button
 */
export const trackButtonClick = (buttonName: string): void => {
  trackEvent('click', 'Button', buttonName);
};

/**
 * Track link clicks
 * @param linkName - The name/destination of the link
 */
export const trackLinkClick = (linkName: string): void => {
  trackEvent('click', 'Link', linkName);
};

/**
 * Track language changes
 * @param language - The selected language
 */
export const trackLanguageChange = (language: string): void => {
  trackEvent('change', 'Language', language);
};

/**
 * Track section views (for scroll spy)
 * @param sectionName - The name of the section
 */
export const trackSectionView = (sectionName: string): void => {
  trackEvent('view', 'Section', sectionName);
};

/**
 * Track file downloads
 * @param fileName - The name of the file being downloaded
 */
export const trackDownload = (fileName: string): void => {
  trackEvent('download', 'File', fileName);
};

/**
 * Track form submissions
 * @param formName - The name of the form
 * @param success - Whether the submission was successful
 */
export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackEvent(
    success ? 'submit_success' : 'submit_error',
    'Form',
    formName
  );
};

/**
 * Track errors
 * @param errorMessage - The error message
 * @param errorSource - Where the error occurred
 */
export const trackError = (errorMessage: string, errorSource: string): void => {
  trackEvent('error', 'Error', `${errorSource}: ${errorMessage}`);
};

/**
 * Track performance metrics
 * @param metricName - The name of the metric
 * @param value - The numeric value
 */
export const trackPerformance = (metricName: string, value: number): void => {
  trackEvent('performance', 'Performance', metricName, value);
};

/**
 * Initialize analytics and track initial page load
 */
export const initAnalytics = (): void => {
  if (typeof window !== 'undefined') {
    // Track initial page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      trackPerformance('page_load_time', Math.round(loadTime));
    });

    console.log('📊 Analytics initialized');
  }
};
