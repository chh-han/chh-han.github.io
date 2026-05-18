---
title: "nickcheo and Source Separation: When DJ Meets Signal Processing"
date: 2026-05-15T15:00:00
summary: "Source separation technology helped to create a unique DJing style. What is source separation?"
tags: ["source-separation", "demucs", "music-ai", "producer"]
draft: false
---

## How does nickcheo make impossible mashups?

DJs have been carving out distinct identities lately, but nickcheo[1] stands out even in that crowd. Not long after he started posting videos of himself DJing alone in his room, he picked up hundreds of thousands of followers. What makes him unusual is the pairings — songs that, on paper, have no business being in the same set. A rock track with Soulja Boy rapping over it. A Japanese anime theme vocal sitting on top of a trap beat. How is any of that possible?

The answer is source separation. He pulls vocals and instrumentals apart with Serato's Stems Separation feature, then builds his mashups from the clean acapellas and instrumentals it gives him. Sound source separation is an old problem in audio signal processing — usually framed as the cocktail party problem [2]. The original motivation wasn't music at all. It was air traffic control and speech. In a noisy party where everyone is talking at once, pick out the one voice you actually want to hear. That's the problem.

## What is VDBO in music source separation?

Music source separation treats a mixture X as the sum of stems x1 + x2 + x3 + x4. The input is X, the output is the x_i you're after. The first thing I thought when I saw that equation was: what about mastering? Compressors, limiters, saturation? The effect chain on the bus channel where I grouped my instruments? (It varies by DAW, but I've spent years in Logic Pro X, so "send it to a bus" is just how I talk.)

Mastering is nonlinear. Throw one compressor on, and the sum no longer holds. Even MUSDB18 stems don't add back up to the original mix perfectly — there's always a small residue. And yet, on top of this simple linear assumption, the models do a surprisingly clean job of separation. Honestly, it's a little surprising. It's also why the industry runs on that assumption. The academic side has started taking the nonlinearity head-on, in two directions. One is augmentation [3]. Take public-dataset stems, run them through a commercial mastering chain — limiter especially — and synthesize the kind of loud, dynamic-range-crushed masters that the loudness war era produces. Then try source separation on those. The point is to close the domain gap between lab data and the commercial audio that actually ships to streaming platforms. The other direction goes the opposite way [4][5]: take a mastered mix and try to recover the raw stems underneath.

You don't need to know every model in this space, but Hybrid Demucs [6] is worth pausing on. It's exactly what the name says — a hybrid version of Demucs. Hybrid how? One branch takes the waveform directly and processes it in the time domain through a U-Net. The other branch takes an STFT spectrogram and works in the frequency domain. The two outputs are summed to produce the final stem.

So what does this model actually predict and separate? VDBO. Vocals, Drums, Bass, and the leftover Other. This 4-stem setup, alongside the MUSDB18 [7] dataset, became the standard benchmark for music source separation. MUSDB18 is 150 songs total — 100 train, 50 test, about 10 hours of multitrack audio — and it's effectively the canonical dataset in this area.

V, D, and B make sense. Vocals, drums, and bass each have sharp, distinctive signatures. The problem is everything else. Why is Other just "other"? Everything that isn't V, D, or B — guitars, keyboards, synths, strings, horns, FX — gets dumped in. And sometimes "Other" isn't predicted at all; it's just the residual. Remember, the mixture is x1 + x2 + x3 + x4. Subtract the first three from the mix and what's left is Other.

## How can producers use source separation for sampling?

Think about how sampling actually works. You hear a section, a melody or chord progression on one instrument that you love, but there's other stuff sitting on top of it, so you can't just lift it. The usual workarounds: grab it from the intro or breakdown, EQ out the lows entirely, or pitch-shift and distort it until it doesn't sound like the original anymore. Detours, all of them.

But if you could pull just that one instrument out, cleanly? The creative range of what a producer can do widens by a step. And those buried old records could get a second life through proper sample clearance. What nickcheo does at the mashup stage, producers could do at the composition stage.

## Why is fine-grained instrument source separation so hard?

So where are we now. MoisesDB [8] showed up and pushed fine-grained multitrack data forward. About 240 songs, with 11 top-level stems and sub-stems below them, labeled hierarchically. The first serious public attempt at moving past the 4-stem ceiling.

Even so, fine-grained instrumental source separation is still a hard climb. What the industry usually does, company buys or licenses its own private dataset, then trains one model per instrument — each one separately, each one expensive.

The limits are clear. Even on a huge dataset, the moment you filter for "tracks featuring this instrument," the count drops fast. Say you want to train an acoustic guitar model. Filter down to tracks where acoustic guitar is the lead, and the data shrinks hard, which means worse performance. Strings are another sore spot. Source separation models still struggle with them, because they sit in the vocal range, they sustain longer, and their harmonic structure is dense.

## So

Source separation is more than a tool for producers. A 60-year-old problem about picking one voice out of a cocktail party has become nickcheo's mashup, somebody's sample, somebody else's remix. The models aren't there yet. But the day a producer can reach into Other and pull out exactly the one acoustic guitar track they want, the way we write music changes.

---

## References

[1] Pitcher, L. (2024, August 29). A night in a Chinatown shuttle with TikTok DJ Nick Cheo. *Dazed*. https://www.dazeddigital.com/music/article/64447/1/new-york-ohio-chinatown-shuttle-with-tiktok-dj-nick-cheo-interview · Instagram: https://www.instagram.com/nickcheo/ · TikTok: https://www.tiktok.com/@nickcheo

[2] Cherry, E. C. (1953). Some experiments on the recognition of speech, with one and with two ears. *Journal of the Acoustical Society of America*, 25(5), 975–979.

[3] Jeon, C.-B., & Lee, K. (2022). Towards Robust Music Source Separation on Loud Commercial Music. *ISMIR 2022*. https://arxiv.org/abs/2208.14355

[4] Zang, Y., Dai, Z., Plumbley, M. D., & Kong, Q. (2025). Music Source Restoration. https://arxiv.org/abs/2505.21827

[5] Zang, Y., Hai, J., Ge, W., Kong, Q., Dai, Z., Wang, H., Mitsufuji, Y., & Plumbley, M. D. (2025). MSRBench: A Benchmarking Dataset for Music Source Restoration. https://arxiv.org/abs/2510.10995

[6] Défossez, A. (2021). Hybrid Spectrogram and Waveform Source Separation. *ISMIR 2021 Music Demixing Workshop (MDX)*. https://arxiv.org/abs/2111.03600

[7] Rafii, Z., Liutkus, A., Stöter, F.-R., Mimilakis, S. I., & Bittner, R. (2017). MUSDB18 — a corpus for music separation. https://sigsep.github.io/datasets/musdb.html

[8] Pereira, I., Araújo, F., Korzeniowski, F., & Vogl, R. (2023). MoisesDB: A Dataset for Source Separation Beyond 4-Stems. *ISMIR 2023*. https://arxiv.org/abs/2307.15913
