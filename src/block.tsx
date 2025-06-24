import React, { useEffect, useState } from 'react';
import FPS from "./fps";

interface BlockProps {
}

const Block: React.FC<BlockProps> = () => {
  // Send completion event
  useEffect(() => {
      window.postMessage({ 
        type: 'BLOCK_COMPLETION', 
        blockId: '685b0504121d7106f7c6cdcb', 
        completed: true,
        score: score,
        maxScore: 100
      }, '*');
      window.parent?.postMessage({ 
        type: 'BLOCK_COMPLETION', 
        blockId: '685b0504121d7106f7c6cdcb', 
        completed: true,
        score: score,
        maxScore: 100
      }, '*');
    }
  }, []);
  return (
    <FPS />
  );
};

export default Block;
