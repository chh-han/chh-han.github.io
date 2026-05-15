import React from 'react';
import { tokens } from '@/styles/tokens';
import { site } from '@/data/site';
import Mono from '../ui/Mono';
import Ext from '../ui/Ext';
import Nav from '../Nav';
import Footer from '../Footer';

export default function Bio() {
  const d = site;
  const events = [
    ...d.education.map((e) => ({ ...e, type: 'EDU', label: e.degree, sub: e.org })),
    ...d.experience.map((e) => ({ ...e, type: 'WORK', label: e.role, sub: e.org })),
  ];
  events.sort((a, b) => {
    const sa = parseInt(a.period.match(/\d{4}/)[0]);
    const sb = parseInt(b.period.match(/\d{4}/)[0]);
    return sb - sa;
  });

  return (
    <div style={{ background: tokens.paper, color: tokens.ink, fontFamily: tokens.sans, minHeight: '100%' }}>
      <Nav active="Bio" />

      <div style={{ padding: '56px 56px 32px', borderBottom: `1px solid ${tokens.rule}` }}>
        <Mono size={11} color={tokens.accent}>§ 04 · CV / BIOGRAPHY</Mono>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, marginTop: 16 }}>
          <div style={{ fontSize: 88, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.04em' }}>Biography<span style={{ color: tokens.accent }}>.</span></div>
          <div style={{ paddingBottom: 16 }}>
            <Mono size={10} color={tokens.ink3}>SOURCE</Mono>
            <Ext href={d.profile.cv}>
              <div style={{ fontFamily: tokens.mono, fontSize: 13, color: tokens.ink }}>{d.profile.cv} ↗</div>
            </Ext>
          </div>
        </div>
      </div>

      <div style={{ padding: '48px 56px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32 }}>
          <div style={{ position: 'sticky', top: 24, height: 'fit-content' }}>
            <Mono size={10} color={tokens.ink3}>FILTER</Mono>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[['ALL', events.length], ['EDU', d.education.length], ['WORK', d.experience.length]].map(([k, c], i) => (
                <div key={k} style={{ padding: '8px 10px', background: i === 0 ? tokens.ink : 'transparent', color: i === 0 ? tokens.paper : tokens.ink, fontFamily: tokens.mono, fontSize: 11, letterSpacing: '0.06em', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{k}</span><span style={{ opacity: 0.6 }}>{String(c).padStart(2, '0')}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <Mono size={10} color={tokens.ink3}>SUMMARY</Mono>
              <div style={{ fontSize: 13, color: tokens.ink2, lineHeight: 1.55, marginTop: 8 }}>{d.bio.p3}</div>
            </div>
          </div>

          <div>
            <div style={{ borderTop: `1px solid ${tokens.rule}` }}>
              {events.map((e, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 70px 1fr 160px', gap: 24, padding: '22px 0', borderBottom: `1px solid ${tokens.ruleSoft}`, alignItems: 'start' }}>
                  <Mono size={12} color={tokens.ink} weight={600}>{e.period}</Mono>
                  <Mono size={10} color={e.type === 'EDU' ? tokens.accent : tokens.ink2}>{e.type}</Mono>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 600, color: tokens.ink, letterSpacing: '-0.01em' }}>{e.label}</div>
                    <div style={{ fontSize: 14, color: tokens.ink2, marginTop: 4 }}>{e.sub}</div>
                    {e.meta && <div style={{ fontSize: 13, color: tokens.ink3, marginTop: 8, lineHeight: 1.5 }}>{e.meta}</div>}
                  </div>
                  <Mono size={10} color={tokens.ink3} style={{ textAlign: 'right' }}>{e.place}</Mono>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
