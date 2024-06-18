// src/HeartInfo.tsx
import React from 'react';

const HeartInfo: React.FC = () => {
  return (
    <div>
      <h2>Heart Anatomy</h2>
      <p>
        The heart is a muscular organ that pumps blood throughout the body. It is
        divided into four chambers: the left and right atria, and the left and
        right ventricles.
      </p>
      <ul>
        <li>
          <strong>Left Atrium:</strong> Receives oxygenated blood from the lungs
        </li>
        <li>
          <strong>Left Ventricle:</strong> Pumps oxygenated blood to the rest of
          the body
        </li>
        <li>
          <strong>Right Atrium:</strong> Receives deoxygenated blood from the body
        </li>
        <li>
          <strong>Right Ventricle:</strong> Pumps deoxygenated blood to the lungs
        </li>
      </ul>
    </div>
  );
};

export default HeartInfo;
