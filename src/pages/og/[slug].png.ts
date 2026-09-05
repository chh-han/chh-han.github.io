import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { createElement as h } from 'react';
import fs from 'node:fs/promises';
import path from 'node:path';

const PAPER = '#F1EEE6';
const INK = '#15171B';
const INK3 = '#63656D';
const ACCENT = '#6E1F2E';

let fontsCache: Array<{ name: string; data: Buffer; weight: number; style: 'normal' }> | null = null;
async function getFonts() {
  if (fontsCache) return fontsCache;
  const fontDir = path.join(process.cwd(), 'node_modules/@fontsource/geist-sans/files');
  const [regular, semibold] = await Promise.all([
    fs.readFile(path.join(fontDir, 'geist-sans-latin-400-normal.woff')),
    fs.readFile(path.join(fontDir, 'geist-sans-latin-600-normal.woff')),
  ]);
  fontsCache = [
    { name: 'Geist', data: regular, weight: 400, style: 'normal' },
    { name: 'Geist', data: semibold, weight: 600, style: 'normal' },
  ];
  return fontsCache;
}

export async function getStaticPaths() {
  const posts = await getCollection('blog', (p) => !p.data.draft || import.meta.env.DEV);
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export const GET: APIRoute = async ({ props }) => {
  const post = (props as any).post;
  const dateStr = (post.data.date as Date).toISOString().slice(0, 10).replace(/-/g, '.');
  const tags: string[] = post.data.tags ?? [];

  const tree = h(
    'div',
    {
      style: {
        width: '1200px',
        height: '630px',
        background: PAPER,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Geist',
      },
    },
    [
      h('div', {
        key: 'stripe',
        style: { width: '100%', height: '14px', background: ACCENT },
      }),
      h(
        'div',
        {
          key: 'main',
          style: {
            display: 'flex',
            flexDirection: 'column',
            padding: '64px 80px',
            flex: 1,
            justifyContent: 'space-between',
          },
        },
        [
          h(
            'div',
            {
              key: 'hdr',
              style: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '22px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                fontWeight: 600,
              },
            },
            [
              h('span', { key: 'a', style: { color: ACCENT } }, '§ BLOG'),
              h('span', { key: 'b', style: { marginLeft: '20px', color: INK3 } }, '· CHANGHEONHAN.COM'),
            ]
          ),
          h(
            'div',
            {
              key: 'title',
              style: {
                fontSize: '64px',
                fontWeight: 600,
                letterSpacing: '-1.5px',
                lineHeight: 1.08,
                color: INK,
                marginTop: '40px',
                marginBottom: '32px',
                display: 'flex',
              },
            },
            post.data.title
          ),
          h(
            'div',
            {
              key: 'foot',
              style: {
                display: 'flex',
                flexDirection: 'column',
                borderTop: `1px solid ${INK}`,
                paddingTop: '24px',
              },
            },
            [
              tags.length > 0 &&
                h(
                  'div',
                  {
                    key: 'tags',
                    style: {
                      display: 'flex',
                      fontSize: '18px',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: INK3,
                      marginBottom: '20px',
                    },
                  },
                  tags.map((t, i) =>
                    h(
                      'span',
                      { key: `t${i}`, style: { marginRight: '24px' } },
                      `#${t}`
                    )
                  )
                ),
              h(
                'div',
                {
                  key: 'sig',
                  style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    fontSize: '22px',
                  },
                },
                [
                  h('span', { key: 'name', style: { color: INK, fontWeight: 600 } }, 'ChangHeon Han'),
                  h(
                    'span',
                    {
                      key: 'date',
                      style: {
                        color: INK3,
                        fontSize: '18px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                      },
                    },
                    dateStr
                  ),
                ]
              ),
            ].filter(Boolean)
          ),
        ]
      ),
    ]
  );

  const fonts = await getFonts();
  const svg = await satori(tree, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg).render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
