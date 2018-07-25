import React from 'react';

const Strong = ({ children = 'World', ...props }) => (
  <strong {...props}>{children}</strong>
);

export default Strong;
