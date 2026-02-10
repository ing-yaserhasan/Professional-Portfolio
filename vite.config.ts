import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // Base URL for GitHub Pages - Update with your repo name
    base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
    
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    
    plugins: [
      react(),
      
      // Compression Plugin - Gzip
      compression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      
      // Compression Plugin - Brotli
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      
      // PWA Plugin
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'Yaser Hasan - Digital Solutions Architect',
          short_name: 'YH Portfolio',
          description: 'Professional portfolio with 10+ years of experience',
          theme_color: '#3b82f6',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: '/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      })
    ],
    
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.VITE_GA_MEASUREMENT_ID': JSON.stringify(env.VITE_GA_MEASUREMENT_ID),
      'process.env.VITE_SITE_URL': JSON.stringify(env.VITE_SITE_URL),
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '@components': path.resolve(__dirname, './components'),
        '@utils': path.resolve(__dirname, './utils'),
      }
    },
    
    build: {
      // Output directory
      outDir: 'dist',
      
      // Generate source maps for production debugging
      sourcemap: mode === 'development',
      
      // Minify options
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
        },
      },
      
      // Chunk size warnings
      chunkSizeWarningLimit: 1000,
      
      // Rollup options for code splitting
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'lucide-icons': ['lucide-react'],
          },
          // Asset file names
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.');
            let extType = info?.[info.length - 1];
            
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || '')) {
              extType = 'images';
            } else if (/woff|woff2|eot|ttf|otf/i.test(extType || '')) {
              extType = 'fonts';
            }
            
            return `assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        }
      },
      
      // CSS code splitting
      cssCodeSplit: true,
    },
    
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react'],
    },
    
    // Preview server configuration
    preview: {
      port: 4173,
      host: '0.0.0.0',
    },
  };
});
