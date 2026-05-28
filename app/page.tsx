import '@/builder-registry';

export default function Home() {
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
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1a202c', margin: '0 0 12px 0' }}>
        Prep for Publish
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
        {/* Arrow pointing left toward the Fusion chat panel */}
        <svg
          width="64"
          height="32"
          viewBox="0 0 64 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
        >
          <line x1="64" y1="16" x2="10" y2="16" stroke="#4a6cf7" strokeWidth="3" strokeLinecap="round" />
          <polyline points="24,4 8,16 24,28" fill="none" stroke="#4a6cf7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <p style={{ fontSize: '16px', color: '#4a5568', margin: 0, maxWidth: '280px', lineHeight: '1.5' }}>
          Enter a site address in the chat to generate matching components
        </p>
      </div>
    </div>
  );
}
