import React from 'react';

export default function ButtonLabel({ children }) {
  return <span className="ra-button-label"><span data-button-label>{children}</span></span>;
}
