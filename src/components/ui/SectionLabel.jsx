import React from 'react';
import { tokens } from '@/styles/tokens';
import Mono from './Mono';

// `lead` marks the section that carries the page — without it every section
// header is the same 13px and importance reads only from order.
export default function SectionLabel({ no, name, count, right, level = 2, lead = false, maxWidth }) {
  const H = `h${level}`;
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, maxWidth, padding: lead ? '0 0 20px' : '0 0 12px' }}>
      <Mono size={11} color={tokens.accent} weight={600}>§ {no}</Mono>
      <H style={{ margin: 0, fontFamily: tokens.sans, fontSize: lead ? 19 : 13, fontWeight: 600, letterSpacing: lead ? '0.01em' : '0.04em', textTransform: 'uppercase', color: tokens.ink }}>{name}</H>
      {count != null && <Mono size={11} color={tokens.ink3}>[{String(count).padStart(2, '0')} items]</Mono>}
      <div style={{ flex: 1 }} />
      {right}
    </div>
  );
}
