---
layout: post
title:  "Algorithm Contest Problem Summary"
date:   2018-11-09 19:30:00 +0800
categories: Algorithm
tags: Algorithm
---

{% assign usaco = "https://github.com/yzygitzh/oj_solutions/tree/master/usaco/src/" %}
{% assign poj = "https://github.com/yzygitzh/oj_solutions/tree/master/poj/src/" %}

# Advanced Algorithms

# Advanced Data Structures

* Segment Tree
    * [POJ 2528 Mayor's posters]({{ poj }}2528.cpp)
        * Given posters and their placement order, find number of posters visible.
        * Segment tree with lazy update.
    * [POJ 2777 Count Color]({{ poj }}2777.cpp)
        * Range update, range query for number of different elements.
        * Use bitmap to mark elements.
        * If using plain array for segment tree, we need O(4L) space because it might not be a complete binary tree.
    * [POJ 2750 Potted Flower]({{ poj }}2750.cpp)
        * Given a number circle and modification instructions, find maximum arc after each instruction but not the full circle.
        * Represent the circle by a chain. max_arc = max(max_chain, sum - min_chain) if max_chain != sum else sum - min_chain.
    * [POJ 2482 Stars in Your Window]({{ poj }}2482.cpp)
        * Given points with values and a fixed-size box, find maximum value that can be bounded.
        * Each point can be represented by a Y-axis segment, and scan along X axis.
    * [POJ 3264 Balanced Lineup]({{ poj }}3264.cpp)
        * Range min/max query.
    * [POJ 3368 Frequent values]({{ poj }}3264.cpp)
        * Range query most frequent number.
        * Actually a DP problem, for each segment maintains (maxCnt, minVal, minCnt, maxVal, maxCnt).

* Binary Index Tree
    * [POJ 2828 Buy Tickets]({{ poj }}2828.cpp)
        * Finish insertion sort given the insertion sequence.
        * Reverse the insertion sequence. Maintain slots remaining in [0, m], and binary search for the position with valid slots for each insertion.
    * [POJ 2886 Who Gets the Most Candies?]({{ poj }}2886.cpp)
        * Given a circle made by children. Each child has an offset. Each time we delete a child from the circle and find the next child according to the offset. The p-th child deleted got number-of-p's-divisors score. Find the child with maximum score.
        * Maintain slots remaining in [0, m], similar to 2828.
        * Number of divisors are calculated by sieve method.
    * [POJ 2352 Stars]({{ poj }}2352.cpp)
        * Given points, define level of a point as number of points in the left-down side of it.
        * Process points in left-to-right, down-to-up order.
    * [POJ 1195 Mobile phones]({{ poj }}1195.cpp)
        * 2D point modification and range query
        * 2D BIT, easy expansion from 1D case.

* Suffix Array
    * [USACO Music Theme]({{ usaco }}theme.cpp)
        * DP solution by maintaining len[i][j], longest common prefix starting from i and j.
    * [USACO Hidden Passwords]({{ usaco }}hidden.cpp)
        * Sort rotates of a string.

# Computational Geometry

* Lattice Point
    * [USACO Electric Fence]({{ usaco }}fence9.cpp)
        * Find lattice points in a triangle.

* Convex Hull
    * Graham Scan
    * [USACO Fencing the Cows]({{ usaco }}fc.cpp)

* Rectangle
    * [USACO Window Area]({{ usaco }}window.cpp)
        * Rectangle overlapping algorithm (floating-up); Cutting up, down, left and right.

* Line Sweeping
    * [USACO Picture]({{ usaco }}picture.cpp)
        * Find perimeter of stacked rectangles.

# Dynamic Programming

* [USACO Number Triangles]({{ usaco }}numtri.cpp)
    * Find maximum sum from root to leaf in a tree.
* [USACO Subset Sums]({{ usaco }}subset.cpp)
    * Find number of possible subsets adding to a number.
    * Typical knapsack.
* [USACO Longest Prefix]({{ usaco }}prefix.cpp)
    * Find the longest prefix of a string constructable by words from a dictionary.
    * Use Trie with DP.
* [USACO Cow Pedigrees]({{ usaco }}nocows.cpp)
    * Find number of possible complete binary trees with N nodes.
    * Catalan number.
* [USACO Money Systems]({{ usaco }}money.cpp)
    * Find number of ways to compose N given smaller numbers M1, M2, ..., Mi.
    * Typical complete knapsack.
* [USACO Score Inflation]({{ usaco }}inflate.cpp)
    * 0/1 knapsack. 
* [USACO Stamps]({{ usaco }}stamps.cpp)
    * Find minimum number that cannot be summed to by at most K numbers drawn from a set.
    * DP on minimum number of solution summed to M with first N numbers.
* [USACO Stringsobits]({{ usaco }}kimbits.cpp)
    * Find the k-th largest number having no more than N 1-bits.
    * DP on number of N-length no more than M-1-bit numbers.
* [USACO Shopping Offers]({{ usaco }}shopping.cpp)
    * Find the minimum cost to satisify a target combination with given combinations.
    * Multiple dimension knapsack.
* [USACO Home on the Range]({{ usaco }}range.cpp)
    * Find all squares in an area with obstacles.
    * DP on maximum square edge size.
* [USACO Raucous Rockers]({{ usaco }}rockers.cpp)
    * Store maximum number of songs in CDs with chronological order. (Brute force will also do though)
    * DP on F[M][N][T], maximum of songs can put with first M songs, first N CD's and last CD remaining time T.
* [USACO Beef McNuggets]({{ usaco }}nuggets.cpp)
    * Find minimum number that cannot be summed to by a set of numbers. Number usage is not limited.
    * Extended euclid: ax + by = gcd(a, b). If gcd > 1, then no limit. If smallest number == 1, then all ok. Else, use method in Stamps. Exit once the following 256 bits are all 1. 
* [USACO Buy Low, Buy Lower]({{ usaco }}buylow.cpp)
    * Find number of unique longest decreasing subsequences.
    * Find maximum length, then count unique ones. For i < j, if maxLen[i] + 1 == maxLen[j], then uniqNums[j] = uniqNums[i] if nums[i] == nums[j], uniqNums[j] = uniqNums[i] + uniqNums[j] if nums[i] < nums[j].
* [USACO Milk Measuring]({{ usaco }}milk4.cpp)
    * Given a set of numbers and a target, find minimum subset, numbers drawn from which summed to the target.
    * DFSID + DP validation also works.
* [USACO Big Barn]({{ usaco }}bigbrn.cpp)
    * Find maximum square in an area with obstacles.
* [USACO Canada Tour]({{ usaco }}tour.cpp)
    * Hamilton circle on a straight line.
    * F[m][n]: max city number from m -> start -> n. m is always <= n.
* [USACO Character Recognition]({{ usaco }}charrec.cpp)
    * F[m] = min(F[m - 19] + cost(missing), F[m - 20] + cost(normal), F[m - 21] + cost(duplicate)) 
* [USACO Two Five]({{ usaco }}twofive.cpp)
    * Very good question! See answer and solution on USACO for more details.
* [POJ 1837 Balance]({{ poj }}1837.cpp)
    * Given a balance and weights and loadable positions, find number of balanced configurations.
    * State: F[M][N], number of ways by which load N can be reached by first M weights.
* [POJ 1276 Cash Machine]({{ poj }}1276.cpp)
    * 0/1 Knapsack with object number limit.
    * Need binary optimization (2^0, 2^1, ..., 2^k, N-(1+...+2^k)), where k is the maximum i.e. N-(...)>=0.
* [POJ 2151 Check the difficulty of problems]({{ poj }}2151.cpp)
    * Probability DP. Given probability list, F[m][n]: probability of selecting n from m.
* [POJ 3267 The Cow Lexicon]({{ poj }}3267.cpp)
    * Given a dictionary and a string, find minimum characters to remove from string to make the string compositable by words from the dictionary.
    * For each position try drop or match each word in dictionary.
* [POJ 1836 Alignment]({{ poj }}1836.cpp)
    * Given a line of soldiers, find minimum number of soldiers needed to move inorder to make each soldier in the line can see either left or right extremity.
    * Strict LIS on both sides.
* [POJ 1260 Pearls]({{ poj }}1260.cpp)
    * There are M classes of pearls and their value V. One has to pay 10 more units when buying any class of pearls. Better pearls can replace worse ones. Given a shopping list, find minimum cost.
    * F[M][2]: minimum cost of buying highest M classes of pearls when buying the M-th class or not.
* [POJ 2533 Longest Ordered Subsequence]({{ poj }}2533.cpp)
* [POJ 3176 Cow Bowling]({{ poj }}2533.cpp)
    * Typical triangle sum DP.
* [POJ 1080 Human Gene Functions]({{ poj }}1080.cpp)
    * Typical weighted LCS.
* [POJ 1159 Palindrome]({{ poj }}1159.cpp)
    * Given a string, find minimum inserts to make it palindrome.
    * Let F[i][j] is minimum inserts between i and j. F[i][j] = min(F[i+1][j]+1, F[i][j-1]+1, F[i+1][j-1] only if s[i]==s[j]).
* [POJ 1191 棋盘分割]({{ poj }}1191.cpp)
    * Given a weighted 8x8 chess board. You can cut one rectangle off for n times. Find minimum of variance of pieces.
    * For each sub-rectangle, maintain minimum variance for cutting into x pieces.
* [POJ 3280 Cheapest Palindrome]({{ poj }}3280.cpp)
    * Given a string, find minimum insert/deletes to make it palindrome.
    * Similar to POJ 1159.
* [POJ 2029 Get Many Persimmon Trees]({{ poj }}2029.cpp)
    * Given points and a rectangle, find maximum points boundable by the rectangle.
    * Can do with prefix sum. 2D BIT solution similar to POJ 1195.
* [POJ 2948 Martian Mining]({{ poj }}2948.cpp)
    * Given a grid, there are mineral type A and B on grid points. One can build conveyor belts to collect A to left and B to top. Find maximum mineral that can be collected.
    * Maintain F[i][j] as maximum mineral in [0,i]x[0,j] area. Scan from top-left gives O(N^2) solution, and from bottom-right gives O(N^3).
* [POJ 1925 Spiderman]({{ poj }}1925.cpp)
    * The problem is not good, for its worst time complexity is too high.
* [POJ 3034 Whac-a-Mole]({{ poj }}1925.cpp)
    * Find maximum score in a Whac-a-Mole game. Hammers can move from/to integer points in straight lines only.
    * F[m][n][t]: maximum score with hammer's end position at (m, n) at time t.
* [POJ 3254 Corn Fields]({{ poj }}3254.cpp)
    * Given a 0-1 matrix. One can select 1's from it but without adjacent 1's. Find number of valid selections.
    * F[m][n]: number of selections with first m rows when m-th row is of state n.
* [POJ 1185 炮兵阵地]({{ poj }}1185.cpp)
    * Similar to 3254, but need consider two rows/columns for whether adjacent. Need to calculate valid states first to shrink state space.
* [POJ 2411 Mondriaan's Dream]({{ poj }}2411.cpp)
    * Given mxn field, find number of filling methods with 1x2 bricks.
    * 0-1 encoding for vertical bricks and 1-1 for horizontal bricks. Then similar to 3254.
* [OpenJudge 4119 复杂的整数划分问题]({{ poj }}4119.cpp)
    * Given a number M, find number of plans to 1) divide it into K numbers 2) divide it into different numbers 3) divide it into odd numbers
    * 1) is F[m][n] = F[m-1][n-1] (has 1) + F[m-n][n] (no 1). 2) and 3) are knapsack.

# Greedy

* [USACO Mixing Milk]({{ usaco }}milk.cpp)
    * Fraction knapsack.
* [USACO Barn Repair]({{ usaco }}barn1.cpp)
    * Given points 1 to n, one can cover a given point set using no more than L lines. Find the minimum number of points need to be covered.
    * Greedily choose minimum seperations.
* [USACO Job Processing]({{ usaco }}job.cpp)
    * Minimize the time of 2-phase jobs flowing through M1 phase-1 machines and M2 phase-2 machines, with different job processing times.
    * See USACO solution.
* [POJ 1328 Radar Installation]({{ poj }}1328.cpp)
    * Given intervals, find minimum points to color all intervals.
* [POJ 2586 Y2K Accounting Bug]({{ poj }}2586.cpp)
* [POJ 3253 Fence Repair]({{ poj }}3253.cpp)
    * Given a single wood plank, cut it into given pieces. Each cut cost is the length of the plank being cut, find minimum cost.
    * Huffman tree.

# Graph

* Shortest Path
    * Bellman-Ford
    * Dijkstra
    * Floyd
    * SPFA
    * [USACO Bessie Come Home]({{ usaco }}comehome.cpp)
        * Floyd.
    * [USACO Cow Tours]({{ usaco }}cowtour.cpp)
        * Given un-connected regions, find minimum diameter of graph formed by connecting any two of them.
        * Floyd and enumerate connected point pairs.
    * [USACO Sweet Butter]({{ usaco }}butter.cpp)
        * Heap-optimized Dijkstra.
    * [USACO Camelot]({{ usaco }}camelot.cpp)
        * SPFA (BFS without visited), for each knight calculate minimum cost to all grids with or w/o king. Note that "no king" can go to "with king", but not vice versa.
    * [USACO Fence Loops]({{ usaco }}fence6.cpp)
        * Find shortest cycle in a weighted graph.
        * For each edge break it and do dijkstra.
    * [POJ 1860 Currency Exchange]({{ poj }}1860.cpp)
        * Find exchange rate \> 1 in the exchange grph, from given currency. Bellman-ford.
    * [POJ 3259 Wormholes]({{ poj }}3259.cpp)
        * Find negative circle in the whole graph. Floyd.
    * [POJ 1062 昂贵的聘礼]({{ poj }}1062.cpp)
        * Define "having nothing" state HN. For each gift G valued p, we have (HN, G) edge with cost p. For each replacement G' with better price q, we have (G', G) with cost q. Do shortest path with Dijkstra.
    * [POJ 2253 Frogger]({{ poj }}2253.cpp)
        * For each point, find minimum of max edge length of path to it. Dijkstra, change objective to minimize edge length. Greedy policy can be prooved.
    * [POJ 1125 Stockbroker Grapevine]({{ poj }}1125.cpp)
        * Bare floyd.
    * [POJ 2240 Arbitrage]({{ poj }}2240.cpp)
        * Similar to 1860, but consider all start currency. Floyd.

* Topological Sort
    * [POJ 1094 Sorting It All Out]({{ poj }}1094.cpp)
        * Bare topological sort.

* Eularian Path
    * Hierholzer's algorithm
    * [USACO Riding the Fences]({{ usaco }}fence.cpp)
    * [POJ 2513 Colored Sticks]({{ poj }}2513.cpp)
        * Given sticks with colored two ends, find whether they can be aligned i.e. ends with same colors are connected.
        * Note that there might be non-connected graph.

* Minimum Spanning Tree
    * Prim
    * Kruskal
    * [USACO Agri-Net]({{ usaco }}agrinet.cpp)
        * Bare MST.
    * [POJ 1789 Truck History]({{ poj }}1789.cpp)
        * Find MST in string distance graph.
    * [POJ 2485 Highways]({{ poj }}2485.cpp)
        * Find the spanning tree with minimum maximum edge. MST satisfies the condition.
    * [POJ 1258 Agri-Net]({{ poj }}1258.cpp)
        * Same with USACO Agri-Net.
    * [POJ 3026 Borg Maze]({{ poj }}3026.cpp)
        * Bare MST. STL queue will timeout, use vanilla array.
    * [POJ 2031 Building a Space Station]({{ poj }}2031.cpp)
        * Bare MST, need to merge connected points.

* Network Flow
    * Max-Flow
        * Edmond-Karp
        * [USACO Drainage Ditches]({{ usaco }}ditch.cpp)
            * Bare Edmond-Karp.
        * [USACO Pollutant Control]({{ usaco }}milk6.cpp)
            * Find minimum edge cut with minimum edge number.
            * To minimize the edge number, solve minimum cut among full-capacity edges. Full edges are refilled with weight 1, others with infinity. As a result, max-flow capacity == min-cut capacity == min edge number.
        * [USACO TeleCowmunication]({{ usaco }}telecow.cpp)
            * Minimum node cut.
        * [POJ 1459 Power Network]({{ poj }}1459.cpp)
            * Given power plants, consumers and dispatchers, find maximum power consumed.
            * Bare max flow. Connect plants to source and consumers to sink.
    * Maximum Matching
        * [USACO The Perfect Stall]({{ usaco }}stall4.cpp)
    * Bi-Partite Graph
        * Hungarian
        * [POJ 3041 Asteroids]({{ poj }}3041.cpp)
            * Given (x, y) points, one can eliminate a row or a col. Find minimum steps to eliminate all points.
            * Build x-y bi-partite graph with super source and sink, find minimum cut (maximum match). Graph cut means no more points.
            * There is a Konig theorem: \|min-node-cov\| = \|max-match\|.
        * [POJ 3020 Antenna Placement]({{ poj }}3020.cpp)
            * Given (x, y) points, one can cover points using length-2 capsules. Find minimum capsules needed.
            * \|nodes| = \|max-match\| + \|min-edge-cov\|. Positions as nodes, capsules as edges.

* Flood Filling
    * [USACO Street Race]({{ usaco }}race3.cpp)

* Strong Connected Region
    * Tarjan algorithm
    * [USACO Network of Schools]({{ usaco }}schlnet.cpp)

# Math

* High Precision
    * [POJ 2109 Power of Cryptography]({{ poj }}2109.cpp)
        * Need constant optimization. 
* Mini-Max Search
    * [USACO A Game]({{ usaco }}game1.cpp)
        * Two players fetch numbers from two ends of a sequence for maximum sum.

* [USACO Factorials]({{ usaco }}fact4.cpp)
    * Find rightmost non-zero digit of n!.
* [POJ 3087 Shuffle'm Up]({{ poj }}3087.cpp)
    * Given two equal-length sequences, one can shuffle them. E.g., ABAB and BABA -> BAABBAAB. Find whether it's possible to get a sequence by shuffling multiple times.
    * This is a out perfect shuffle problem. See solution file for further explanation.
* [POJ 3252 Round Numbers]({{ poj }}3252.cpp)
    * Define "round number" is a number whose binary representation has more 1 than 0. Find how many round numbers are there in a given range [x, y].
* [POJ 1850 Code]({{ poj }}1850.cpp)
    * Given encoding rule a=1, b=2, ..., z=26, ab=27, ..., az=51, bc=52, ..., vwxyz=83681, find encoding for any word.
* [POJ 1019 Number Sequence]({{ poj }}1019.cpp)
    * Given number sequence like 112123123412345..., find i-th digit.
* [POJ 1942 Paths on a Grid]({{ poj }}1942.cpp)
    * Calculate C(m+n, m). Be careful with timeout when m == 1 or m == 2.
* [POJ 2635 The Embarrassed Cryptographer]({{ poj }}2635.cpp)
    * Given big M (~100 digits), calculate its minimum prime factor. Need prime sieve.
* [POJ 3292 Semi-prime H-numbers]({{ poj }}3292.cpp)
    * Given domain {4k+1}, find semi primes. A semi prime is a number produced by two-prime multiplication.
* [POJ 1845 Sumdiv]({{ poj }}1845.cpp)
    * Given A and B, find sum of all natural divisors of A^B mod 9901.
    * Factorize A^B as a1^n1\*a2^n2 ..., sum can be represented by generative function: (1+a1+...+a1^n1)(1+a2+...+a2^n2)...
* [POJ 2115 C Looooops]({{ poj }}2115.cpp)
    * Find minimum solution for module linear equation.

# Miscellaneous

* Construction
    * [USACO Sorting a Three-Valued Sequence]({{ usaco }}sort3.cpp)
        * Construct an optimized swapping solution to sort 1, 2, 3s.
        * Count 1in2, 1in3, 2in1, 2in3, 3in1, 3in2. Then do pairwise elimination (1in2 and 2in1). Then rest is 231 or 132.
    * [POJ 3295 Tautology]({{ poj }}3295.cpp)
        * Build an recursive parser.
* Emulation
    * [USACO Your Ride is Here]({{ usaco }}ride.cpp)
    * [USACO Greedy Gift Givers]({{ usaco }}gift1.cpp)
    * [USACO Friday the Thirteenth]({{ usaco }}friday.cpp)
    * [USACO Broken Necklace]({{ usaco }}beads.cpp)
    * [USACO Milking Cows]({{ usaco }}milk2.cpp)
    * [USACO Transformations]({{ usaco }}transform.cpp)
    * [USACO Name That Number]({{ usaco }}namenum.cpp)
        * There are digit-letter mapping (2-ABC,3-DEF,...) and a dictionary with 4-length words. Given a 4-length number, find all corresponding words.
        * Binary search.
    * [USACO Preface Numbering]({{ usaco }}preface.cpp)
    * [USACO The Tamworth Two]({{ usaco }}ttwo.cpp)
        * Whether farmer J will meet the cow. Break after step m*n, where m*n is the area of the maze.
    * [USACO Fractions to Decimals]({{ usaco }}fracdec.cpp)
    * [USACO Spinning Wheels]({{ usaco }}spin.cpp)
        * Stop iteration after 360 times, because every spin will return to initial state.
    * [USACO Magic Squares]({{ usaco }}msquare.cpp)
    * [USACO Starry Night]({{ usaco }}starry.cpp)
    * [POJ 1068 Parencodings]({{ poj }}1068.cpp)
    * [POJ 1573 Robot Motion]({{ poj }}1573.cpp)
    * [POJ 2632 Crashing Robots]({{ poj }}2632.cpp)
    * [POJ 2993 Emag eht htiw Em Pleh]({{ poj }}2993.cpp)
    * [POJ 2996 Help Me with the Game]({{ poj }}2996.cpp)
* Enumeration
    * [USACO Palindromic Squares]({{ usaco }}palsquare.cpp)
    * [USACO Dual Palindromes]({{ usaco }}dualpal.cpp)
    * [USACO Prime Cryptarithm]({{ usaco }}crypt1.cpp)
    * [USACO Combination Lock]({{ usaco }}combo.cpp)
    * [USACO Wormholes]({{ usaco }}wormhole.cpp)
    * [USACO Ski Course Design]({{ usaco }}skidesign.cpp)
        * Given hills, one can change their heights with cost pow(deltaH, 2). Find minimum cost to change them into a 17 interval.
        * O(Nlog(M)) time by binary search.
    * [USACO Arithmetic Progressions]({{ usaco }}ariprog.cpp)
        * Find a + nb in p^2 + q^2.
        * Search in p^2 and q^2 only.
    * [USACO Prime Palindromes]({{ usaco }}pprime.cpp)
        * Find all palindrome primes between two numbers (can be 0 to 10^9).
    * [USACO Superprime Rib]({{ usaco }}sprime.cpp)
        * Find all numbers whose prefixes are all prime.
    * [USACO Runaround Numbers]({{ usaco }}runround.cpp)
    * [USACO Healthy Holsteins]({{ usaco }}holstein.cpp)
    * [USACO Party Lamps]({{ usaco }}lamps.cpp)
    * [USACO Zero Sum]({{ usaco }}zerosum.cpp)
        * 24-point game, with only + and -.
    * [USACO Humble Numbers]({{ usaco }}humble.cpp)
        * Given N primes, find the Kth largest product produced by them. O(NK) time.
    * [USACO Contact]({{ usaco }}contact.cpp)
        * Find substrings within 12-length with top-K appearance in 01 string. Bit manipulation.
    * [USACO Feed Ratios]({{ usaco }}ratios.cpp)
    * [POJ 1753 Flip Game]({{ poj }}1753.cpp)
    * [POJ 2965 The Pilots Brothers' Refrigerator]({{ poj }}2965.cpp)
        * Need constant optimization.
* Divide & Conquer
    * [USACO Ordered Fractions]({{ usaco }}frac1.cpp)
        * Print all fractions represented by 1...N.
        * Simple enumeration worked well.
        * Faster solution: if n1/n2 \<= d1/d2, then n1/n2 \<= (n1+d1)/(d1+d2) <= d1/d2
    * [USACO American Heritage]({{ usaco }}heritage.cpp)
        * Given in-order and pre-order, print post-order

# Search

* [USACO Mother's Milk]({{ usaco }}milk3.cpp)
* [USACO The Castle]({{ usaco }}castle.cpp)
* [USACO Hamming Code]({{ usaco }}hamming.cpp)
* [USACO Controlling Companies]({{ usaco }}concom.cpp)
    * Given controlling relations among Co.LTD's, find all controlling relations.
    * DFS for every company, do further search when new company is under control.
* [USACO Overfencing]({{ usaco }}maze1.cpp)
    * Given a maze with multiple exits, find the point with minimum worst exit path.
* [USACO Letter Game]({{ usaco }}lgame.cpp)
* [USACO Shuttle Puzzle]({{ usaco }}shuttle.cpp)
    * Formula solution exists. See USACO analysis.
* [USACO Frame Up]({{ usaco }}frameup.cpp)
* [USACO Snail Trail]({{ usaco }}snail.cpp)
* [POJ 2488 A Knight's Journey]({{ poj }}2488.cpp)
    * Given a chess board and a knight, find whether there is a hamilton path.
* [POJ 3083 Children of the Candy Corn]({{ poj }}3083.cpp)
    * Walk through a maze by walking alongside left/right wall and shortest path.
    * Turn left/right when there is path to left/right. Else if no path turn right/left.
* [POJ 3009 Curling 2.0]({{ poj }}3009.cpp)
    * Throw stones to the target in a grid. The stone can brick one wall at a time.
    * Use DFS since the maze can change.
* [POJ 1321 棋盘问题]({{ poj }}1321.cpp)
    * Generalized N-queen problem.
* [POJ 2251 Dungeon Master]({{ poj }}2251.cpp)
    * Given a 3D maze, find shortest path from start to end. Simple BFS.
* [POJ 3278 Catch That Cow]({{ poj }}3278.cpp)
    * Given N and K, one can do N+1, N-1 and N\*2 to get K, find minimum steps.
    * Simple BFS since 0 <= N (state number) <= 100000.
* [POJ 1426 Find The Multiple]({{ poj }}1426.cpp)
    * Given n, find m i.e. m % n == 0 and m's decimal representation contains only 0 and 1.
    * Do bfs on remainder space of n.
* [POJ 3126 Prime Path]({{ poj }}3126.cpp)
    * Given two 4-digit primes A and B, find least number of 1-digit replacements to convert A to B. Simple BFS.
* [POJ 3414 Pots]({{ poj }}3414.cpp)
    * Given two pots with volume A and B, and three actions FILL, DROP and POUR, find least steps to make C unit water. Simple BFS.
* [POJ 1416 Shredding Company]({{ poj }}1416.cpp)
    * Given two numbers A and B, find the way to cut B that sum of the segments is maximum and no more than A.
* [POJ 2676 Sudoku]({{ poj }}2676.cpp)
    * Solve a 9x9 sudoku.
* [POJ 1129 Channel Allocation]({{ poj }}1129.cpp)
    * Vertex coloring problem.
* [POJ 3411 Paid Roads]({{ poj }}3411.cpp)
    * Given a road graph, roads have costs. Some roads can be pre-paid at some node. Find minimum cost from node 1 to node N.
    * DFS, state is pre-paid roads and current city. Haven't get accepted yet.
* [POJ 2531 Network Saboteur]({{ poj }}2531.cpp)
    * Find maximum cut of a fully connected graph.
    * O(2^(n-1)\*n) time, state enumerate using gray code.

# String

* [POJ 1035 Spell Checker]({{ poj }}1035.cpp)
    * Given a word and a dictionary, find all one-edit-distance matches.
* [POJ 3080 Blue Jeans]({{ poj }}3080.cpp)
    * Given a set of strings, find their longest common substring.
    * Binary search LCS length.
* [POJ 1936 All in All]({{ poj }}1936.cpp)
    * Implement isSubString.
* [POJ 1961 Period]({{ poj }}1961.cpp)
    * Given a string s, for each its prefix judge whether is periodical.
    * Use KMP next array WITHOUT optimization. Cycle length is n - next(n) for 1 <= n <= len(s).
* [POJ 2406 Power Strings]({{ poj }}2406.cpp)
    * Given a string s, find whether it's periodical.
    * Similar with POJ 1961. Or find s in (s+s)[1:-1].

# Sort
* [POJ 2388 Who's in the Middle]({{ poj }}2388.cpp)
    * Find median.
* [POJ 2299 Ultra-Quicksort]({{ poj }}2299.cpp)
    * Find all reverse pairs.
    * BIT/Segment tree/instrumented merge sort.

# Hash

* [POJ 3349 Snowflake Snow Snowflakes]({{ poj }}3349.cpp)
    * Given lengths of snowflake akes, find twin snowflakes.
    * Find lexicographically mininimum representation.
* [POJ 3274 Gold Balanced Lineup]({{ poj }}3274.cpp)
    * Find longest subarray that all bits appear same times.
    * Prefix sum, generate relative hash, and for each hash find maximum gap.
* [POJ 1840 Eqs]({{ poj }}1840.cpp)
    * Given ai (1 <= i <= 5), find number of solutions of SUM(ai * xi) = 0.
    * Similar to LeetCode two sum.
* [POJ 2002 Squares]({{ poj }}2002.cpp)
    * Given 2d points, find number of squares.
    * O(n^2) enumeration.
* [POJ 2503 Babelfish]({{ poj }}2503.cpp)
    * Translate words given a dictionary.

# Binary search

* [POJ 3273 Monthly Expense]({{ poj }}3273.cpp)
    * Given N numbers, find M segments with minimum maximum segment sum.
    * Binary search for the maximum sum.
* [POJ 3258 River Hopscotch]({{ poj }}3258.cpp)
    * Given 0, L and N points between 0 and L, find maximum of minimum distance by removing M points.
    * Binary search the distance. To validate the answer, use greedy policy to remove stones.
* [POJ 1905 Expanding Rods]({{ poj }}1905.cpp)
    * Find solution of sin(A/x) = B/x (A > B).
    * Binary search, termination condition is defined by \|a-b\|/min(a, b) < 1e-12.
* [POJ 3122 Pie]({{ poj }}3122.cpp)
    * Given M pies with different radius, calculate maximum sub-piece for N people.

# Union find

* [POJ 1703 Find them, Catch them]({{ poj }}1703.cpp)
    * There are two gangs in a city. Given enemy relationships and queries for relationship, answer yes/no/unkonwn.
    * For each person maintain its enemy. Do merges in enemy relationships.
* [POJ 2492 A Bug's Life]({{ poj }}2492.cpp)
    * Similar to 1703, but need to find contradiction.
    * Judge before each merge.

