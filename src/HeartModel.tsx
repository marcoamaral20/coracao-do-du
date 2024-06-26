import React, { useEffect, useRef } from 'react';

const HeartModel: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.setAttribute('mozallowfullscreen', 'true');
      iframeRef.current.setAttribute('webkitallowfullscreen', 'true');
    }
  }, []);

  return (
    <div>
      <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '500px' }}>
        <iframe
          ref={iframeRef}
          title="Realistic Human Heart"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/3f8072336ce94d18b3d0d055a1ece089/embed"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
        <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
          <a
            href="https://sketchfab.com/3d-models/realistic-human-heart-3f8072336ce94d18b3d0d055a1ece089?utm_medium=embed&utm_campaign=share-popup&utm_content=3f8072336ce94d18b3d0d055a1ece089"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Realistic Human Heart
          </a>{' '}
          by{' '}
          <a
            href="https://sketchfab.com/neshallads?utm_medium=embed&utm_campaign=share-popup&utm_content=3f8072336ce94d18b3d0d055a1ece089"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            neshallads
          </a>{' '}
          on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3f8072336ce94d18b3d0d055a1ece089"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Sketchfab
          </a>
        </p>
      </div>

      <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '500px', marginTop: '20px' }}>
        <iframe
          title="Animated Human heart cross section"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/6736a2b663d5421a956bd60778fcd877/embed"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
        <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
          <a
            href="https://sketchfab.com/3d-models/animated-human-heart-cross-section-6736a2b663d5421a956bd60778fcd877?utm_medium=embed&utm_campaign=share-popup&utm_content=6736a2b663d5421a956bd60778fcd877"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Animated Human heart cross section
          </a>{' '}
          by{' '}
          <a
            href="https://sketchfab.com/EhabShalot?utm_medium=embed&utm_campaign=share-popup&utm_content=6736a2b663d5421a956bd60778fcd877"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Ehab Shalout
          </a>{' '}
          on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6736a2b663d5421a956bd60778fcd877"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Sketchfab
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeartModel;
