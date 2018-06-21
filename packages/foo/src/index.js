import React from "react";

const Strong = ({ children, ...props }) => (
  <strong {...props}>{children}</strong>
);

export default Strong;
