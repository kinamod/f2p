'use client';

import '@/builder-registry';
import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');

  async function handleClone() {
    if (!url) return;
    const msg = `clone this site: ${url}`;

    // Attempt to send directly to Fusion chat via Builder.io postMessage protocol
    try {
      window.parent?.postMessage({ type: 'builder.userMessage', message: msg }, '*');
      window.parent?.postMessage({ type: 'builder.fusion.sendMessage', message: msg }, '*');
    } catch {}

    // Always copy to clipboard as a guaranteed fallback
    try {
      await navigator.clipboard.writeText(msg);
    } catch {}

    setPrompt(msg);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleClone();
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #fafafa 100%)',
      padding: '20px',
    }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#1a202c', margin: '0 0 8px 0', textAlign: 'center' }}>
        Prep for Publish
      </h1>
      <p style={{ fontSize: '16px', color: '#718096', margin: '0 0 40px 0', textAlign: 'center' }}>
        Paste a homepage URL and Fusion will generate matching components
      </p>

      <div style={{ display: 'flex', width: '100%', maxWidth: '560px', gap: '10px' }}>
        <input
          type="url"
          value={url}
          onChange={(e) => { setUrl(e.target.value); setPrompt(''); }}
          onKeyDown={handleKeyDown}
          placeholder="https://example.com"
          style={{
            flex: 1,
            padding: '14px 18px',
            fontSize: '16px',
            border: '2px solid #e2e8f0',
            borderRadius: '10px',
            outline: 'none',
            color: '#1a202c',
            background: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
          onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
        />
        <button
          onClick={handleClone}
          disabled={!url}
          style={{
            padding: '14px 24px',
            fontSize: '16px',
            fontWeight: 600,
            background: prompt ? '#16a34a' : '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: url ? 'pointer' : 'not-allowed',
            whiteSpace: 'nowrap',
            opacity: url ? 1 : 0.6,
            boxShadow: prompt ? '0 2px 8px rgba(22,163,74,0.3)' : '0 2px 8px rgba(37,99,235,0.3)',
            transition: 'background 0.2s, box-shadow 0.2s, opacity 0.2s',
          }}
        >
          {prompt ? '✓ Sent!' : 'Clone'}
        </button>
      </div>

      {prompt && (
        <div style={{
          marginTop: '24px',
          width: '100%',
          maxWidth: '560px',
          background: '#f0fdf4',
          border: '1.5px solid #86efac',
          borderRadius: '12px',
          padding: '16px 20px',
        }}>
          <p style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: 600, color: '#15803d' }}>
            Copied to clipboard — paste this into the Fusion chat:
          </p>
          <code style={{
            display: 'block',
            background: 'white',
            border: '1px solid #d1fae5',
            borderRadius: '8px',
            padding: '10px 14px',
            fontSize: '14px',
            color: '#1a202c',
            wordBreak: 'break-all',
            userSelect: 'all',
          }}>
            {prompt}
          </code>
        </div>
      )}

      {!prompt && (
        <p style={{ fontSize: '13px', color: '#a0aec0', marginTop: '16px', textAlign: 'center' }}>
          Or just tell Fusion: <em>&ldquo;clone this site: https://example.com&rdquo;</em>
        </p>
      )}
    </div>
  );
}
