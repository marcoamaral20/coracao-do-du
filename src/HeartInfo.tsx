// HeartInfo.tsx
import React from 'react';
import HeartbeatAudio from '../public/HeartSound'; // Update the import path as needed

const HeartInfo: React.FC = () => {
  const handlePlayHeartbeat = () => {
    const audioElement = document.getElementById('heartbeat-audio') as HTMLAudioElement | null;
    if (audioElement) {
      audioElement.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div className="heart-info">
<p>Ouça o som do coração </p>
      <button className="heart-pulse-button" onClick={handlePlayHeartbeat}>
        <span>Clique aqui</span>
      </button>
      <HeartbeatAudio />
    </div>
  );
};

export default HeartInfo;
