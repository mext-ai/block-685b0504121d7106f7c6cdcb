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
      }, '*');
      window.parent?.postMessage({ 
        type: 'BLOCK_COMPLETION', 
        blockId: '685b0504121d7106f7c6cdcb', 
        completed: true,
      }, '*');
  }, []);
  return (
    <FPS />
  );
};

export default Block;
