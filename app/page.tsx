'use client';

import '@/builder-registry';
import VtexHeader from '@/components/VtexHeader/VtexHeader';
import EstatesGallery from '@/components/EstatesGallery/EstatesGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="showcase-header">
        <h1>Component Showcase</h1>
        <p>A storybook of reusable components</p>
      </div>

      <div className="showcase-container">
        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>VTEX Header</h2>
            <p className="showcase-section-description">
              A responsive navigation header component with dropdown menus and call-to-action buttons
            </p>
          </div>
          <div className="showcase-component-wrapper">
            <VtexHeader />
          </div>
        </div>
      </div>

      <style jsx>{`
        .showcase-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .showcase-header h1 {
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
        }

        .showcase-header p {
          font-size: 18px;
          margin: 0;
          opacity: 0.95;
          font-weight: 500;
        }

        .showcase-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .showcase-section {
          margin-bottom: 80px;
        }

        .showcase-section-header {
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .showcase-section-header h2 {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a202c;
          letter-spacing: -0.01em;
        }

        .showcase-section-description {
          font-size: 16px;
          color: #718096;
          margin: 0;
          max-width: 600px;
          line-height: 1.6;
        }

        .showcase-component-wrapper {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: visible;
        }

        .showcase-footer-wrapper {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
        }
      `}</style>
    </div>
  );
}
