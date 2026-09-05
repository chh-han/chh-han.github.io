import React from 'react';
import { tokens } from '@/styles/tokens';
import { site } from '@/data/site';
import Mono from '../ui/Mono';
import Ext from '../ui/Ext';
import SectionLabel from '../ui/SectionLabel';
import Nav from '../Nav';
import Footer from '../Footer';

export default function Home() {
  const d = site;
  return (
    <div style={{ background: tokens.paper, color: tokens.ink, fontFamily: tokens.sans, minHeight: '100%' }}>
      <Nav active="Home" />

      <main id="main">

      {/* Hero */}
      <div className="section" style={{ '--pt': '64px', '--pb': '48px', borderBottom: `1px solid ${tokens.rule}` }}>
        <div className="grid-collapse" style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
              <Mono size={11} color={tokens.accent}>§ 00 · INDEX</Mono>
              <Mono size={11} color={tokens.ink3}>GOTHENBURG · 57.6878° N</Mono>
            </div>

            <h1 style={{ margin: '0 0 8px', fontSize: 'clamp(44px, 9vw, 96px)', lineHeight: 0.92, fontWeight: 600, letterSpacing: '-0.04em', color: tokens.ink }}>
              ChangHeon<br />Han<span style={{ color: tokens.accent }}>.</span>
            </h1>
            <Mono size={11} color={tokens.ink3} style={{ marginBottom: 24, display: 'inline-block' }}>한창헌 · HAN</Mono>

            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 24, rowGap: 8, marginTop: 32, maxWidth: 720 }}>
              <Mono size={11} color={tokens.ink3}>ROLE</Mono>
              <div style={{ fontSize: 15, color: tokens.ink }}>Ph.D. Student, Computer Science & Engineering</div>
              <Mono size={11} color={tokens.ink3}>AT</Mono>
              <div style={{ fontSize: 15, color: tokens.ink }}>Chalmers University of Technology · WASP-HS</div>
              <Mono size={11} color={tokens.ink3}>FOCUS</Mono>
              <div style={{ fontSize: 15, color: tokens.ink2 }}>Learned cultural representation spaces in generative AI for creative domains.</div>
            </div>
          </div>

          {/* Portrait */}
          <div>
            <div className="portrait" style={{ width: '100%', aspectRatio: '4/5', background: tokens.paperAlt, overflow: 'hidden', position: 'relative' }}>
              <img src={d.profile.portrait} alt="ChangHeon Han" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.05) contrast(1.04)' }} />
              <div style={{ position: 'absolute', left: 12, top: 12, padding: '4px 8px', background: tokens.paper, fontFamily: tokens.mono, fontSize: 9, letterSpacing: '0.08em', color: tokens.ink, textTransform: 'uppercase' }}>PORTRAIT · 2025</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <Mono size={10} color={tokens.ink3}>FIG. 01</Mono>
              <Mono size={10} color={tokens.ink3}>SUBJECT, FACING CAMERA</Mono>
            </div>
          </div>
        </div>
      </div>

      {/* Dual identity strip */}
      <div className="grid-collapse" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${tokens.rule}` }}>
        <div className="section" style={{ '--pt': '40px', '--pb': '40px', borderRight: `1px solid ${tokens.rule}` }}>
          <Mono size={10} color={tokens.ink3}>A.</Mono>
          <h2 style={{ fontSize: 'clamp(30px, 5.2vw, 56px)', lineHeight: 1, fontWeight: 600, letterSpacing: '-0.03em', margin: '8px 0 16px' }}>Researcher</h2>
          <Mono size={11} color={tokens.accent}>AI · MULTIMODAL · MUSIC</Mono>
          <div style={{ fontSize: 14, color: tokens.ink2, marginTop: 16, maxWidth: 480, lineHeight: 1.5 }}>
            Multimodal learning, signal processing, NLP, music information retrieval. Previously at SONY Europe and SMU.
          </div>
        </div>
        <div className="section" style={{ '--pt': '40px', '--pb': '40px', background: tokens.paperAlt }}>
          <Mono size={10} color={tokens.ink3}>B.</Mono>
          <h2 style={{ fontSize: 'clamp(30px, 5.2vw, 56px)', lineHeight: 1, fontWeight: 600, letterSpacing: '-0.03em', margin: '8px 0 16px' }}>Producer</h2>
          <Mono size={11} color={tokens.accent}>800K+ STREAMS · K-POP EDITORIAL</Mono>
          <div style={{ fontSize: 14, color: tokens.ink2, marginTop: 16, maxWidth: 480, lineHeight: 1.5 }}>
            Seven years of music production. Sole songwriter and rights holder on 33 copyrighted songs, four Spotify editorial features, ten produced tracks across five artists.
          </div>
        </div>
      </div>

      {/* About */}
      <div className="section" style={{ '--pt': '56px', '--pb': '40px', borderBottom: `1px solid ${tokens.rule}` }}>
        <SectionLabel no="01" name="About" />
        <div className="grid-collapse" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 1100 }}>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: tokens.ink, margin: 0 }}>{d.bio.p1}</p>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: tokens.ink2, margin: 0 }}>{d.bio.p2}</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32 }}>
          {d.identity.keywords.map((k) => (
            <div key={k} style={{ padding: '6px 10px', border: `1px solid ${tokens.rule}`, fontFamily: tokens.mono, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: tokens.ink }}>{k}</div>
          ))}
        </div>
      </div>

      {/* News */}
      <div className="section" style={{ '--pt': '56px', '--pb': '40px', borderBottom: `1px solid ${tokens.rule}` }}>
        <SectionLabel no="02" name="Recent" count={d.news.length} maxWidth={1100} right={<Mono size={10} color={tokens.ink3}>↓ LATEST FIRST</Mono>} />
        <div>
          {d.news.map((n, i) => (
            <div key={i} className="row-news" style={{ display: 'grid', gridTemplateColumns: '120px 80px 1fr', alignItems: 'baseline', padding: '18px 0', borderTop: i === 0 ? `1px solid ${tokens.rule}` : `1px solid ${tokens.ruleSoft}`, gap: 24, maxWidth: 1100 }}>
              <Mono size={12} color={tokens.ink} weight={600}>{n.date}</Mono>
              <Mono size={10} color={tokens.accent}>{n.kind.toUpperCase()}</Mono>
              <div style={{ fontSize: 15, color: tokens.ink, lineHeight: 1.45 }}>{n.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Research highlights */}
      <div className="section" style={{ '--pt': '56px', '--pb': '40px', borderBottom: `1px solid ${tokens.rule}` }}>
        <SectionLabel no="03" name="Research Highlights" lead right={<Mono size={10} color={tokens.ink3}>→ FULL LIST AT /RESEARCH</Mono>} />
        <div className="grid-collapse" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, borderTop: `1px solid ${tokens.rule}` }}>
          {d.publications.filter((p) => p.selected).map((p) => (
            <div key={p.id} className="hl-cell" style={{ padding: '22px 28px 4px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Mono size={11} color={tokens.accent} weight={600}>{p.venueShort} · {p.year}</Mono>
              <h3 style={{ margin: 0, fontSize: 17, lineHeight: 1.25, fontWeight: 600, color: tokens.ink, letterSpacing: '-0.01em' }}>{p.title}</h3>
              <div style={{ fontSize: 12, color: tokens.ink3 }}>{p.authors.join(' · ')}</div>
              <div style={{ flex: 1, fontSize: 13, lineHeight: 1.5, color: tokens.ink2 }}>{p.tldr}</div>
              <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                {Object.entries(p.links || {}).map(([k, url]) => (
                  <Ext key={k} href={url}><Mono size={10} color={tokens.ink}>{k.toUpperCase()} ↗</Mono></Ext>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="section" style={{ '--pt': '56px', '--pb': '64px', }}>
        <SectionLabel no="04" name="Contact" />
        <div className="grid-collapse" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 24, alignItems: 'end' }}>
          <div>
            <Mono size={10} color={tokens.ink3}>PRIMARY</Mono>
            <Ext href={`mailto:${d.profile.email}`}>
              <div style={{ fontSize: 'clamp(17px, 2.6vw, 30px)', fontFamily: tokens.mono, fontWeight: 500, color: tokens.ink, letterSpacing: '-0.02em', marginTop: 6, overflowWrap: 'anywhere' }}>{d.profile.email}</div>
            </Ext>
          </div>
          {[
            ['SCHOLAR', '@' + (d.profile.gscholar.split('user=')[1]?.slice(0, 8) || ''), d.profile.gscholar],
            ['GITHUB', '@' + d.profile.githubHandle, d.profile.github],
            ['LINKEDIN', '@' + d.profile.linkedinHandle, d.profile.linkedin],
          ].map(([k, v, url]) => (
            <Ext key={k} href={url}>
              <div>
                <Mono size={10} color={tokens.ink3}>{k}</Mono>
                <div style={{ fontSize: 14, fontFamily: tokens.mono, color: tokens.ink, marginTop: 6 }}>{v} ↗</div>
              </div>
            </Ext>
          ))}
        </div>
      </div>

      </main>

      <Footer />
    </div>
  );
}
