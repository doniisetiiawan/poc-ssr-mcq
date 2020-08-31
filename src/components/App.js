import React from 'react';

export default () => {
  const env = __isClientSide__ ? 'from client' : 'from server';

  return (
    <>
      <div>Hello {env}!</div>
      <img src="/static/kitten.jpg" alt="kitten" />
    </>
  );
};
