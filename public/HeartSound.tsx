// HeartbeatAudio.tsx
import React, { useEffect, useRef } from 'react';

const HeartbeatAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
    }
  }, []);

  return (
    <audio id="heartbeat-audio" ref={audioRef} src="./heartbeat-sound-effect-111218.mp3" preload="auto" />
  );
};

export default HeartbeatAudio;
