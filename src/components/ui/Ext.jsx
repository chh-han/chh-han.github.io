import React from 'react';

export default function Ext({ href, children, style, onClick }) {
  return (
    <a
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      onClick={onClick}
      style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', ...style }}
    >
      {children}
    </a>
  );
}
