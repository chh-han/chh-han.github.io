import React from 'react';
import { tokens } from '@/styles/tokens';
import { site } from '@/data/site';
import Mono from '../ui/Mono';
import Ext from '../ui/Ext';
import Nav from '../Nav';
import Footer from '../Footer';

const KINDS = [
  { key: 'all', label: 'ALL' },
  { key: 'publication', label: 'PUBLICATIONS' },
  { key: 'project', label: 'PROJECTS' },
];
const TOPICS = ['ALL', 'Music', 'NLP', 'Audio'];

export default function Research() {
  const pubs = site.publications;
  const [kindFilter, setKindFilter] = React.useState('all');
  const [topicFilter, setTopicFilter] = React.useState('ALL');

  const kindCounts = React.useMemo(() => ({
    all: pubs.length,
    publication: pubs.filter((p) => (p.kind || 'publication') === 'publication').length,
    project: pubs.filter((p) => p.kind === 'project').length,
  }), [pubs]);
  const topicCounts = React.useMemo(() => {
    const base = kindFilter === 'all' ? pubs : pubs.filter((p) => (p.kind || 'publication') === kindFilter);
    const c = { ALL: base.length };
    base.forEach((p) => { c[p.topic] = (c[p.topic] || 0) + 1; });
    return c;
  }, [pubs, kindFilter]);

  let filtered = pubs;
  if (kindFilter !== 'all') filtered = filtered.filter((p) => (p.kind || 'publication') === kindFilter);
  if (topicFilter !== 'ALL') filtered = filtered.filter((p) => p.topic === topicFilter);
  const byYear = filtered.reduce((m, p) => ((m[p.year] = m[p.year] || []).push(p), m), {});
  const years = Object.keys(byYear).sort((a, b) => b - a);

  return (
    <div style={{ background: tokens.paper, color: tokens.ink, fontFamily: tokens.sans, minHeight: '100%' }}>
      <Nav active="Research" />

      <main id="main">

      <div style={{ padding: '56px 56px 32px', borderBottom: `1px solid ${tokens.rule}` }}>
        <Mono size={11} color={tokens.accent}>§ 02 · RESEARCH</Mono>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, marginTop: 16 }}>
          <h1 style={{ margin: 0, fontSize: 88, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.04em' }}>Research<span style={{ color: tokens.accent }}>.</span></h1>
          <div style={{ paddingBottom: 16 }}>
            <Mono size={10} color={tokens.ink3}>INDEX</Mono>
            <div style={{ fontFamily: tokens.mono, fontSize: 14, color: tokens.ink }}>[ {filtered.length.toString().padStart(2, '0')} of {pubs.length.toString().padStart(2, '0')} · {years.length} years ]</div>
          </div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 0, borderTop: `1px solid ${tokens.rule}`, borderBottom: `1px solid ${tokens.ruleSoft}` }}>
          {KINDS.map((k, i) => (
            <button
              type="button"
              key={k.key}
              className="btn-reset"
              aria-pressed={k.key === kindFilter}
              onClick={() => setKindFilter(k.key)}
              style={{
                padding: '12px 20px',
                borderRight: i < KINDS.length - 1 ? `1px solid ${tokens.ruleSoft}` : 'none',
                background: k.key === kindFilter ? tokens.ink : 'transparent',
                color: k.key === kindFilter ? tokens.paper : tokens.ink2,
                fontFamily: tokens.mono,
                fontSize: 11,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background .12s, color .12s',
              }}
            >
              {k.label} [{kindCounts[k.key] || 0}]
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ padding: '12px 20px', borderLeft: `1px solid ${tokens.ruleSoft}`, fontFamily: tokens.mono, fontSize: 11, color: tokens.ink3, letterSpacing: '0.06em' }}>KIND</div>
        </div>

        <div style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${tokens.rule}` }}>
          {TOPICS.map((t, i) => (
            <button
              type="button"
              key={t}
              className="btn-reset"
              aria-pressed={t === topicFilter}
              onClick={() => setTopicFilter(t)}
              style={{
                padding: '10px 18px',
                borderRight: i < TOPICS.length - 1 ? `1px solid ${tokens.ruleSoft}` : 'none',
                background: t === topicFilter ? tokens.accent : 'transparent',
                color: t === topicFilter ? tokens.paper : tokens.ink2,
                fontFamily: tokens.mono,
                fontSize: 10,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background .12s, color .12s',
              }}
            >
              {t === 'ALL' ? 'ALL TOPICS' : t.toUpperCase()} [{topicCounts[t] || 0}]
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ padding: '10px 18px', borderLeft: `1px solid ${tokens.ruleSoft}`, fontFamily: tokens.mono, fontSize: 10, color: tokens.ink3, letterSpacing: '0.06em' }}>TOPIC · SORT DATE DESC</div>
        </div>
      </div>

      {years.length === 0 ? (
        <div style={{ padding: '80px 56px', textAlign: 'center' }}>
          <Mono size={11} color={tokens.ink3}>NO ENTRIES MATCH FILTER · {kindFilter.toUpperCase()} · {topicFilter.toUpperCase()}</Mono>
          <div style={{ marginTop: 16 }}>
            <button type="button" className="btn-reset" onClick={() => { setKindFilter('all'); setTopicFilter('ALL'); }} style={{ cursor: 'pointer', fontFamily: tokens.mono, fontSize: 11, color: tokens.accent, letterSpacing: '0.06em', textTransform: 'uppercase', minHeight: 32, padding: '0 8px' }}>↺ RESET FILTERS</button>
          </div>
        </div>
      ) : years.map((y) => (
        <div key={y} style={{ padding: '40px 56px 24px', borderBottom: `1px solid ${tokens.rule}` }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontFamily: tokens.mono, fontSize: 32, fontWeight: 500, color: tokens.accent, letterSpacing: '-0.02em' }}>{y}</h2>
            <Mono size={10} color={tokens.ink3}>{byYear[y].length} entries</Mono>
            <div style={{ flex: 1, borderBottom: `1px solid ${tokens.ruleSoft}`, marginBottom: 8 }} />
          </div>
          {byYear[y].map((p, i) => {
            const isProject = p.kind === 'project';
            return (
              <div key={p.id} id={p.id} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 200px', gap: 32, alignItems: 'start', padding: '20px 0', borderTop: i === 0 ? `1px solid ${tokens.ruleSoft}` : `1px solid ${tokens.ruleSoft}`, scrollMarginTop: 80 }}>
                <div>
                  <Mono size={11} color={tokens.ink} weight={600}>{p.date}</Mono>
                  <div style={{ marginTop: 6, padding: '4px 8px', display: 'inline-block', background: isProject ? tokens.paperAlt : tokens.ink, color: isProject ? tokens.ink : tokens.paper, border: isProject ? `1px solid ${tokens.rule}` : 'none', fontFamily: tokens.mono, fontSize: 9, letterSpacing: '0.06em' }}>{p.venueShort}</div>
                  {isProject && <div style={{ marginTop: 4, fontFamily: tokens.mono, fontSize: 8, letterSpacing: '0.08em', color: tokens.accent, fontWeight: 600 }}>// PROJECT</div>}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 20, lineHeight: 1.3, fontWeight: 600, color: tokens.ink, letterSpacing: '-0.01em' }}>{p.title}</h3>
                  <div style={{ fontSize: 13, color: tokens.ink2, marginBottom: 10 }}>
                    {p.authors.map((a, j) => (
                      <span key={j} style={{ fontWeight: a === 'ChangHeon Han' ? 700 : 400, color: a === 'ChangHeon Han' ? tokens.ink : tokens.ink2 }}>{a}{j < p.authors.length - 1 ? ', ' : ''}</span>
                    ))}
                    <span style={{ color: tokens.ink3 }}> · {p.venue}</span>
                  </div>
                  <div style={{ fontSize: 14, color: tokens.ink2, lineHeight: 1.55, marginBottom: 14 }}>{p.tldr}</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                    {Object.entries(p.links || {}).map(([k, url]) => (
                      <Ext key={k} href={url} style={{ display: 'inline-block' }}>
                        <div style={{ padding: '6px 12px', border: `1px solid ${tokens.rule}`, background: tokens.paper, fontFamily: tokens.mono, fontSize: 10, letterSpacing: '0.08em', color: tokens.ink, textTransform: 'uppercase', transition: 'background .12s, color .12s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = tokens.ink; e.currentTarget.style.color = tokens.paper; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = tokens.paper; e.currentTarget.style.color = tokens.ink; }}>
                          <span>{k}</span><span style={{ opacity: 0.7 }}>↗</span>
                        </div>
                      </Ext>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {p.tags.map((t) => (
                      <div key={t} style={{ padding: '4px 8px', border: `1px solid ${tokens.ruleSoft}`, fontFamily: tokens.mono, fontSize: 9, letterSpacing: '0.06em', color: tokens.ink2, textTransform: 'uppercase' }}>{t}</div>
                    ))}
                  </div>
                </div>
                <div>
                  {p.cover ? (
                    <img src={p.cover} alt="" style={{ width: '100%', height: 120, objectFit: 'cover', border: `1px solid ${tokens.rule}`, display: 'block' }} />
                  ) : (
                    <div style={{ width: '100%', height: 120, border: `1px solid ${tokens.rule}`, background: tokens.paperAlt, display: 'grid', placeItems: 'center' }}>
                      <Mono size={10} color={tokens.ink3}>NO COVER</Mono>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      </main>

      <Footer />
    </div>
  );
}
