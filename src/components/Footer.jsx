import React from 'react';
import { tokens } from '@/styles/tokens';
import { site } from '@/data/site';
import Mono from './ui/Mono';
import Ext from './ui/Ext';

// Bare 11px text is a ~14px tall target; the padding brings it to ~30px.
const LINK = { display: 'inline-block', padding: '8px 0' };

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${tokens.rule}`, padding: '32px 56px', display: 'flex', alignItems: 'flex-end', gap: 40, background: tokens.paper }}>
      <div style={{ flex: 1 }}>
        <Mono size={10} color={tokens.ink3}>© 2026 · CHANGHEON HAN · BUILT IN GOTHENBURG</Mono>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        {/* Scholar/GitHub/LinkedIn live in the Contact section; repeating them
            here put the same four links twice on the home page, 70px apart. */}
        <Ext href={`mailto:${site.profile.email}`} style={LINK}><Mono size={11} color={tokens.ink}>EMAIL ↗</Mono></Ext>
        <Ext href="/rss.xml" style={LINK}><Mono size={11} color={tokens.ink}>RSS</Mono></Ext>
      </div>
    </footer>
  );
}
