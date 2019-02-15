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
    * [USACO Music Theme]({{ usaco }}theme.cpp): There is also a DP solution. See USACO analysis.
    * [USACO Hidden Passwords]({{ usaco }}hidden.cpp): Sort rotates of a string.

# Computational Geometry

* Lattice Point
    * [USACO Electric Fence]({{ usaco }}fence9.cpp)

* Convex Hull
    * Graham Scan
    * [USACO Fencing the Cows]({{ usaco }}fc.cpp)

* Rectangle
    * [USACO Window Area]({{ usaco }}window.cpp): Rectangle overlapping algorithm (floating-up).

* Line Sweeping
    * [USACO Picture]({{ usaco }}picture.cpp): Find perimeter of stacked rectangles.

# Dynamic Programming

* [USACO Number Triangles]({{ usaco }}numtri.cpp): Find maximum sum from root to leaf in a tree.
* [USACO Subset Sums]({{ usaco }}subset.cpp): Find number of possible subsets adding to a number.
* [USACO Longest Prefix]({{ usaco }}prefix.cpp): Find the longest prefix of a string constructable by words from a dictionary.
* [USACO Cow Pedigrees]({{ usaco }}nocows.cpp): Find number of possible complete binary trees with N nodes.
* [USACO Money Systems]({{ usaco }}money.cpp): Find number of ways to compose N given smaller numbers.
* [USACO Score Inflation]({{ usaco }}inflate.cpp): 0/1 knapsack. 
* [USACO Stamps]({{ usaco }}stamps.cpp): Find minimum number that cannot be summed to by at most K numbers drawn from a set.
* [USACO Stringsobits]({{ usaco }}kimbits.cpp): Find the k-th largest number having no more than N 1-bits.
* [USACO Shopping Offers]({{ usaco }}kimbits.cpp): Find the minimum cost to satisify a target combination with given combinations.
* [USACO Home on the Range]({{ usaco }}range.cpp): Find all squares in an area with obstacles.
* [USACO Raucous Rockers]({{ usaco }}rockers.cpp): Store maximum number of songs in CDs with chronological order. (Brute force will also do though)
* [USACO Beef McNuggets]({{ usaco }}nuggets.cpp): Find minimum number that cannot be summed to by a set of numbers.
* [USACO Buy Low, Buy Lower]({{ usaco }}buylow.cpp): Find number of unique longest decreasing subsequences.
* [USACO Milk Measuring]({{ usaco }}milk4.cpp): DFSID + DP validation also works.
* [USACO Big Barn]({{ usaco }}bigbrn.cpp): Find maximum square in an area with obstacles.
* [USACO Canada Tour]({{ usaco }}tour.cpp)
* [USACO Character Recognition]({{ usaco }}charrec.cpp)
* [USACO Two Five]({{ usaco }}twofive.cpp): High demension DP.
* [POJ 1837 Balance]({{ poj }}1837.cpp)
    * Given a balance and weights and loadable positions, find number of balanced configurations.
    * State: F[M][N], number of ways by which load N can be reached by first M weights.
* [POJ 1276 Cash Machine]({{ poj }}1276.cpp)
    * 0/1 Knapsack with object number limit.
    * Need binary optimization (2^0, 2^1, ..., 2^k, N-(1+...+2^k)), where k is the maximum i.e. N-(...)>=0.

# Greedy

* [USACO Mixing Milk]({{ usaco }}milk.cpp): Fraction knapsack.
* [USACO Barn Repair]({{ usaco }}barn1.cpp): Cover P points within L lines with minimum total length.
* [USACO Job Processing]({{ usaco }}job.cpp): Minimize the time of 2-phase jobs flowing through M1 phase-1 machines and M2 phase-2 machines, with different job processing times.
* [POJ 1328 Radar Installation]({{ poj }}1328.cpp): Interval coverage.
* [POJ 2586 Y2K Accounting Bug]({{ poj }}2586.cpp)

# Graph

* Shortest Path
    * Bellman-Ford
    * Dijkstra
    * Floyd
    * SPFA
    * [USACO Bessie Come Home]({{ usaco }}comehome.cpp)
    * [USACO Cow Tours]({{ usaco }}cowtour.cpp)
    * [USACO Sweet Butter]({{ usaco }}butter.cpp)
    * [USACO Camelot]({{ usaco }}camelot.cpp)
        * Modified BFS (SPFA), for each knight calculate minimum cost to all grids with or w/o king.
    * [USACO Fence Loops]({{ usaco }}fence6.cpp)
        * Find smallest perimeter of a weighted graph.
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
        * [USACO Agri-Net]({{ usaco }}agrinet.cpp)
        * [USACO Drainage Ditches]({{ usaco }}ditch.cpp)
        * [USACO Pollutant Control]({{ usaco }}milk6.cpp): Find minimum cut with minimum number of edges.
        * [USACO TeleCowmunication]({{ usaco }}telecow.cpp): Minimum point cut.
        * [POJ 1459 Power Network]({{ poj }}1459.cpp)
            * Given power plants, consumers and dispatchers, find maximum power consumed.
            * Bare max flow. Connect plants to source and consumers to sink.
    * Maximum Matching
        * [USACO The Perfect Stall]({{ usaco }}stall4.cpp)
    * Bi-Partie Graph
        * Hungarian
        * [POJ 3041 Asteroids]({{ poj }}3041.cpp)
            * Given (x, y) points, one can eliminate a row or a col. Find minimum steps to eliminate all points.
            * Build x-y bi-partie graph with super source and sink, find minimum cut (maximum match). Graph cut means no more points.
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
    * [POJ 2109 Power of Cryptography]({{ poj }}2109.cpp): Need constant optimization. 
* Mini-Max Search
    * [USACO A Game]({{ usaco }}game1.cpp): Two players fetch numbers from two ends of a sequence for maximum sum.

* [USACO Factorials]({{ usaco }}fact4.cpp): Find rightmost non-zero digit of n!.

# Miscellaneous

* Construction
    * [USACO Sorting a Three-Valued Sequence]({{ usaco }}sort3.cpp): Construct an optimized swapping solution to sort 1, 2, 3s.
    * [POJ 3295 Tautology]({{ poj }}3295.cpp)
* Emulation
    * [USACO Your Ride is Here]({{ usaco }}ride.cpp)
    * [USACO Greedy Gift Givers]({{ usaco }}gift1.cpp)
    * [USACO Friday the Thirteenth]({{ usaco }}friday.cpp)
    * [USACO Broken Necklace]({{ usaco }}beads.cpp)
    * [USACO Milking Cows]({{ usaco }}milk2.cpp)
    * [USACO Transformations]({{ usaco }}transform.cpp)
    * [USACO Name That Number]({{ usaco }}namenum.cpp)
    * [USACO Preface Numbering]({{ usaco }}preface.cpp) Roman number.
    * [USACO The Tamworth Two]({{ usaco }}preface.cpp)
    * [USACO Fractions to Decimals]({{ usaco }}fracdec.cpp)
    * [USACO Spinning Wheels]({{ usaco }}spin.cpp)
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
    * [USACO The Tamworth Two]({{ usaco }}ttwo.cpp)
    * [USACO Ski Course Design]({{ usaco }}skidesign.cpp): There is an O(Nlog(M)) solution, where M is the range of heights.
    * [USACO Arithmetic Progressions]({{ usaco }}ariprog.cpp): Search space pruning.
    * [USACO Prime Palindromes]({{ usaco }}pprime.cpp): Find all palindrome primes between two numbers.
    * [USACO Superprime Rib]({{ usaco }}sprime.cpp): Find all numbers whose prefixes are all prime.
    * [USACO Runaround Numbers]({{ usaco }}runround.cpp)
    * [USACO Healthy Holsteins]({{ usaco }}holstein.cpp)
    * [USACO Party Lamps]({{ usaco }}lamps.cpp)
    * [USACO Zero Sum]({{ usaco }}zerosum.cpp): 24-point game.
    * [USACO Humble Numbers]({{ usaco }}humble.cpp): Given N primes, find the Kth largest product produced by them.
    * [USACO Contact]({{ usaco }}contact.cpp): Find substrings with top-K appearance.
    * [USACO Feed Ratios]({{ usaco }}ratios.cpp)
    * [POJ 1753 Flip Game]({{ poj }}1753.cpp)
    * [POJ 2965 The Pilots Brothers' Refrigerator]({{ poj }}2965.cpp): Need constant optimization.
* Divide & Conquer
    * [USACO Ordered Fractions]({{ usaco }}frac1.cpp): Print all fractions represented by 1...N. Simple enumeration worked well. (Faster solution: if n1/n2 \<= d1/d2, then n1/n2 \<= (n1+d1)/(d1+d2) <= d1/d2)
    * [USACO American Heritage]({{ usaco }}heritage.cpp): Given in-order and pre-order, print post-order
* Linked List
* Recursion

# Search

* [USACO Mother's Milk]({{ usaco }}milk3.cpp)
* [USACO The Castle]({{ usaco }}castle.cpp)
* [USACO Hamming Code]({{ usaco }}hamming.cpp)
* [USACO Controlling Companies]({{ usaco }}concom.cpp)
* [USACO Overfencing]({{ usaco }}maze1.cpp)
* [USACO Letter Game]({{ usaco }}lgame.cpp)
* [USACO Shuttle Puzzle]({{ usaco }}shuttle.cpp): Formula solution exists. See USACO analysis.
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

