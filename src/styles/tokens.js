// Values resolve to CSS custom properties declared in src/styles/global.css,
// so the whole palette swaps under `prefers-color-scheme: dark` even though
// components apply it as inline styles.
export const tokens = {
  paper: 'var(--paper)',
  paperAlt: 'var(--paper-alt)',
  ink: 'var(--ink)',
  ink2: 'var(--ink-2)',
  ink3: 'var(--ink-3)',
  rule: 'var(--rule)',
  ruleSoft: 'var(--rule-soft)',
  accent: 'var(--accent)',
  accentSoft: 'var(--accent-soft)',
  // Pre-mixed accent alphas — inline styles used to build these by string
  // concatenation (accent + '08'), which a var() reference cannot support.
  accentWash: 'var(--accent-wash)',
  accentVeil: 'var(--accent-veil)',
  sans: '"Geist", -apple-system, system-ui, sans-serif',
  mono: '"Geist Mono", ui-monospace, monospace',
};
