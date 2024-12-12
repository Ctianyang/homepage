---
  title: test
  summary: BRECQ技术分析
  image: /images/blog/brecq/brecq_cover.png
  author: Ctianyang
  publishedAt: '2024-12-10'
  tag: Quantization, BRECQ
---

这篇文章和AdaRound有很多相同之处，它们都是在对由量化引起的task loss的误差的二阶分析上展开的，并且它对AdaRound中对Hessian矩阵估计的不足之处进行弥补。这篇文章的中心是：在cross layer dependency和泛化误差之间取得balance。因此它侧重于对优化粒度的选择。它也是首篇在W2A4上掉点不严重的文章。

这篇文章依从动机 ->实现技巧 -> 实验的逻辑分析，下面先分析动机。

## 1. 动机

noishuo