export const site = {
  profile: {
    name: 'ChangHeon Han',
    nameKr: '한창헌',
    title: 'Ph.D. Student',
    affiliation: 'Chalmers University of Technology',
    affiliationUrl: 'https://www.chalmers.se/en/',
    division: 'Data Science & AI Division',
    program: 'WASP-HS',
    programUrl: 'https://wasp-hs.org/',
    location: 'Gothenburg, Sweden',
    email: 'changheon.han@chalmers.se',
    gscholar: 'https://scholar.google.com/citations?user=dzyp9dkAAAAJ',
    orcid: 'https://orcid.org/0009-0000-5941-1347',
    github: 'https://github.com/chh-han',
    githubHandle: 'chh-han',
    linkedin: 'https://www.linkedin.com/in/changheonhan/',
    linkedinHandle: 'changheonhan',
    cv: '/uploads/CV_HCH.pdf',
    portrait: '/assets/images/photos/Han-main-profile.png',
  },

  identity: {
    primary: 'Researcher',
    primaryCaption: 'AI · multimodal · music',
    secondary: 'Producer',
    secondaryCaption: '800K+ streams · Spotify K-pop',
    tagline:
      'Studying learned cultural representation spaces in generative AI for creative domains.',
    keywords: [
      'Multimodal Learning',
      'Signal Processing',
      'Natural Language Processing',
      'Music Information Retrieval',
    ],
  },

  bio: {
    p1: `I am a Ph.D. student at Chalmers University of Technology, affiliated with WASP-HS — the Wallenberg AI, Autonomous Systems and Software Program for Humanity and Society. My research focuses on learned cultural representation spaces in generative AI for creative domains.`,
    p2: `Before starting my Ph.D., I was a Research Engineer at Singapore Management University working on career trajectory analysis using dynamic GNNs. I completed a research internship at SONY Europe, where I worked on fine-grained instrument music source separation using text-audio multimodal encoders. I received my M.S. in Artificial Intelligence from Hanyang University in 2025, advised by Prof. Minsam Ko.`,
    p3: `Prior to academia, I worked as a Data Analyst at Coupang and spent seven years as a professional music producer, with tracks featured in Spotify K-pop Editorial Playlists reaching over 800,000 streams.`,
  },

  news: [
    {
      date: '2026.01',
      kind: 'milestone',
      body: 'Started Ph.D. in CSE at Chalmers University of Technology (WASP-HS).',
    },
    {
      date: '2025.11',
      kind: 'role',
      body: 'Serving as Partnership Manager at Munich Music Labs.',
    },
    {
      date: '2025.10',
      kind: 'role',
      body: 'Joined Singapore Management University as a Research Engineer.',
    },
    {
      date: '2024.08',
      kind: 'role',
      body: 'Started research internship at SONY Europe — text-conditioned music source separation.',
    },
  ],

  publications: [
    {
      id: 'sentimatic',
      year: 2025,
      date: '2025.04',
      kind: 'publication',
      title:
        'Sentimatic: Sentiment-guided Automatic Generation of Preference Datasets for Customer Support Dialogue System',
      venue: 'NAACL 2025',
      venueShort: 'NAACL',
      authors: ['SuHyun Lee', 'ChangHeon Han'],
      tags: ['Dialogue Systems', 'Preference Data', 'NLP'],
      topic: 'NLP',
      selected: true,
      tldr:
        'Automatic, sentiment-guided framework that produces large-scale preference datasets without human annotation — improves emotional appropriateness in customer-support LLMs.',
      cover: '/assets/images/covers/2025-naacl-sentimatic.png',
      links: { Paper: 'https://aclanthology.org/2025.naacl-srw.12/', Code: 'https://github.com/chh-han/SCM-Dataset' },
    },
    {
      id: 'pskd',
      year: 2024,
      date: '2024.06',
      kind: 'publication',
      title:
        'Optimizing Music Source Separation in Complex Audio Environments Through Progressive Self-Knowledge Distillation',
      venue: 'ICASSP 2024 Workshops',
      venueShort: 'ICASSPW',
      authors: ['ChangHeon Han', 'SuHyun Lee'],
      tags: ['Music Source Separation', 'Knowledge Distillation', 'Audio'],
      topic: 'Music',
      selected: true,
      tldr:
        'Fine-tuning strategy for hearing-aid–oriented source separation. Softening targets with previous-epoch predictions gives +1.2 dB SDR over the baseline.',
      cover: '/assets/images/covers/2024-icasspw-pskd.png',
      links: {
        Paper: 'https://ieeexplore.ieee.org/document/10626965',
        Code: 'https://github.com/chh-han/mss-pskd',
      },
    },
    {
      id: 'track-role',
      year: 2023,
      date: '2023.11',
      kind: 'publication',
      title: 'Track Role Prediction of Single-Instrumental Sequences',
      venue: 'ISMIR 2023 LBD',
      venueShort: 'ISMIR',
      authors: ['ChangHeon Han', 'SuHyun Lee', 'Minsam Ko'],
      tags: ['Music Information Retrieval', 'Sequence Modeling'],
      topic: 'Music',
      selected: true,
      tldr:
        'Predicts the track role of single-instrument sequences automatically. 87% symbolic / 84% audio accuracy — reduces manual annotation in MIR pipelines.',
      cover: '/assets/images/covers/2023-ismir-track-role.png',
      links: {
        Paper: 'https://arxiv.org/abs/2404.13286',
        Code: 'https://github.com/chh-han/SCM-Dataset',
      },
    },
    {
      id: 'star',
      year: 2025,
      date: '2025.07',
      kind: 'publication',
      title:
        'STAR: Strategy-Aware Refinement Module in Multitask Learning for Emotional Support Conversations',
      venue: 'ACL 2025 (NLP4PI Workshop)',
      venueShort: 'ACL-W',
      authors: ['SuHyun Lee', 'ChangHeon Han', 'Woohwan Jung', 'Minsam Ko'],
      tags: ['Emotional Support', 'Multitask Learning', 'NLP'],
      topic: 'NLP',
      selected: false,
      tldr:
        'Disentangles decoder representations and dynamically fuses task-specific info — state-of-the-art in both strategy prediction and response generation.',
      cover: '/assets/images/covers/2025-nlp4pi-star.png',
      links: {
        Paper: 'https://aclanthology.org/2025.nlp4pi-1.24.pdf',
        Code: 'https://github.com/suhyun565/STAR',
      },
    },
    {
      id: 'asmr',
      year: 2024,
      date: '2024.06',
      kind: 'publication',
      title: 'ASMR Sound Generation through Attribute-based Prompt Augmentation',
      venue: 'KCC 2024',
      venueShort: 'KCC',
      authors: ['ChangHeon Han', 'Jaemyung Shin', 'Minsam Ko'],
      tags: ['Text-to-Audio', 'Prompt Augmentation', 'ASMR'],
      topic: 'Audio',
      selected: false,
      tldr:
        'LLM-based prompt augmentation that explicitly models ASMR triggers — produces more detailed sound descriptions and improves T2A quality.',
      links: {},
    },
    {
      id: 'nsynth-midi',
      year: 2023,
      date: '2023.01',
      kind: 'project',
      title: 'NSynth-MIDI-Renderer for massive MIDI dataset',
      venue: 'Open-source tool',
      venueShort: 'TOOL',
      authors: ['ChangHeon Han'],
      tags: ['Music Information Retrieval', 'MIDI', 'Dataset'],
      topic: 'Music',
      selected: false,
      tldr:
        'Open-source renderer that picks NSynth candidates and locks a single preset across a MIDI sequence — used to synthesize massive symbolic-to-audio datasets.',
      cover: '/assets/images/covers/2024-NoteSynthesizer.png',
      links: { Code: 'https://github.com/chh-han/NSynth-MIDI-Renderer-for-massive-MIDI-dataset' },
    },
    {
      id: 'midi-metadata',
      year: 2023,
      date: '2023.01',
      kind: 'project',
      title: 'MIDI-Metadata-Extractor',
      venue: 'Open-source tool',
      venueShort: 'TOOL',
      authors: ['ChangHeon Han'],
      tags: ['Music Information Retrieval', 'MIDI'],
      topic: 'Music',
      selected: false,
      tldr:
        'Segregates a multi-track MIDI file into individual instrument tracks, extracts per-track metadata, and supports measure-based truncation / save.',
      links: { Code: 'https://github.com/chh-han/MIDI-metadata-extractor' },
    },
    {
      id: 'white-noise',
      year: 2022,
      date: '2022.01',
      kind: 'project',
      title: 'Soothing Sound White Noise Generator',
      venue: 'Project · KCC copyright',
      venueShort: 'TOOL',
      authors: ['ChangHeon Han'],
      tags: ['Audio', 'Signal Processing'],
      topic: 'Audio',
      selected: false,
      tldr:
        'Soothing-sound audio generator with five distinct noise colors and three weighting filters. Copyrighted with the Korea Copyright Commission.',
      links: { Code: 'https://github.com/chh-han/white_noise_generation' },
    },
  ],

  education: [
    {
      org: 'Chalmers University of Technology',
      degree: 'Ph.D., Computer Science and Engineering',
      meta: 'Advised by Prof. Kivanc Tatar · WASP-HS',
      period: '2026 — Present',
      place: 'Gothenburg, Sweden',
    },
    {
      org: 'Hanyang University',
      degree: 'M.S., Artificial Intelligence',
      meta: 'Advised by Prof. Minsam Ko · Fully funded',
      period: '2023 — 2025',
      place: 'Seoul, Korea',
    },
    {
      org: 'SoongSil University',
      degree: 'B.S., Laws',
      meta: '',
      period: '2011 — 2020',
      place: 'Seoul, Korea',
    },
  ],

  experience: [
    {
      org: 'Singapore Management University',
      role: 'Research Engineer',
      meta: 'Career trajectory analysis · Dynamic GNN. Advised by Prof. Ee-peng Lim.',
      period: '2025.10 — 2025.12',
      place: 'Singapore',
      tag: 'Graph Neural Networks',
    },
    {
      org: 'SONY Europe',
      role: 'Research Intern',
      meta: 'Fine-grained instrument music source separation with text-audio multimodal encoders. Advised by Giorgio Fabbro (SONY), Prof. Axel Marmoret (IMT Atlantique).',
      period: '2024.08 — 2025.01',
      place: 'Stuttgart, Germany',
      tag: 'Audio · Multimodal',
    },
    {
      org: 'Hanyang University',
      role: 'Research Assistant',
      meta: 'Sleep apnea diagnosis & text-to-audio generation.',
      period: '2023.02 — 2024.07',
      place: 'Seoul, Korea',
      tag: 'Signal Processing',
    },
    {
      org: 'GIST',
      role: 'Research Intern',
      meta: 'Emotion-based symbolic music generation for video games. Advised by Prof. Kyung-Joong Kim.',
      period: '2023.01 — 2023.02',
      place: 'Gwangju, Korea',
      tag: 'Music Generation',
    },
    {
      org: 'Coupang',
      role: 'Data Analyst',
      meta: 'Address data cleansing & privacy protection system.',
      period: '2020.04 — 2022.04',
      place: 'Seoul, Korea',
      tag: 'Data Engineering',
    },
    {
      org: 'Independent',
      role: 'Music Producer · Singer-Songwriter',
      meta: 'Hyundai Motor Group, Seezn Original Series · 800K+ Spotify streams · K-pop Editorial Playlists.',
      period: '2018 — 2022',
      place: 'Korea',
      tag: 'Music Production',
    },
  ],

  creation: {
    blurb:
      'Seven years of music production, parallel to research. 33 songs registered with the Korea Music Copyright Association; ten produced tracks across five artists; international collaborations from seven countries.',
    stats: [
      { value: '800K+', label: 'Spotify streams' },
      { value: '96', label: 'Countries reached' },
      { value: '4', label: 'K-pop editorial features' },
      { value: '33', label: 'KOMCA-registered songs' },
      { value: '10', label: 'Produced tracks' },
      { value: '7', label: 'Collab countries' },
    ],
    highlights: [
      'Vocalist & producer on Hyundai Motor Group’s official video',
      'Producer for the insert song in Seezn Original Series "Hope or Dope" (S01E02)',
      '4 songs featured in Spotify K-pop Editorial Playlists',
      'International collaborations: USA, Germany, Hong Kong, Netherlands, +3',
    ],
    releases: [
      { kind: 'PROD', artist: 'Gunny', title: 'Trouble', year: '2019', cover: '/assets/images/musics/prod-gunny.jpg', youtube: 'https://youtu.be/-lerQuV3E7U' },
      { kind: 'PROD', artist: 'kingeunsan', title: 'Face Lift', year: '2020 · Album', cover: '/assets/images/musics/prod-king.jpg', youtube: 'https://youtu.be/ivjSE4UEqSo' },
      { kind: 'PROD', artist: 'Bbvdoll', title: 'Lovesick', year: '2021', cover: '/assets/images/musics/prod-bbv.jpg', youtube: 'https://youtu.be/gxZI9s0XkP8' },
      { kind: 'PROD', artist: 'Kim Hyo-kyung', title: '기다려 / Wait', year: '2021', cover: '/assets/images/musics/prod-hyo.jpg', youtube: 'https://youtu.be/U80QFEh_7F0' },
      { kind: 'SOLO', artist: 'Sha Hardy', title: 'Now or Never 1', year: '2019', cover: '/assets/images/musics/now1.jpeg', spotify: 'https://open.spotify.com/album/2x7pTaEuhjVeEgvv1bxRzl' },
      { kind: 'SOLO', artist: 'Sha Hardy', title: 'Now or Never 2', year: '2020', cover: '/assets/images/musics/now2.JPG', spotify: 'https://open.spotify.com/album/0wLbPZyed3eXtkkNaGvlRs', youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_nMGNwjbbudZVe5fovcgZ8STXw6M3u2a9A' },
      { kind: 'SOLO', artist: 'Sha Hardy', title: 'Now or Never 3', year: '2021', cover: '/assets/images/musics/now3.JPG', spotify: 'https://open.spotify.com/album/5wE55heOH6cZIxiWKZj828' },
      { kind: 'ELEC', artist: 'Digital Picasso', title: 'Seoul Boys Night', year: '2019', cover: '/assets/images/musics/digital.JPG', youtube: 'https://youtu.be/GVB-44TqKmg' },
    ],

    videos: [
      {
        title: 'Hyundai Motor Group',
        sub: 'Vocalist + producer · official ad',
        youtube: 'https://youtu.be/Byb36TUtLf4',
        tag: 'BRAND',
      },
      {
        title: 'Visual Art Collaboration',
        sub: 'Music production for visual art project',
        youtube: 'https://youtu.be/YL8kOWiAKGM',
        tag: 'VISUAL',
      },
      {
        title: 'Music-based Visual Art',
        sub: 'Visual art created with my original music',
        youtube: 'https://youtu.be/xLMHM-Jmezo',
        tag: 'VISUAL',
      },
      {
        title: 'Artist Release',
        sub: 'Singer-songwriter · producer release',
        youtube: 'https://youtu.be/J4GoO77437I',
        tag: 'RELEASE',
      },
    ],
  },
};

export default site;

const DEFAULT_BASE_URL = 'https://changheonhan.com';

const trimSlash = (s) => s.replace(/\/$/, '');

export function buildPersonNode(baseUrl = DEFAULT_BASE_URL) {
  const base = trimSlash(baseUrl);
  return {
    '@type': 'Person',
    name: site.profile.name,
    alternateName: site.profile.nameKr,
    jobTitle: site.profile.title,
    description: site.identity.tagline,
    url: base,
    image: new URL(site.profile.portrait, base).toString(),
    email: `mailto:${site.profile.email}`,
    affiliation: {
      '@type': 'Organization',
      name: site.profile.affiliation,
      url: site.profile.affiliationUrl,
    },
    sameAs: [
      site.profile.gscholar,
      site.profile.orcid,
      site.profile.github,
      site.profile.linkedin,
    ].filter(Boolean),
    knowsAbout: site.identity.keywords,
  };
}

export function buildPersonJsonLd(baseUrl = DEFAULT_BASE_URL) {
  return { '@context': 'https://schema.org', ...buildPersonNode(baseUrl) };
}
