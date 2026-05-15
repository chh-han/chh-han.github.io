import React from 'react';
import { tokens } from '@/styles/tokens';

export default function Rule({ thick = 1, color, style }) {
  return <div style={{ height: thick, background: color || tokens.rule, ...style }} />;
}
