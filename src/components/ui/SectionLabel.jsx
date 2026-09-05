import React from 'react';
import { tokens } from '@/styles/tokens';
import Mono from './Mono';

export default function SectionLabel({ no, name, count, right, level = 2 }) {
  const H = `h${level}`;
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '0 0 12px' }}>
      <Mono size={11} color={tokens.accent} weight={600}>§ {no}</Mono>
      <H style={{ margin: 0, fontFamily: tokens.sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: tokens.ink }}>{name}</H>
      {count != null && <Mono size={11} color={tokens.ink3}>[{String(count).padStart(2, '0')} items]</Mono>}
      <div style={{ flex: 1 }} />
      {right}
    </div>
  );
}
