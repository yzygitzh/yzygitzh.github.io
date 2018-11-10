---
layout: post
title:  "Algorithm Contest Problem Summary"
date:   2018-11-09 19:30:00 +0800
categories: Algorithm
tags: Algorithm
---

{% assign usaco = "https://github.com/yzygitzh/oj_solutions/tree/master/usaco/src/" %}

# Advanced Algorithms

# Advanced Data Structures

* Suffix Array
    * [USACO Music Theme]({{ usaco }}theme.cpp): There is also a DP solution. See USACO analysis.

# Computational Geometry

* Lattice Point
    * [USACO Electric Fence]({{ usaco }}fence9.cpp)

* Convex Hull
    * Graham Scan
    * [USACO Fencing the Cows]({{ usaco }}fc.cpp)

* Rectangle
    * [USACO Window Area]({{ usaco }}window.cpp): Rectangle overlapping algorithm (floating-up).

# Dynamic Programming

* [USACO Number Triangles]({{ usaco }}numtri.cpp): Find maximum sum from root to leaf in a tree.
* [USACO Subset Sums]({{ usaco }}bigbrn.cpp): Find number of possible subsets adding to a number.
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

# Greedy

* [USACO Mixing Milk]({{ usaco }}milk.cpp): Fraction knapsack.
* [USACO Barn Repair]({{ usaco }}barn1.cpp): Cover P points within L lines with minimum total length.
* [USACO Job Processing]({{ usaco }}job.cpp): Minimize the time of 2-phase jobs flowing through M1 phase-1 machines and M2 phase-2 machines, with different job processing times.

# Graph

* Shortest Path
    * Dijkstra
    * Floyd
    * [USACO Bessie Come Home]({{ usaco }}comehome.cpp)
    * [USACO Cow Tours]({{ usaco }}cowtour.cpp)
    * [USACO Sweet Butter]({{ usaco }}butter.cpp)
    * [USACO Camelot]({{ usaco }}camelot.cpp): Modified BFS. Nice sub-problem definition in USACO analysis!
    * [USACO Fence Loops]({{ usaco }}fence6.cpp): Find smallest perimeter of a weighted graph.

* Eularian Path
    * Fleury
    * [USACO Riding the Fences]({{ usaco }}fence.cpp)

* Minimum Spanning Tree
    * Prim
    * Kruskal
    * [USACO Agri-Net]({{ usaco }}agrinet.cpp)

* Network Flow
    * Max-Flow
        * Edmond-Karp
        * [USACO Drainage Ditches]({{ usaco }}ditch.cpp)
        * [USACO Pollutant Control]({{ usaco }}milk6.cpp): Find minimum cut with minimum number of edges.
    * Maximum Matching
        * [USACO The Perfect Stall]({{ usaco }}stall4.cpp)

* Flood Filling
    * [USACO Street Race]({{ usaco }}race3.cpp)

# Math

* Mini-Max Search
    * [USACO A Game]({{ usaco }}game1.cpp): Two players fetch numbers from two ends of a sequence for maximum sum.

* [USACO Factorials]({{ usaco }}fact4.cpp): Find rightmost non-zero digit of n!.

# Miscellaneous

* Construction
    * [USACO Sorting a Three-Valued Sequence]({{ usaco }}sort3.cpp): Construct an optimized swapping solution to sort 1, 2, 3s.
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
* Enumeration
    * [USACO Palindromic Squares]({{ usaco }}palsquare.cpp)
    * [USACO Dual Palindromes]({{ usaco }}dualpal.cpp)
    * [USACO Prime Cryptarithm]({{ usaco }}crypt1.cpp)
    * [USACO Combination Lock]({{ usaco }}combo.cpp)
    * [USACO Wormholes]({{ usaco }}wormhole.cpp)
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
* Divide & Conquer
    * [USACO Ordered Fractions]({{ usaco }}frac1.cpp): Print all fractions represented by 1...N. Simple enumeration worked well. (Faster solution: if n1/n2 <= d1/d2, then n1/n2 <= (n1+d1)/(d1+d2) <= d1/d2)
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

