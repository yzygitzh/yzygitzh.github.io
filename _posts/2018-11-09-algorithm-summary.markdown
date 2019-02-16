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
            * There is a Konig theorem: |min-node-cov| = |max-match|.
        * [POJ 3020 Antenna Placement]({{ poj }}3020.cpp)
            * Given (x, y) points, one can cover points using length-2 capsules. Find minimum capsules needed.
            * |nodes| = |max-match| + |min-edge-cov|. Positions as nodes, capsules as edges.

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

# String
* [POJ 1035 Spell Checker]({{ poj }}1035.cpp)
    * Given a word and a dictionary, find all one-edit-distance matches.
* [POJ 3080 Blue Jeans]({{ poj }}3080.cpp)
    * Given a set of strings, find their longest common substring.
    * Binary search LCS length.
* [POJ 1936 All in All]({{ poj }}1936.cpp)
    * Implement isSubString.

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

