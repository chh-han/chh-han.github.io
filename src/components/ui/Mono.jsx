import React from 'react';
import { tokens } from '@/styles/tokens';

export default function Mono({ children, size = 11, color, weight = 500, style }) {
  return (
    <span style={{ fontFamily: tokens.mono, fontSize: size, fontWeight: weight, letterSpacing: '0.02em', color: color || tokens.ink2, textTransform: 'uppercase', ...style }}>
      {children}
    </span>
  );
}
