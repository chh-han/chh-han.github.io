import React from 'react';
import { tokens } from '@/styles/tokens';
import { site } from '@/data/site';
import Mono from './ui/Mono';
import Ext from './ui/Ext';

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${tokens.rule}`, padding: '32px 56px', display: 'flex', alignItems: 'flex-end', gap: 40, background: tokens.paper }}>
      <div style={{ flex: 1 }}>
        <Mono size={10} color={tokens.ink3}>© 2026 · CHANGHEON HAN · BUILT IN GOTHENBURG</Mono>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <Ext href={`mailto:${site.profile.email}`}><Mono size={11} color={tokens.ink}>EMAIL ↗</Mono></Ext>
        <Ext href={site.profile.gscholar}><Mono size={11} color={tokens.ink}>SCHOLAR ↗</Mono></Ext>
        <Ext href={site.profile.github}><Mono size={11} color={tokens.ink}>GITHUB ↗</Mono></Ext>
        <Ext href={site.profile.linkedin}><Mono size={11} color={tokens.ink}>LINKEDIN ↗</Mono></Ext>
      </div>
    </footer>
  );
}
