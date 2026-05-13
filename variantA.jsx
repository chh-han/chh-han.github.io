// Variant A — Editorial Brutalist
// Off-white paper, ink-blue accent, Geist Sans + Geist Mono
// Hard edges, mono labels, large editorial type, thin rules

// Exposed on window so the host app can swap accent at runtime (Tweaks).
window.A = window.A || {
  paper: '#F1EEE6',
  paperAlt: '#E8E4DA',
  ink: '#15171B',
  ink2: '#3B3D44',
  ink3: '#7B7D85',
  rule: '#15171B',
  ruleSoft: 'rgba(21,23,27,0.14)',
  accent: '#1B3F7A',   // ink blue (default)
  accentSoft: '#E4E1F0',
  // Type
  sans: '"Geist", -apple-system, system-ui, sans-serif',
  mono: '"Geist Mono", ui-monospace, monospace',
};
const A = window.A;

// ── Shared atoms ─────────────────────────────────────────────
const Mono = ({ children, size = 11, color, weight = 500, style }) => (
  <span style={{ fontFamily: A.mono, fontSize: size, fontWeight: weight, letterSpacing: '0.02em', color: color || A.ink2, textTransform: 'uppercase', ...style }}>{children}</span>
);

// External link — wraps children in <a> with sane defaults; preserves color
const Ext = ({ href, children, style, onClick }) => (
  <a
    href={href}
    target={href && href.startsWith('http') ? '_blank' : undefined}
    rel="noreferrer"
    onClick={onClick}
    style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', ...style }}
  >
    {children}
  </a>
);

const Rule = ({ thick = 1, color, style }) => (
  <div style={{ height: thick, background: color || A.rule, ...style }} />
);

const SectionLabel = ({ no, name, count, right }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '0 0 12px' }}>
    <Mono size={11} color={A.accent} weight={600}>§ {no}</Mono>
    <div style={{ fontFamily: A.sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: A.ink }}>{name}</div>
    {count != null && <Mono size={11} color={A.ink3}>[{String(count).padStart(2, '0')} items]</Mono>}
    <div style={{ flex: 1 }} />
    {right}
  </div>
);

// ── Top bar ──────────────────────────────────────────────────
const NavA = ({ active = 'Home', onNav }) => {
  const items = ['Home', 'Research', 'Creation', 'Bio'];
  const navItem = (it, i) => (
    <div
      key={it}
      onClick={() => onNav && onNav(it)}
      style={{ position: 'relative', cursor: onNav ? 'pointer' : 'default', fontFamily: A.sans, fontSize: 13, fontWeight: 500, color: it === active ? A.ink : A.ink2, letterSpacing: '0.02em' }}>
      <Mono size={9} color={A.ink3} style={{ marginRight: 4 }}>0{i + 1}</Mono>
      {it}
      {it === active && <div style={{ position: 'absolute', left: 0, right: 0, bottom: -22, height: 2, background: A.accent }} />}
    </div>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 64, borderBottom: `1px solid ${A.rule}`, padding: '0 56px', background: A.paper, position: 'sticky', top: 0, zIndex: 50 }}>
      <div onClick={() => onNav && onNav('Home')} style={{ display: 'flex', alignItems: 'baseline', gap: 10, cursor: onNav ? 'pointer' : 'default' }}>
        <div style={{ fontFamily: A.sans, fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: A.ink }}>ChangHeon&nbsp;Han</div>
        <Mono size={10} color={A.ink3}>/ CH.H</Mono>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {items.map((it, i) => navItem(it, i))}
        <a href={window.SiteData.profile.cv} target="_blank" rel="noreferrer" style={{ fontFamily: A.sans, fontSize: 13, fontWeight: 500, color: A.ink2, textDecoration: 'none' }}>
          <Mono size={9} color={A.ink3} style={{ marginRight: 4 }}>05</Mono>CV ↗
        </a>
      </div>
    </div>
  );
};

const FooterA = () => {
  const d = window.SiteData;
  return (
    <div style={{ borderTop: `1px solid ${A.rule}`, padding: '32px 56px', display: 'flex', alignItems: 'flex-end', gap: 40, background: A.paper }}>
      <div style={{ flex: 1 }}>
        <Mono size={10} color={A.ink3}>© 2026 · CHANGHEON HAN · BUILT IN GOTHENBURG</Mono>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <Ext href={`mailto:${d.profile.email}`}><Mono size={11} color={A.ink}>EMAIL ↗</Mono></Ext>
        <Ext href={d.profile.gscholar}><Mono size={11} color={A.ink}>SCHOLAR ↗</Mono></Ext>
        <Ext href={d.profile.github}><Mono size={11} color={A.ink}>GITHUB ↗</Mono></Ext>
        <Ext href={d.profile.linkedin}><Mono size={11} color={A.ink}>LINKEDIN ↗</Mono></Ext>
      </div>
    </div>
  );
};

// ── HOME ─────────────────────────────────────────────────────
function HomeA({ onNav, tweaks = {} }) {
  const d = window.SiteData;
  const showSlogan = tweaks.showSlogan !== false;
  return (
    <div style={{ background: A.paper, color: A.ink, fontFamily: A.sans, minHeight: '100%' }}>
      <NavA active="Home" onNav={onNav} />

      {/* Hero */}
      <div style={{ padding: '64px 56px 48px', borderBottom: `1px solid ${A.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
              <Mono size={11} color={A.accent}>§ 00 · INDEX</Mono>
              <Mono size={11} color={A.ink3}>GOTHENBURG · 57.6878° N</Mono>
              <div style={{ flex: 1 }} />
              <Mono size={11} color={A.ink3}>2026 EDITION</Mono>
            </div>

            <div style={{ fontSize: 96, lineHeight: 0.92, fontWeight: 600, letterSpacing: '-0.04em', color: A.ink, marginBottom: 8 }}>
              ChangHeon<br />Han<span style={{ color: A.accent }}>.</span>
            </div>
            <Mono size={11} color={A.ink3} style={{ marginBottom: 24, display: 'inline-block' }}>한창헌 · /ʧæŋhɒn/</Mono>

            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 24, rowGap: 8, marginTop: 32, maxWidth: 640 }}>
              <Mono size={11} color={A.ink3}>ROLE</Mono>
              <div style={{ fontSize: 15, color: A.ink }}>Ph.D. Student, Computer Science & Engineering</div>
              <Mono size={11} color={A.ink3}>AT</Mono>
              <div style={{ fontSize: 15, color: A.ink }}>Chalmers University of Technology · WASP-HS</div>
              <Mono size={11} color={A.ink3}>FOCUS</Mono>
              <div style={{ fontSize: 15, color: A.ink2 }}>Learned cultural representation spaces in generative AI for creative domains.</div>
            </div>
          </div>

          {/* Portrait */}
          <div>
            <div style={{ width: '100%', aspectRatio: '4/5', background: '#ddd', overflow: 'hidden', position: 'relative' }}>
              <img src={d.profile.portrait} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.05) contrast(1.04)' }} />
              <div style={{ position: 'absolute', left: 12, top: 12, padding: '4px 8px', background: A.paper, fontFamily: A.mono, fontSize: 9, letterSpacing: '0.08em', color: A.ink, textTransform: 'uppercase' }}>PORTRAIT · 2025</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <Mono size={10} color={A.ink3}>FIG. 01</Mono>
              <Mono size={10} color={A.ink3}>SUBJECT, FACING CAMERA</Mono>
            </div>
          </div>
        </div>
      </div>

      {/* Dual identity strip */}
      {showSlogan && <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${A.rule}` }}>
        <div style={{ padding: '40px 56px', borderRight: `1px solid ${A.rule}` }}>
          <Mono size={10} color={A.ink3}>A.</Mono>
          <div style={{ fontSize: 56, lineHeight: 1, fontWeight: 600, letterSpacing: '-0.03em', margin: '8px 0 16px' }}>Researcher</div>
          <Mono size={11} color={A.accent}>AI · MULTIMODAL · MUSIC</Mono>
          <div style={{ fontSize: 14, color: A.ink2, marginTop: 16, maxWidth: 480, lineHeight: 1.5 }}>
            Multimodal learning, signal processing, NLP, music information retrieval. Previously at SONY Europe and SMU.
          </div>
        </div>
        <div style={{ padding: '40px 56px', background: A.paperAlt }}>
          <Mono size={10} color={A.ink3}>B.</Mono>
          <div style={{ fontSize: 56, lineHeight: 1, fontWeight: 600, letterSpacing: '-0.03em', margin: '8px 0 16px' }}>Producer</div>
          <Mono size={11} color={A.accent}>800K+ STREAMS · K-POP EDITORIAL</Mono>
          <div style={{ fontSize: 14, color: A.ink2, marginTop: 16, maxWidth: 480, lineHeight: 1.5 }}>
            Seven years of music production. 33 KOMCA-registered songs, four Spotify editorial features, ten produced tracks across five artists.
          </div>
        </div>
      </div>}

      {/* About */}
      <div style={{ padding: '56px 56px 40px', borderBottom: `1px solid ${A.rule}` }}>
        <SectionLabel no="01" name="About" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 1100 }}>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: A.ink, margin: 0 }}>{d.bio.p1}</p>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: A.ink2, margin: 0 }}>{d.bio.p2}</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32 }}>
          {d.identity.keywords.map((k) => (
            <div key={k} style={{ padding: '6px 10px', border: `1px solid ${A.rule}`, fontFamily: A.mono, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: A.ink }}>{k}</div>
          ))}
        </div>
      </div>

      {/* News */}
      <div style={{ padding: '56px 56px 40px', borderBottom: `1px solid ${A.rule}` }}>
        <SectionLabel no="02" name="Recent" count={d.news.length} right={<Mono size={10} color={A.ink3}>↓ LATEST FIRST</Mono>} />
        <div>
          {d.news.map((n, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 80px 1fr auto', alignItems: 'baseline', padding: '18px 0', borderTop: i === 0 ? `1px solid ${A.rule}` : `1px solid ${A.ruleSoft}`, gap: 24 }}>
              <Mono size={12} color={A.ink} weight={600}>{n.date}</Mono>
              <Mono size={10} color={A.accent}>{n.kind.toUpperCase()}</Mono>
              <div style={{ fontSize: 15, color: A.ink, lineHeight: 1.45 }}>{n.body}</div>
              <Mono size={10} color={A.ink3}>0{i + 1} / 0{d.news.length}</Mono>
            </div>
          ))}
        </div>
      </div>

      {/* Research highlights */}
      <div style={{ padding: '56px 56px 40px', borderBottom: `1px solid ${A.rule}` }}>
        <SectionLabel no="03" name="Research Highlights" right={<Mono size={10} color={A.ink3}>→ FULL LIST AT /RESEARCH</Mono>} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {d.publications.filter((p) => p.selected).map((p, i) => (
            <div key={p.id} style={{ border: `1px solid ${A.rule}`, padding: 20, background: A.paper, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Mono size={11} color={A.accent} weight={600}>{p.venueShort} · {p.year}</Mono>
                <Mono size={10} color={A.ink3}>HL.0{i + 1}</Mono>
              </div>
              <div style={{ fontSize: 17, lineHeight: 1.25, fontWeight: 600, color: A.ink, letterSpacing: '-0.01em' }}>{p.title}</div>
              <div style={{ fontSize: 12, color: A.ink3 }}>{p.authors.join(' · ')}</div>
              <div style={{ flex: 1, fontSize: 13, lineHeight: 1.5, color: A.ink2 }}>{p.tldr}</div>
              <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                {Object.entries(p.links || {}).map(([k, url]) => (
                  <Ext key={k} href={url}><Mono size={10} color={A.ink}>{k.toUpperCase()} ↗</Mono></Ext>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div style={{ padding: '56px 56px 64px' }}>
        <SectionLabel no="04" name="Contact" />
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 24, alignItems: 'end' }}>
          <div>
            <Mono size={10} color={A.ink3}>PRIMARY</Mono>
            <Ext href={`mailto:${d.profile.email}`}>
              <div style={{ fontSize: 32, fontFamily: A.mono, fontWeight: 500, color: A.ink, letterSpacing: '-0.02em', marginTop: 6 }}>{d.profile.email}</div>
            </Ext>
          </div>
          {[
            ['SCHOLAR', '@' + (d.profile.gscholar.split('user=')[1]?.slice(0, 8) || ''), d.profile.gscholar],
            ['GITHUB', '@' + d.profile.githubHandle, d.profile.github],
            ['LINKEDIN', '@' + d.profile.linkedinHandle, d.profile.linkedin],
          ].map(([k, v, url]) => (
            <Ext key={k} href={url}>
              <div>
                <Mono size={10} color={A.ink3}>{k}</Mono>
                <div style={{ fontSize: 14, fontFamily: A.mono, color: A.ink, marginTop: 6 }}>{v} ↗</div>
              </div>
            </Ext>
          ))}
        </div>
      </div>

      <FooterA />
    </div>
  );
}

// ── RESEARCH ─────────────────────────────────────────────────
function ResearchA({ onNav }) {
  const d = window.SiteData;
  const pubs = d.publications;
  const TOPICS = ['ALL', 'Music', 'NLP', 'Audio'];
  const [filter, setFilter] = React.useState('ALL');
  const counts = React.useMemo(() => {
    const c = { ALL: pubs.length };
    pubs.forEach((p) => { c[p.topic] = (c[p.topic] || 0) + 1; });
    return c;
  }, [pubs]);

  const filtered = filter === 'ALL' ? pubs : pubs.filter((p) => p.topic === filter);
  const byYear = filtered.reduce((m, p) => ((m[p.year] = m[p.year] || []).push(p), m), {});
  const years = Object.keys(byYear).sort((a, b) => b - a);
  return (
    <div style={{ background: A.paper, color: A.ink, fontFamily: A.sans, minHeight: '100%' }}>
      <NavA active="Research" onNav={onNav} />

      <div style={{ padding: '56px 56px 32px', borderBottom: `1px solid ${A.rule}` }}>
        <Mono size={11} color={A.accent}>§ 02 · RESEARCH</Mono>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, marginTop: 16 }}>
          <div style={{ fontSize: 88, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.04em' }}>Research<span style={{ color: A.accent }}>.</span></div>
          <div style={{ paddingBottom: 16 }}>
            <Mono size={10} color={A.ink3}>INDEX</Mono>
            <div style={{ fontFamily: A.mono, fontSize: 14, color: A.ink }}>[ {filtered.length.toString().padStart(2, '0')} of {pubs.length.toString().padStart(2, '0')} · {years.length} years ]</div>
          </div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', gap: 0, borderTop: `1px solid ${A.rule}`, borderBottom: `1px solid ${A.rule}` }}>
          {TOPICS.map((t, i) => (
            <div
              key={t}
              onClick={() => setFilter(t)}
              style={{
                padding: '12px 20px',
                borderRight: i < TOPICS.length - 1 ? `1px solid ${A.ruleSoft}` : 'none',
                background: t === filter ? A.ink : 'transparent',
                color: t === filter ? A.paper : A.ink2,
                fontFamily: A.mono,
                fontSize: 11,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background .12s, color .12s',
              }}
            >
              {t === 'ALL' ? 'ALL' : t.toUpperCase()} [{counts[t] || 0}]
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ padding: '12px 20px', borderLeft: `1px solid ${A.ruleSoft}`, fontFamily: A.mono, fontSize: 11, color: A.ink3, letterSpacing: '0.06em' }}>SORT · DATE DESC</div>
        </div>
      </div>

      {years.length === 0 ? (
        <div style={{ padding: '80px 56px', textAlign: 'center' }}>
          <Mono size={11} color={A.ink3}>NO ENTRIES MATCH FILTER · {filter.toUpperCase()}</Mono>
          <div style={{ marginTop: 16 }}>
            <span onClick={() => setFilter('ALL')} style={{ cursor: 'pointer', fontFamily: A.mono, fontSize: 11, color: A.accent, letterSpacing: '0.06em', textTransform: 'uppercase' }}>↺ RESET FILTER</span>
          </div>
        </div>
      ) : years.map((y) => (
        <div key={y} style={{ padding: '40px 56px 24px', borderBottom: `1px solid ${A.rule}` }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 16 }}>
            <div style={{ fontFamily: A.mono, fontSize: 32, fontWeight: 500, color: A.accent, letterSpacing: '-0.02em' }}>{y}</div>
            <Mono size={10} color={A.ink3}>{byYear[y].length} entries</Mono>
            <div style={{ flex: 1, borderBottom: `1px solid ${A.ruleSoft}`, marginBottom: 8 }} />
          </div>
          {byYear[y].map((p, i) => (
            <div key={p.id} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 200px', gap: 32, alignItems: 'start', padding: '20px 0', borderTop: i === 0 ? `1px solid ${A.ruleSoft}` : `1px solid ${A.ruleSoft}` }}>
              <div>
                <Mono size={11} color={A.ink} weight={600}>{p.date}</Mono>
                <div style={{ marginTop: 6, padding: '4px 8px', display: 'inline-block', background: A.ink, color: A.paper, fontFamily: A.mono, fontSize: 9, letterSpacing: '0.06em' }}>{p.venueShort}</div>
              </div>
              <div>
                <div style={{ fontSize: 20, lineHeight: 1.3, fontWeight: 600, color: A.ink, letterSpacing: '-0.01em', marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: A.ink2, marginBottom: 10 }}>
                  {p.authors.map((a, j) => (
                    <span key={j} style={{ fontWeight: a === 'ChangHeon Han' ? 700 : 400, color: a === 'ChangHeon Han' ? A.ink : A.ink2 }}>{a}{j < p.authors.length - 1 ? ', ' : ''}</span>
                  ))}
                  <span style={{ color: A.ink3 }}> · {p.venue}</span>
                </div>
                <div style={{ fontSize: 14, color: A.ink2, lineHeight: 1.55, marginBottom: 14 }}>{p.tldr}</div>
                {/* Links — pill buttons, left-aligned under tldr */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                  {Object.entries(p.links || {}).map(([k, url]) => (
                    <Ext key={k} href={url} style={{ display: 'inline-block' }}>
                      <div style={{ padding: '6px 12px', border: `1px solid ${A.rule}`, background: A.paper, fontFamily: A.mono, fontSize: 10, letterSpacing: '0.08em', color: A.ink, textTransform: 'uppercase', transition: 'background .12s, color .12s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = A.ink; e.currentTarget.style.color = A.paper; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = A.paper; e.currentTarget.style.color = A.ink; }}>
                        <span>{k}</span><span style={{ opacity: 0.7 }}>↗</span>
                      </div>
                    </Ext>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.tags.map((t) => (
                    <div key={t} style={{ padding: '4px 8px', border: `1px solid ${A.ruleSoft}`, fontFamily: A.mono, fontSize: 9, letterSpacing: '0.06em', color: A.ink2, textTransform: 'uppercase' }}>{t}</div>
                  ))}
                </div>
              </div>
              <div>
                {p.cover ? (
                  <img src={p.cover} style={{ width: '100%', height: 120, objectFit: 'cover', border: `1px solid ${A.rule}`, display: 'block' }} />
                ) : (
                  <div style={{ width: '100%', height: 120, border: `1px solid ${A.rule}`, background: A.paperAlt, display: 'grid', placeItems: 'center' }}>
                    <Mono size={10} color={A.ink3}>NO COVER</Mono>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}

      <FooterA />
    </div>
  );
}

// ── CREATION ─────────────────────────────────────────────────

// Extract embed metadata from a release's spotify/youtube URL
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
      background: A.paper,
      borderTop: `2px solid ${A.rule}`,
      boxShadow: '0 -8px 24px rgba(21,23,27,0.08)',
      zIndex: 100,
      fontFamily: A.sans,
    }}>
      <div style={{ display: 'flex', alignItems: 'stretch', maxWidth: 1400, margin: '0 auto' }}>
        {/* Cover + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 24px', borderRight: `1px solid ${A.ruleSoft}`, minWidth: 320, flex: '0 0 auto' }}>
          {track.cover ? (
            <img src={track.cover} style={{ width: 56, height: 56, objectFit: 'cover', border: `1px solid ${A.rule}`, flex: '0 0 auto' }} />
          ) : (
            <div style={{ width: 56, height: 56, background: A.paperAlt, border: `1px solid ${A.rule}`, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
              <Mono size={9} color={A.ink3}>—</Mono>
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
              <Mono size={9} color={A.accent} weight={600}>NOW PLAYING · {track.kind}</Mono>
              <Mono size={9} color={A.ink3}>{track.year}</Mono>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: A.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.title}</div>
            <div style={{ fontSize: 12, color: A.ink2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.artist}</div>
          </div>
        </div>

        {/* Embed */}
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
            <div style={{ padding: 24, color: A.ink3, fontFamily: A.mono, fontSize: 11, letterSpacing: '0.06em' }}>NO EMBED AVAILABLE</div>
          )}
        </div>

        {/* Close + open-externally */}
        <div style={{ borderLeft: `1px solid ${A.ruleSoft}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '14px 18px', flex: '0 0 auto', minWidth: 140 }}>
          {embed && embed.external ? (
            <Ext href={embed.external} style={{ display: 'inline-block' }}>
              <div style={{ padding: '5px 9px', border: `1px solid ${A.rule}`, fontFamily: A.mono, fontSize: 9, letterSpacing: '0.06em', color: A.ink, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span>OPEN IN {embed.type === 'spotify' ? 'SPOTIFY' : 'YOUTUBE'}</span><span>↗</span>
              </div>
            </Ext>
          ) : <div />}
          <div
            onClick={onClose}
            style={{ cursor: 'pointer', fontFamily: A.mono, fontSize: 11, letterSpacing: '0.06em', color: A.ink, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}
            title="Close player"
          >
            ✕ CLOSE
          </div>
        </div>
      </div>
    </div>
  );
}

function CreationA({ onNav }) {
  const d = window.SiteData;
  const c = d.creation;
  const [active, setActive] = React.useState(null);
  return (
    <div style={{ background: A.paper, color: A.ink, fontFamily: A.sans, minHeight: '100%', paddingBottom: active ? 240 : 0 }}>
      <NavA active="Creation" onNav={onNav} />

      <div style={{ padding: '56px 56px 40px', borderBottom: `1px solid ${A.rule}` }}>
        <Mono size={11} color={A.accent}>§ 03 · MUSIC PRACTICE</Mono>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, marginTop: 16, alignItems: 'end' }}>
          <div>
            <div style={{ fontSize: 88, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.04em' }}>Creation<span style={{ color: A.accent }}>.</span></div>
            <div style={{ fontSize: 15, color: A.ink2, marginTop: 16, maxWidth: 520, lineHeight: 1.55 }}>{c.blurb}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, border: `1px solid ${A.rule}` }}>
            {c.stats.slice(0, 6).map((s, i) => (
              <div key={i} style={{ padding: '20px 16px', borderRight: i % 3 !== 2 ? `1px solid ${A.ruleSoft}` : 'none', borderBottom: i < 3 ? `1px solid ${A.ruleSoft}` : 'none' }}>
                <div style={{ fontFamily: A.mono, fontSize: 28, fontWeight: 500, color: A.ink, letterSpacing: '-0.02em' }}>{s.value}</div>
                <Mono size={9} color={A.ink3} style={{ marginTop: 4, display: 'block' }}>{s.label}</Mono>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '48px 56px 32px', borderBottom: `1px solid ${A.rule}` }}>
        <SectionLabel no="01" name="Highlights" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 1100 }}>
          {c.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '14px 0', borderTop: `1px solid ${A.ruleSoft}` }}>
              <Mono size={11} color={A.accent}>+{String(i + 1).padStart(2, '0')}</Mono>
              <div style={{ fontSize: 15, color: A.ink, lineHeight: 1.45 }}>{h}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '48px 56px 64px' }}>
        <SectionLabel no="02" name="Releases" count={c.releases.length} right={<Mono size={10} color={A.ink3}>{active ? 'NOW PLAYING ▼' : '↓ CLICK COVER TO PLAY'}</Mono>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {c.releases.map((r, i) => {
            const playable = !!(r.spotify || r.youtube);
            const isActive = active && (active.title === r.title && active.artist === r.artist);
            return (
              <div
                key={i}
                onClick={() => playable && setActive(r)}
                style={{
                  border: `1px solid ${isActive ? A.accent : A.rule}`,
                  background: A.paper,
                  cursor: playable ? 'pointer' : 'default',
                  transition: 'transform .15s, border-color .12s',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                  boxShadow: isActive ? `0 8px 24px ${A.accent}33` : 'none',
                }}
                onMouseEnter={(e) => { if (playable) e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { if (playable && !isActive) e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1', background: A.paperAlt, overflow: 'hidden' }}>
                  {r.cover ? (
                    <img src={r.cover} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ display: 'grid', placeItems: 'center', width: '100%', height: '100%' }}>
                      <Mono size={10} color={A.ink3}>NO ARTWORK</Mono>
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: 8, left: 8, padding: '3px 7px', background: A.paper, fontFamily: A.mono, fontSize: 9, letterSpacing: '0.08em', color: r.kind === 'PROD' ? A.accent : A.ink }}>{r.kind}</div>
                  {playable && (
                    <div style={{
                      position: 'absolute', bottom: 10, right: 10,
                      width: 40, height: 40,
                      background: isActive ? A.accent : A.ink,
                      color: A.paper,
                      display: 'grid', placeItems: 'center',
                      fontFamily: A.mono, fontSize: 14,
                      transition: 'background .15s',
                    }}>
                      {isActive ? '❚❚' : '▶'}
                    </div>
                  )}
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: A.ink, lineHeight: 1.2 }}>{r.title}</div>
                  <div style={{ fontSize: 12, color: A.ink2, marginTop: 4 }}>{r.artist}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 10 }}>
                    <Mono size={9} color={A.ink3}>{r.year}</Mono>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {r.spotify && <Mono size={9} color={A.ink}>SPTFY</Mono>}
                      {r.youtube && <Mono size={9} color={A.ink}>YT</Mono>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <FooterA />

      <MusicPlayer track={active} onClose={() => setActive(null)} />
    </div>
  );
}

// ── BIO ──────────────────────────────────────────────────────
function BioA({ onNav }) {
  const d = window.SiteData;
  // Merge education + experience by date desc
  const events = [
    ...d.education.map((e) => ({ ...e, type: 'EDU', label: e.degree, sub: e.org })),
    ...d.experience.map((e) => ({ ...e, type: 'WORK', label: e.role, sub: e.org })),
  ];
  // Sort by period start year desc (extract first year from period)
  events.sort((a, b) => {
    const sa = parseInt(a.period.match(/\d{4}/)[0]);
    const sb = parseInt(b.period.match(/\d{4}/)[0]);
    return sb - sa;
  });

  return (
    <div style={{ background: A.paper, color: A.ink, fontFamily: A.sans, minHeight: '100%' }}>
      <NavA active="Bio" onNav={onNav} />

      <div style={{ padding: '56px 56px 32px', borderBottom: `1px solid ${A.rule}` }}>
        <Mono size={11} color={A.accent}>§ 04 · CV / BIOGRAPHY</Mono>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, marginTop: 16 }}>
          <div style={{ fontSize: 88, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.04em' }}>Biography<span style={{ color: A.accent }}>.</span></div>
          <div style={{ paddingBottom: 16 }}>
            <Mono size={10} color={A.ink3}>SOURCE</Mono>
            <Ext href={d.profile.cv}>
              <div style={{ fontFamily: A.mono, fontSize: 13, color: A.ink }}>{d.profile.cv} ↗</div>
            </Ext>
          </div>
        </div>
      </div>

      <div style={{ padding: '48px 56px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32 }}>
          <div style={{ position: 'sticky', top: 24, height: 'fit-content' }}>
            <Mono size={10} color={A.ink3}>FILTER</Mono>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[['ALL', events.length], ['EDU', d.education.length], ['WORK', d.experience.length]].map(([k, c], i) => (
                <div key={k} style={{ padding: '8px 10px', background: i === 0 ? A.ink : 'transparent', color: i === 0 ? A.paper : A.ink, fontFamily: A.mono, fontSize: 11, letterSpacing: '0.06em', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{k}</span><span style={{ opacity: 0.6 }}>{String(c).padStart(2, '0')}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <Mono size={10} color={A.ink3}>SUMMARY</Mono>
              <div style={{ fontSize: 13, color: A.ink2, lineHeight: 1.55, marginTop: 8 }}>{d.bio.p3}</div>
            </div>
          </div>

          <div>
            <div style={{ borderTop: `1px solid ${A.rule}` }}>
              {events.map((e, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 70px 1fr 160px', gap: 24, padding: '22px 0', borderBottom: `1px solid ${A.ruleSoft}`, alignItems: 'start' }}>
                  <Mono size={12} color={A.ink} weight={600}>{e.period}</Mono>
                  <Mono size={10} color={e.type === 'EDU' ? A.accent : A.ink2}>{e.type}</Mono>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 600, color: A.ink, letterSpacing: '-0.01em' }}>{e.label}</div>
                    <div style={{ fontSize: 14, color: A.ink2, marginTop: 4 }}>{e.sub}</div>
                    {e.meta && <div style={{ fontSize: 13, color: A.ink3, marginTop: 8, lineHeight: 1.5 }}>{e.meta}</div>}
                  </div>
                  <Mono size={10} color={A.ink3} style={{ textAlign: 'right' }}>{e.place}</Mono>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterA />
    </div>
  );
}

Object.assign(window, { HomeA, ResearchA, CreationA, BioA, NavA, FooterA });
