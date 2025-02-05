---
title: 第一章 -- 代数拓扑之研究
date: 2021-08-29
---

# 研究对象与研究目标

**代数拓扑 / Algebraic topology** -- 旧称 **组合拓扑 / Combinatorial topology**，
其研究对象是 **空间 / Space**，其研究目标是空间的 **分类问题 / Classification problem**。

定义空间的方式有很多，在这本书中，在简要介绍定义空间的各种方式之后，
我们将把自己的学习限制在其中一种方式之内 -- 即 **胞腔复形 / Cell complex**。

我们可以用递归定义来描述 Cell complex，然后写程序来实现这种定义，然后一边学习一边用我们的实现来做实验。

每当考虑数学中的分类问题时，我们描述「分类依据」的方式通常是 **等价关系 / Equivalence relation**。

等价关系告诉我们，什么情况下两个对象可以被归为一类，
用等价关系所描述的类，就叫做 **等价类 / Equivalence class**，
而且所有的分类又都可以视为是某个等价关系所描述的等价类，
因此数学中「分类」与「等价关系」这两个概念是同意的，

在代数拓扑中，我们所研究的等价关系是空间之间的 **同胚 / Homeomorphism**，
以及更粗糙的（更多的空间被视为等价的） **同伦等价 / Homotopy equivalence**。

为了解决数学中分类问题，我能想到两种的典型策略：

- 一个策略是，寻找一个算法，把研究对象划归到 **正规形式 / Noraml form**

  这种正规形式，其实是等价类中的一个代表元。

  比如，在 **Lambda 演算 / Lambda calculus** 中，
  用 beta-reduction 和 eta-reduction（或 eta-expansion）定义了一个等价关系，
  我们把 正规形式 定义为，不能再进行 beta-step 和 eta-step 的 lambda expression，
  我们有算法可以将任意 lambda expression 划归为正规形式，
  在加上 alpha-equivalence，我们就可以判断任意两个 lambda expression 是否等价了。

- 一是策略是，寻找一个 **不变量 / Invariant**

  假设我们的研究对象是 `Space`，
  所谓不变量，就是一个函数 `f: Space -> T`，
  其中 `T` 是某个给定的值域。

  并且这个函数要满足就我们所关心的分类而言的 **不变性**，
  也就是说，如果两个空间 `a b: Space` 被视为一类，那么应该有 `f(a) == f(b)`。

  有了这样一个不变量之后，我们就能在某种程度上，
  对「两个空间是否属于一类」这个问题，给出 *否定* 的回答。
  因为如果 `f(a) != f(b)`，那么 `a` 和 `b` 一定是不属于一类的。

  注意，通常我们没法利用不变量，对「两个空间是否属于一类」这个问题，给出 *肯定* 的回答。
  因为即便 `f(a) == f(b)`，`a` 和 `b` 也可能是不属于一类的。

  例如，空间的 **欧拉示性数 / Euler characteristic**，
  就是一个函数 `euler_charac: Space -> Int`，
  我们之后可以详细介绍这个函数。

「代数拓扑」在「拓扑」前面加上了「代数」一词的修饰，
就是因为我们所获得的不变量，不是一个个数字意义上的量 -- 比如 整数 或者 有理数，
而是一个个代数结构，比如某个 交换群、群 或者 环。

也就是说，我们所研究的不变量是更高级的构造，它们是群本身（而不是群的元素）。
正是因为它们具有更丰富的性质和结构，才能让我们区分出来不同的空间。

# 定义空间的各种方式

TODO

- 胞腔复形 / Cell complex -- 又称为 **CW 复形 / CW complex**
- **单纯复形 / Simplicial complex**

# 同胚 与 同伦等价

TODO
