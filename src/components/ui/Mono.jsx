import React from 'react';
import { tokens } from '@/styles/tokens';

// 11px is the mobile minimum readable size; call sites asking for 8-10px get
// clamped rather than shipping label text nobody can read.
export default function Mono({ children, size = 11, color, weight = 500, style, className }) {
  return (
    <span className={className} style={{ fontFamily: tokens.mono, fontSize: Math.max(size, 11), fontWeight: weight, letterSpacing: '0.02em', color: color || tokens.ink2, textTransform: 'uppercase', ...style }}>
      {children}
    </span>
  );
}
