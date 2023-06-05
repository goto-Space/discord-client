import React from 'react';

import EmptyWrapper from './style';

interface EmptyProps {
  message: string;
}

function Empty({ message = '' }: EmptyProps) {
  return (
    <EmptyWrapper>
      <p>{message}</p>
    </EmptyWrapper>
  );
}

export default Empty;
