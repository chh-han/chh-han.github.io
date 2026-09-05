import React from 'react';
import { tokens } from '@/styles/tokens';
import { site } from '@/data/site';
import Mono from './ui/Mono';

const ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Creation', href: '/creation' },
  { label: 'Bio', href: '/bio' },
  { label: 'Blog', href: '/blog' },
];

export default function Nav({ active = 'Home' }) {
  return (
    <nav aria-label="Primary" className="site-nav">
      <a href="/" style={{ display: 'flex', alignItems: 'baseline', gap: 10, textDecoration: 'none', color: 'inherit' }}>
        <div style={{ fontFamily: tokens.sans, fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: tokens.ink }}>ChangHeon&nbsp;Han</div>
        <Mono size={10} color={tokens.ink3}>/ CH.H</Mono>
      </a>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {ITEMS.map((it, i) => (
          <a
            key={it.label}
            href={it.href}
            style={{ position: 'relative', padding: '10px 0', textDecoration: 'none', fontFamily: tokens.sans, fontSize: 13, fontWeight: 500, color: it.label === active ? tokens.ink : tokens.ink2, letterSpacing: '0.02em' }}
          >
            <Mono size={9} color={tokens.ink3} style={{ marginRight: 4 }}>0{i + 1}</Mono>
            {it.label}
            {it.label === active && <div style={{ position: 'absolute', left: 0, right: 0, bottom: -14, height: 2, background: tokens.accent }} />}
          </a>
        ))}
        <a href={site.profile.cv} target="_blank" rel="noreferrer" style={{ padding: '10px 0', fontFamily: tokens.sans, fontSize: 13, fontWeight: 500, color: tokens.ink2, textDecoration: 'none' }}>
          <Mono size={9} color={tokens.ink3} style={{ marginRight: 4 }}>06</Mono>CV ↗
        </a>
      </div>
    </nav>
  );
}
