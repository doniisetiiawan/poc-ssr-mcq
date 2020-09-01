import React from 'react';
import { useParams } from 'react-router';

function CatColor() {
  const { color } = useParams();
  return (
    <p>
      ...and I am <strong>{color}</strong>!
    </p>
  );
}

export default CatColor;
