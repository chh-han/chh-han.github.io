import React from 'react';
import { tokens } from '@/styles/tokens';
import { site } from '@/data/site';
import Mono from '../ui/Mono';
import Ext from '../ui/Ext';
import SectionLabel from '../ui/SectionLabel';
import Nav from '../Nav';
import Footer from '../Footer';

function getEmbed(r) {
  if (!r) return null;
  if (r.spotify) {
    const m = r.spotify.match(/album\/([A-Za-z0-9]+)/);
    if (m) return {
      type: 'spotify',
      src: `https://open.spotify.com/embed/album/${m[1]}?utm_source=generator&theme=0`,
      height: 152,
      external: r.spotify,
    };
  }
  if (r.youtube) {
    const m = r.youtube.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([A-Za-z0-9_-]+)/);
    if (m) return {
      type: 'youtube',
      src: `https://www.youtube.com/embed/${m[1]}?rel=0`,
      height: 200,
      external: `https://www.youtube.com/watch?v=${m[1]}`,
    };
  }
  return null;
}

function MusicPlayer({ track, onClose }) {
  if (!track) return null;
  const embed = getEmbed(track);
  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0,
      background: tokens.paper,
      borderTop: `2px solid ${tokens.rule}`,
      boxShadow: '0 -8px 24px rgba(21,23,27,0.08)',
      zIndex: 100,
      fontFamily: tokens.sans,
    }}>
      <div style={{ display: 'flex', alignItems: 'stretch', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 24px', borderRight: `1px solid ${tokens.ruleSoft}`, minWidth: 320, flex: '0 0 auto' }}>
          {track.cover ? (
            <img src={track.cover} style={{ width: 56, height: 56, objectFit: 'cover', border: `1px solid ${tokens.rule}`, flex: '0 0 auto' }} />
          ) : (
            <div style={{ width: 56, height: 56, background: tokens.paperAlt, border: `1px solid ${tokens.rule}`, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
              <Mono size={9} color={tokens.ink3}>—</Mono>
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
              <Mono size={9} color={tokens.accent} weight={600}>NOW PLAYING · {track.kind}</Mono>
              <Mono size={9} color={tokens.ink3}>{track.year}</Mono>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: tokens.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.title}</div>
            <div style={{ fontSize: 12, color: tokens.ink2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.artist}</div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0, background: '#000' }}>
          {embed ? (
            <iframe
              key={embed.src}
              src={embed.src}
              style={{ width: '100%', height: embed.type === 'spotify' ? 152 : 180, border: 0, display: 'block' }}
              allow="autoplay; encrypted-media; clipboard-write; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div style={{ padding: 24, color: tokens.ink3, fontFamily: tokens.mono, fontSize: 11, letterSpacing: '0.06em' }}>NO EMBED AVAILABLE</div>
          )}
        </div>

        <div style={{ borderLeft: `1px solid ${tokens.ruleSoft}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '14px 18px', flex: '0 0 auto', minWidth: 140 }}>
          {embed && embed.external ? (
            <Ext href={embed.external} style={{ display: 'inline-block' }}>
              <div style={{ padding: '5px 9px', border: `1px solid ${tokens.rule}`, fontFamily: tokens.mono, fontSize: 9, letterSpacing: '0.06em', color: tokens.ink, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span>OPEN IN {embed.type === 'spotify' ? 'SPOTIFY' : 'YOUTUBE'}</span><span>↗</span>
              </div>
            </Ext>
          ) : <div />}
          <div
            onClick={onClose}
            style={{ cursor: 'pointer', fontFamily: tokens.mono, fontSize: 11, letterSpacing: '0.06em', color: tokens.ink, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}
            title="Close player"
          >
            ✕ CLOSE
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Creation() {
  const c = site.creation;
  const [active, setActive] = React.useState(null);
  return (
    <div style={{ background: tokens.paper, color: tokens.ink, fontFamily: tokens.sans, minHeight: '100%', paddingBottom: active ? 240 : 0 }}>
      <Nav active="Creation" />

      <div style={{ padding: '56px 56px 40px', borderBottom: `1px solid ${tokens.rule}` }}>
        <Mono size={11} color={tokens.accent}>§ 03 · MUSIC PRACTICE</Mono>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, marginTop: 16, alignItems: 'end' }}>
          <div>
            <div style={{ fontSize: 88, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.04em' }}>Creation<span style={{ color: tokens.accent }}>.</span></div>
            <div style={{ fontSize: 15, color: tokens.ink2, marginTop: 16, maxWidth: 520, lineHeight: 1.55 }}>{c.blurb}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, border: `1px solid ${tokens.rule}` }}>
            {c.stats.slice(0, 6).map((s, i) => (
              <div key={i} style={{ padding: '20px 16px', borderRight: i % 3 !== 2 ? `1px solid ${tokens.ruleSoft}` : 'none', borderBottom: i < 3 ? `1px solid ${tokens.ruleSoft}` : 'none' }}>
                <div style={{ fontFamily: tokens.mono, fontSize: 28, fontWeight: 500, color: tokens.ink, letterSpacing: '-0.02em' }}>{s.value}</div>
                <Mono size={9} color={tokens.ink3} style={{ marginTop: 4, display: 'block' }}>{s.label}</Mono>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '48px 56px 32px', borderBottom: `1px solid ${tokens.rule}` }}>
        <SectionLabel no="01" name="Highlights" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 1100 }}>
          {c.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '14px 0', borderTop: `1px solid ${tokens.ruleSoft}` }}>
              <Mono size={11} color={tokens.accent}>+{String(i + 1).padStart(2, '0')}</Mono>
              <div style={{ fontSize: 15, color: tokens.ink, lineHeight: 1.45 }}>{h}</div>
            </div>
          ))}
        </div>
      </div>

      {c.videos && c.videos.length > 0 && (
        <div style={{ padding: '48px 56px 40px', borderBottom: `1px solid ${tokens.rule}` }}>
          <SectionLabel no="02" name="Featured Video" count={c.videos.length} right={<Mono size={10} color={tokens.ink3}>BRAND · VISUAL ART · COLLABORATIONS</Mono>} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {c.videos.map((v, i) => {
              const m = v.youtube ? v.youtube.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([A-Za-z0-9_-]+)/) : null;
              const id = m ? m[1] : null;
              const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
              return (
                <Ext key={i} href={v.youtube} style={{ display: 'block' }}>
                  <div style={{ border: `1px solid ${tokens.rule}`, background: tokens.paper, transition: 'transform .15s', position: 'relative' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: tokens.paperAlt, overflow: 'hidden' }}>
                      {thumb ? (
                        <img src={thumb} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      ) : (
                        <div style={{ display: 'grid', placeItems: 'center', width: '100%', height: '100%' }}>
                          <Mono size={10} color={tokens.ink3}>VIDEO</Mono>
                        </div>
                      )}
                      <div style={{ position: 'absolute', top: 8, left: 8, padding: '3px 7px', background: tokens.paper, fontFamily: tokens.mono, fontSize: 9, letterSpacing: '0.08em', color: tokens.accent, fontWeight: 600 }}>{v.tag || 'VIDEO'}</div>
                      <div style={{ position: 'absolute', bottom: 8, right: 8, width: 32, height: 32, background: tokens.ink, color: tokens.paper, display: 'grid', placeItems: 'center', fontFamily: tokens.mono, fontSize: 11 }}>▶</div>
                    </div>
                    <div style={{ padding: '12px 14px' }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: tokens.ink, lineHeight: 1.25 }}>{v.title}</div>
                      <div style={{ fontSize: 12, color: tokens.ink2, marginTop: 4, lineHeight: 1.4 }}>{v.sub}</div>
                      <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <Mono size={9} color={tokens.ink3}>YOUTUBE</Mono>
                        <Mono size={9} color={tokens.ink}>WATCH ↗</Mono>
                      </div>
                    </div>
                  </div>
                </Ext>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ padding: '48px 56px 64px' }}>
        <SectionLabel
          no="03"
          name="Releases"
          count={c.releases.length}
          right={<Mono size={10} color={tokens.ink3}>{active ? 'NOW PLAYING ▼' : 'SPOTIFY: PLAY IN-PAGE · YOUTUBE: NEW TAB'}</Mono>}
        />

        {(() => {
          const groups = [
            { kind: 'PROD', label: 'Production', sub: 'Produced for other artists' },
            { kind: 'SOLO', label: 'Singer-Songwriter', sub: 'Now or Never series' },
            { kind: 'ELEC', label: 'Electronic', sub: 'House & dance' },
          ];
          return groups.map((g, gi) => {
            const items = c.releases.filter((r) => r.kind === g.kind);
            if (!items.length) return null;
            return (
              <div key={g.kind} style={{ marginTop: gi === 0 ? 16 : 36 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 8, paddingBottom: 8, borderBottom: `1px solid ${tokens.rule}` }}>
                  <Mono size={10} color={tokens.accent} weight={600}>0{gi + 1}</Mono>
                  <div style={{ fontFamily: tokens.sans, fontSize: 13, fontWeight: 600, color: tokens.ink, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{g.label}</div>
                  <Mono size={10} color={tokens.ink3}>{g.sub}</Mono>
                  <div style={{ flex: 1 }} />
                  <Mono size={10} color={tokens.ink3}>[{String(items.length).padStart(2, '0')}]</Mono>
                </div>

                {items.map((r, ri) => {
                  const isActive = active && active.title === r.title && active.artist === r.artist;
                  const hasSpot = !!r.spotify;
                  const hasYT = !!r.youtube;
                  const ytUrl = hasYT ? r.youtube : null;
                  return (
                    <div
                      key={ri}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '56px 110px 1fr auto',
                        gap: 18,
                        alignItems: 'center',
                        padding: '12px 0',
                        borderBottom: `1px solid ${tokens.ruleSoft}`,
                        background: isActive ? tokens.accent + '08' : 'transparent',
                        transition: 'background .12s',
                      }}
                    >
                      <div style={{ width: 56, height: 56, border: `1px solid ${tokens.rule}`, background: tokens.paperAlt, position: 'relative', overflow: 'hidden' }}>
                        {r.cover ? (
                          <img src={r.cover} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        ) : (
                          <div style={{ display: 'grid', placeItems: 'center', width: '100%', height: '100%' }}>
                            <Mono size={8} color={tokens.ink3}>—</Mono>
                          </div>
                        )}
                        {isActive && (
                          <div style={{ position: 'absolute', inset: 0, background: tokens.accent + 'CC', color: tokens.paper, display: 'grid', placeItems: 'center', fontSize: 14 }}>♪</div>
                        )}
                      </div>

                      <div>
                        <Mono size={10} color={tokens.ink3}>{r.year}</Mono>
                        <div style={{ marginTop: 4, padding: '2px 7px', display: 'inline-block', background: r.kind === 'PROD' ? tokens.ink : tokens.paperAlt, color: r.kind === 'PROD' ? tokens.paper : tokens.ink, fontFamily: tokens.mono, fontSize: 9, letterSpacing: '0.08em' }}>{r.kind}</div>
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 16, fontWeight: 600, color: tokens.ink, lineHeight: 1.25, letterSpacing: '-0.005em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {r.title}
                        </div>
                        <div style={{ fontSize: 13, color: tokens.ink2, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.artist}</div>
                      </div>

                      <div style={{ display: 'flex', gap: 8 }}>
                        {hasSpot && (
                          <div
                            onClick={() => setActive(isActive ? null : r)}
                            style={{
                              padding: '7px 12px',
                              background: isActive ? tokens.accent : tokens.ink,
                              color: tokens.paper,
                              fontFamily: tokens.mono,
                              fontSize: 10,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              transition: 'background .12s',
                            }}
                            title={isActive ? 'Stop' : 'Play in Spotify player'}
                          >
                            <span>{isActive ? '❚❚' : '▶'}</span>
                            <span>SPOTIFY</span>
                          </div>
                        )}
                        {hasYT && (
                          <Ext href={ytUrl} style={{ display: 'inline-block' }}>
                            <div
                              style={{
                                padding: '7px 12px',
                                border: `1px solid ${tokens.rule}`,
                                background: tokens.paper,
                                color: tokens.ink,
                                fontFamily: tokens.mono,
                                fontSize: 10,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                transition: 'background .12s, color .12s',
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = tokens.ink; e.currentTarget.style.color = tokens.paper; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = tokens.paper; e.currentTarget.style.color = tokens.ink; }}
                            >
                              <span>WATCH</span><span>↗</span>
                            </div>
                          </Ext>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          });
        })()}
      </div>

      <Footer />

      <MusicPlayer track={active} onClose={() => setActive(null)} />
    </div>
  );
}
