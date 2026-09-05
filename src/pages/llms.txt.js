import { getCollection } from 'astro:content';
import { site } from '@/data/site';

export async function GET(context) {
  const baseUrl = (context.site?.toString() ?? 'https://changheonhan.com').replace(/\/$/, '');

  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const blogLines = posts
    .map((p) => {
      const summary = p.data.summary ?? '';
      return `- [${p.data.title}](${baseUrl}/blog/${p.id}/)${summary ? `: ${summary}` : ''}`;
    })
    .join('\n');

  const body = `# ${site.profile.name}

> ${site.identity.tagline} ${site.profile.title} at ${site.profile.affiliation} (${site.profile.program}). Seven years as a professional music producer (33 songs written and owned outright, 800K+ Spotify streams, 4 Spotify editorial playlist features) before academia.

This site is the personal homepage and blog of ${site.profile.name} (${site.profile.nameKr}). The blog is writing on music AI from a producer's perspective — source separation, music information retrieval, multimodal learning, and the gap between research outputs and what producers actually want from generative models. Topics covered in depth: music source separation (MUSDB18, MoisesDB, Hybrid Demucs, and the vocals/drums/bass/other split), music information retrieval, text-to-audio generation, and a producer's view of generative music tools.

## Blog

${blogLines}
- [RSS feed](${baseUrl}/rss.xml)

## About

- [Biography](${baseUrl}/bio): Education (Chalmers PhD, Hanyang MS) and experience (SONY Europe, Singapore Management University, Coupang, music production).
- [Research](${baseUrl}/research): Publications on music source separation (ICASSP 2024), MIR (ISMIR 2023), NLP and dialogue (NAACL 2025, ACL 2025), and audio generation.
- [Creation](${baseUrl}/creation): Music production work — 33 songs written and owned outright, Spotify K-pop editorial playlist features, brand collaborations.

## Identity

- Researcher: PhD student at ${site.profile.affiliation}, ${site.profile.division} (${site.profile.program} program), ${site.profile.location}. Advised by Prof. Kivanc Tatar.
- Producer: Seven years as a professional K-pop and singer-songwriter producer; sole songwriter and copyright holder on 33 songs, each registered with the Korea Music Copyright Association (KOMCA); 4 Spotify K-pop Editorial Playlist features; 800K+ streams.
- Research areas: ${site.identity.keywords.join(', ')}.

## Profiles

- Google Scholar: ${site.profile.gscholar}
- ORCID: ${site.profile.orcid}
- GitHub: ${site.profile.github}
- LinkedIn: ${site.profile.linkedin}
- Email: ${site.profile.email}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
