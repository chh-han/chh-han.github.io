---
title: "Biased Narration: Music AI Through a Producer's Eyes"
date: 2026-05-15T09:00:00
summary: "Why this blog exists — a producer-turned-researcher's take on the gap between music AI papers and what producers actually want."
tags: ["intro", "music-ai", "research"]
draft: false
---

"Controllable music generation." How impressive. How grand. But once a producer takes a look at which attributes were actually made controllable, they'll probably let out a quiet laugh.

I have a law degree, but I spent years working as a professional producer and musician. Now I'm doing a PhD in computer science, treating music as data and researching AI. Over the past few years, as I've been turning myself into a researcher, I've kept receiving music AI through a musician's eyes. The reception has been a mix of wonder, fear, and disappointment. This blog is for the musicians who, in this era of impressive AI models pouring out one after another, are feeling the same combination of emotions I first felt when I started studying this field.

A producer is both an artist and an engineer. Closer to a sculptor, I think. We take a blueprint shaped by our artistic experience and taste, and carve it down one layer at a time with an engineer's hand. Every moment is a decision about where to place the chisel and how deep to go.

The music AI world I walked into as an ML researcher felt like a "greenhouse" — a place where almost none of those carving decisions are visible. Part of this is a data problem. Datasets like MUSDB18 and MoisesDB exist, but they have real limitations. The deeper problem, though, is that the field doesn't really know what producers actually want.

My first research project was on track role prediction. Producers spend a lot of time hunting for the right samples. This matters even more today, when good samples are a click away on Splice or Loopmasters and loop-based composition is the norm. But the existing taxonomy of samples wasn't built the way producers think. For us, what instrument it is matters — but so does whether the sample is carrying the main melody, playing chords, or running an arpeggio. I wanted that research to be a small push toward taking this kind of classification seriously.

A note: this blog will, at times, read like biased commentary. I'll cover research, but I'll often step back into the producer's seat and look at it through a musician's eyes. Let's begin.
