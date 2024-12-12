---
  title: nihao
  summary: AdaRound技术分析
  image: /images/blog/adaround/cover.png
  author: Ctianyang
  publishedAt: '2024-12-5'
  tag: Quantization, AdaRound
---

# AdaRound

传统方法来优化量化是优化的量化参数，即scale和zero point，而AdaRound是从另一种角度来优化，它优化的是四舍五入的量化方式。传统方法中per-tensor的优化空间是2(S和Z)，而AdaRound中采用per tensor的优化空间是N\*C\*W*H，相比较于传统方法，AdaRound本质上来说相当于扩大了优化空间。通过实验在W4A8  中取得了好的效果。

本人习惯从动机 ->实现技巧 -> 实验的逻辑分析，下面先分析动机。

## 1. 动机