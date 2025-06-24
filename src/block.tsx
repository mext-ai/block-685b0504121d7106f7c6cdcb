import React, { useEffect, useState } from 'react';
import FPS from "./fps";

interface BlockProps {
}

const Block: React.FC<BlockProps> = () => {
  return (
    <FPS />
  );
};

export default Block;
