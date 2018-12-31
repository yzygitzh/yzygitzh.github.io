---
layout: post
title:  "LeetCode Problem Summary"
date:   2018-11-09 19:30:00 +0800
categories: Algorithm
tags: Algorithm
---

{% assign leetcode = "https://github.com/yzygitzh/oj_solutions/tree/master/leetcode/src/" %}

# Array

* [31 Next Permutation]({{ leetcode }}31.cpp)
    * O(n) time and O(1) space.
* [34 Find First and Last Position of Element in Sorted Array]({{ leetcode }}34.cpp)
* [41 First Missing Positive]({{ leetcode }}41.cpp)
    * Put numbers in their place.
* [48 Rotate Image]({{ leetcode }}48.cpp)
* [54 Spiral Matrix]({{ leetcode }}54.cpp)
* [59 Spiral Matrix II]({{ leetcode }}59.cpp)
* [73 Set Matrix Zeros]({{ leetcode }}73.cpp)
    * O(mn) time and O(1) space.
* [169 Majority Element]({{ leetcode }}169.cpp)
    * O(n) time and O(1) space achieved by Boyer Moore Vote algorithm.
* [229 Majority Element II]({{ leetcode }}169.cpp)
    * Boyer Moore Vote can be extended to O(n) time and O(k) space in general [n/k] case.
    * Each time throw k different elements.
* [289 Game of Life]({{ leetcode }}289.cpp)
* [950 Reveal Cards In Increasing Order]({{ leetcode }}950.cpp)
* [961 N-Repeated Element in Size 2N Array]({{ leetcode }}961.cpp)
    * Boyer Moore Vote.
* [962 Maximum Width Ramp]({{ leetcode }}962.cpp)

# Backtracking

* Permutations and combinations on unique/repeating number sets
* [22 Generate Parentheses]({{ leetcode }}22.cpp)
* [37 Sudoku Solver]({{ leetcode }}37.cpp)
* [39 Combination Sum]({{ leetcode }}39.cpp)
* [40 Combination Sum II]({{ leetcode }}40.cpp)
* [46 Permutations]({{ leetcode }}46.cpp)
* [47 Permutations II]({{ leetcode }}47.cpp)
* [60 Permutation Sequence]({{ leetcode }}60.cpp)
* [77 Combinations]({{ leetcode }}77.cpp)
* [78 Subsets]({{ leetcode }}78.cpp)
* [79 Word Search]({{ leetcode }}79.cpp)
* [89 Gray Code]({{ leetcode }}89.cpp)
* [90 Subsets II]({{ leetcode }}90.cpp)
* [93 Restore IP Addresses]({{ leetcode }}93.cpp)
* [131 Palindrome Partitioning]({{ leetcode }}131.cpp)
* [211 Add and Search Word - Data structure design]({{ leetcode }}211.cpp)
* [216 Combination Sum III]({{ leetcode }}216.cpp)

# Linked List

* Special judge for `NULL` list head
* General scheme to reverse linked list
    * `before_head -> head -> end -> after_head`
    * change `next` pointer in [`head`, `end`] except `head`
    * special handling when `before_head == head` 

* [2 Add Two Numbers]({{ leetcode }}2.cpp): Add two numbers represented by linked list.
* [19 Remove Nth Node From End of List]({{ leetcode }}19.cpp)
* [23 Merge k Sorted Lists]({{ leetcode }}23.cpp)
* [24 Swap Nodes in Pairs]({{ leetcode }}24.cpp)
* [25 Reverse Nodes in k-Group]({{ leetcode }}25.cpp)
* [61 Rotate List]({{ leetcode }}61.cpp)
* [82 Remove Duplicates from Sorted List II]({{ leetcode }}82.cpp)
* [86 Partition List]({{ leetcode }}86.cpp)
* [92 Reverse Linked List II]({{ leetcode }}92.cpp)
* [109 Covert Sorted List to Binary Search Tree]({{ leetcode }}109.cpp)
* [138 Copy List with Random Pointer]({{ leetcode }}138.cpp)
    * O(1) space by making origin->new single lists.
* [142 Linked List Cycle II]({{ leetcode }}142.cpp)
    * O(n) time and O(1) space achieved by Floyd's circle finding algorithm.
* [143 Reorder List]({{ leetcode }}143.cpp): L(1)->L(2)->...->L(n-1)->L(n) => L(1)->L(n)->L(2)->L(n-1)...
    * O(n) time and O(1) space.
* [147 Insertion Sort List]({{ leetcode }}147.cpp)
* [328 Odd Even Linked List]({{ leetcode }}328.cpp)

# Hash Table

* [1 Two Sum]({{ leetcode }}1.cpp)
    * O(n) time.
* [36 Valid Sudoku]({{ leetcode }}36.cpp)
* [128 Longest Consecutive Sequence]({{ leetcode }}128.cpp)
    * Union-find also works.
* [299 Bulls and Cows]({{ leetcode }}299.cpp)
* [939 Minimum Area Rectangle]({{ leetcode }}939.cpp): Given (x, y) points, find minimum area of square constructed by four of them.
    * Hashset is faster than O(log(n)) binary search.
* [966 Vowel Spellchecker]({{ leetcode }}966.cpp)

# Two Pointers

* [3 Longest Substring Without Repeating Characters]({{ leetcode }}3.cpp)
    * O(1) space.
* [11 Container With Most Water]({{ leetcode }}11.cpp)
* [15 3Sum]({{ leetcode }}15.cpp)
* [16 3Sum Closest]({{ leetcode }}16.cpp)
* [18 4Sum]({{ leetcode }}18.cpp)
    * O(n^2) time.
* [30 Substring with Concatenation of All Words]({{ leetcode }}30.cpp)
    * O(nm) time and O(m) space, where n is length of string and m is length of word.
* [42 Trapping Rain Water]({{ leetcode }}42.cpp)
    * O(n) time and O(1) space.
    * The amount of water loadable at each point is determined by leftMax and rightMax.
* [75 Sort Colors]({{ leetcode }}75.cpp): Sort sequences consisting of 1, 2, 3.
    * One pass.
* [76 Minimum Window Substring]({{ leetcode }}76.cpp)
* [80 Remove Duplicates from Sorted Array II]({{ leetcode }}80.cpp)
* [209 Minimum Size Subarray Sum]({{ leetcode }}209.cpp)
* [287 Find the Duplicate Number]({{ leetcode }}287.cpp)
    * O(n) time and O(1) space.
* [392 Is Subsequence]({{ leetcode }}392.cpp)
    * Follow up: lots of queries.

# String

* [5 Longest Palindromic Substring]({{ leetcode }}5.cpp)
    * O(n^2) easy solution.
    * O(nlog(n)) suffix array.
* [6 ZigZag Conversion]({{ leetcode }}6.cpp)
* [8 String to Integer (atoi)]({{ leetcode }}8.cpp)
* [12 Integer to Roman]({{ leetcode }}8.cpp)
* [17 Letter Combinations of a Phone Number]({{ leetcode }}17.cpp)
* [43 Multiply Strings]({{ leetcode }}43.cpp)
* [49 Group Anagrams]({{ leetcode }}49.cpp)
* [68 Text Justification]({{ leetcode }}68.cpp)
* [151 Reverse Words in a String]({{ leetcode }}151.cpp)
* [165 Compare Version Numbers]({{ leetcode }}165.cpp)
* [227 Basic Calculator II]({{ leetcode }}227.cpp)
* [937 Reorder Log Files]({{ leetcode }}937.cpp)

# Heap

* [215 Kth Largest Element in an Array]({{ leetcode }}215.cpp)
* [295 Find Median from Data Stream]({{ leetcode }}295.cpp)
    * O(32) insertion and O(32) query by trie.
    * O(log(n)) insertion and O(1) query by maintaining small-half maxheap and large-half minheap.
* [313 Super Ugly Number]({{ leetcode }}313.cpp)
    * O(kn) time.
* [347 Top K Frequent Elements]({{ leetcode }}347.cpp)
* [355 Design Twitter]({{ leetcode }}355.cpp)
* [373 Find K Pairs with Smallest Sums]({{ leetcode }}373.cpp)

# Stack

* [71 Simplify Path]({{ leetcode }}71.cpp)
* [84 Largest Rectangle in Histogram]({{ leetcode }}84.cpp)
    * O(n) time in another DP solution, for each stick save lessThanLeft and lessThanRight. 
* [94 Binary Tree Inorder Traversal]({{ leetcode }}94.cpp)
* [103 Binary Tree Zigzag Level Order Traversal]({{ leetcode }}103.cpp)
* [144 Binary Tree Preorder Traversal]({{ leetcode }}144.cpp)
* [150 Evaluate Reverse Polish Notation]({{ leetcode }}150.cpp)
* [173 Binary Search Tree Iterator]({{ leetcode }}173.cpp)
    * Average O(1) time and O(h) memory for next() and hasNext().
* [224 Basic Calculator]({{ leetcode }}224.cpp)
* [239 Sliding Window Maximum]({{ leetcode }}239.cpp)
    * Monotonic queue, similar with 84.
    * O(nk) time using trie, where k is the length of int.
* [331 Verify Preorder Serialization of a Binary Tree]({{ leetcode }}331.cpp)
* [341 Flatten Nested List Iterator]({{ leetcode }}341.cpp)
* [388 Longest Absolute File Path]({{ leetcode }}388.cpp)
* [394 Decode String]({{ leetcode }}394.cpp)
* [946 Validate Stack Sequences]({{ leetcode }}71.cpp)
    * Rule based solution.

# Dynamic Programming

* [10 Regular Expression Matching]({{ leetcode }}10.cpp)
* [32 Longest Valid Parentheses]({{ leetcode }}32.cpp)
    * Simple scan from two ends also works.
* [44 Wildcard Matching]({{ leetcode }}44.cpp)
    * There is also an O(1) space greedy solution, greedily matches strings containing 'a-z' and '?'.
* [62 Unique Paths]({{ leetcode }}62.cpp)
* [63 Unique Paths II]({{ leetcode }}63.cpp)
* [64 Minimum Path Sum]({{ leetcode }}64.cpp)
* [72 Edit Distance]({{ leetcode }}72.cpp)
* [85 Maximal Rectangle]({{ leetcode }}85.cpp)
    * Based on Largest Rectangle in Histogram or for each point DP on maxHeight, maxLeft and maxRight.
* [87 Scramble String]({{ leetcode }}87.cpp)
* [91 Decode Ways]({{ leetcode }}91.cpp)
* [95 Unique Binary Search Trees II]({{ leetcode }}95.cpp)
* [96 Unique Binary Search Trees]({{ leetcode }}96.cpp)
    * O(n) time by Catalan number deduction: C(n) = C(n-1)
* [97 Interleaving String]({{ leetcode }}97.cpp)
* [115 Distinct Subsequences]({{ leetcode }}115.cpp)
* [120 Triangle]({{ leetcode }}120.cpp)
* [123 Best Time to Buy and Sell Stock III]({{ leetcode }}123.cpp)
    * O(n) time O(n) space by scanning from two ends, O(1) space by DFA.
* [124 Binary Tree Maximum Path Sum]({{ leetcode }}124.cpp)
* [132 Palindrome Partitioning II]({{ leetcode }}132.cpp)
    * O(n^2) time.
    * O(n) space if we use palindrome info immediately instead of saving their positions.
* [139 Word Break]({{ leetcode }}139.cpp)
    * O(nm) time, where n is string length and m is maximum word length.
* [140 Word Break II]({{ leetcode }}140.cpp)
* [152 Maximum Product Subarray]({{ leetcode }}152.cpp)
    * O(n) time.
* [174 Dungeon Game]({{ leetcode }}174.cpp)
* [188 Best Time to Buy and Sell Stock IV]({{ leetcode }}188.cpp)
    * O(n) time and O(n) space by greedy and quick selection.
* [213 House Robber II]({{ leetcode }}213.cpp)
    * O(n) time.
* [221 Maximal Square]({{ leetcode }}221.cpp)
* [264 Ugly Number II]({{ leetcode }}264.cpp)
    * O(n) time. Similar to USACO Humble Numbers.
* [279 Perfect Squares]({{ leetcode }}279.cpp)
* [300 Longest Increasing Subsequence]({{ leetcode }}300.cpp)
    * O(nlog(n)) time.
* [304 Range Sum Query 2D - Immutable]({{ leetcode }}304.cpp)
* [309 Best Time to Buy and Sell Stock with Cooldown]({{ leetcode }}309.cpp)
    * O(n) time with DFA method.
* [322 Coin Change]({{ leetcode }}322.cpp)
* [334 Increasing Triplet Subsequence]({{ leetcode }}334.cpp)
    * O(n) time and O(1) space.
* [338 Counting Bits]({{ leetcode }}338.cpp)
    * O(n) time (no O(n) * sizeof(int)).
* [343 Integer Break]({{ leetcode }}343.cpp)
    * O(log(n)) time using math. Break the number into 3's as many as possible.
* [357 Count Numbers with Unique Digits]({{ leetcode }}357.cpp)
* [368 Largest Divisible Subset]({{ leetcode }}368.cpp)
* [377 Combination Sum IV]({{ leetcode }}377.cpp)
* [940 Distinct Subsequences II]({{ leetcode }}940.cpp)
    * O(1) space: iterate on number of subsequences ended with M-th character in alphabet.
* [964 Least Operators to Express Number]({{ leetcode }}964.cpp)
    * Radix problem.

# Binary Search

* [4 Median of Two Sorted Arrays]({{ leetcode }}4.cpp)
    * Determine array B's index using array A's index.
* [29 Divide Two Integers]({{ leetcode }}29.cpp)
* [33 Search in Rotated Sorted Array]({{ leetcode }}33.cpp)
* [50 Pow(x, n)]({{ leetcode }}29.cpp)
* [74 Search a 2D Matrix]({{ leetcode }}74.cpp)
* [81 Search in Rotated Sorted Array II]({{ leetcode }}81.cpp)
    * O(n) worst time because of duplicate numbers.
* [153 Find Minimum in Rotated Sorted Array]({{ leetcode }}153.cpp)
* [154 Find Minimum in Rotated Sorted Array II]({{ leetcode }}154.cpp)
* [162 Find Peak Element]({{ leetcode }}162.cpp)
* [222 Count Complete Tree Nodes]({{ leetcode }}222.cpp)
* [228 Summary Ranges]({{ leetcode }}228.cpp)
* [230 Kth Smallest Element in a BST]({{ leetcode }}230.cpp)
* [238 Product of Array Except Self]({{ leetcode }}238.cpp)
* [240 Search a 2D Matrix II]({{ leetcode }}74.cpp)
    * O(m + n) time.
    * O(min(m, n)) time divide & conquer.
* [275 H-Index II]({{ leetcode }}275.cpp)
* [378 Kth Smallest Element in a Sorted Matrix]({{ leetcode }}378.cpp)
    * O(n) time algorithm presented in paper "Selection in X + Y and matrices with sorted rows and columns", where n is number of rows.

# Binary Search Tree

* [218 The Skyline Problem]({{ leetcode }}218.cpp)
* [220 Contains Duplicate III]({{ leetcode }}220.cpp)
    * Use set::lower_bound is sufficient.
* [938 Range Sum of BST]({{ leetcode }}938.cpp)

# Greedy

* [55 Jump Game]({{ leetcode }}55.cpp)
* [56 Merge Intervals]({{ leetcode }}56.cpp)
* [134 Gas Station]({{ leetcode }}134.cpp)
* [135 Candy]({{ leetcode }}135.cpp)
    * O(n) time and O(1) space.
* [376 Wiggle Subsequence]({{ leetcode }}56.cpp)
* [945 Minimum Increment to Make Array Unique]({{ leetcode }}945.cpp)
* [948 Bag of Tokens]({{ leetcode }}948.cpp)
* [968 Binary Tree Cameras]({{ leetcode }}968.cpp)
    * Tree (special graph) covering can be solved by greedy algorithm.

# Math

* [7 Reverse Integer]({{ leetcode }}7.cpp)
* [9 Palindrome Number]({{ leetcode }}9.cpp)
* [149 Max Points on a Line]({{ leetcode }}149.cpp)
    * O(n^2) time. For each point, sort other points into buckets according to their slopes.
* [166 Fraction to Recurring Decimal]({{ leetcode }}166.cpp)
    * Be careful with overflow.
* [223 Rectangle Area]({{ leetcode }}223.cpp)
* [233 Number of Digit One]({{ leetcode }}233.cpp)
* [319 Bulb Switcher]({{ leetcode }}319.cpp)
    * Count divisor numbers.
* [372 Super Pow]({{ leetcode }}372.cpp)
    * Use Chinese remainder theorem because 1337 = 7 * 191?
* [382 Linked List Random Node]({{ leetcode }}382.cpp)
    * Reservior Sampling
* [384 Shuffle an Array]({{ leetcode }}384.cpp)
    * Fisher-Yates Algorithm
* [390 Elimination Game]({{ leetcode }}390.cpp)
* [396 Rotate Functoin]({{ leetcode }}396.cpp)
* [949 Largest Time for Given Digits]({{ leetcode }}949.cpp)
* [963 Minimum Area Rectangle II]({{ leetcode }}963.cpp)

# Divide and Conquer

* [241 Different Ways to Add Parentheses]({{ leetcode }}241.cpp)

# Union-Find

* [947 Most Stones Removed with Same Row or Column]({{ leetcode }}947.cpp)
* [952 Largest Component Size by Common Factor]({{ leetcode }}952.cpp)
    * O(N*sqrt(W)) time, where W is the maximum value in input array.

# Minimax

* [375 Guess Number Higher or Lower II]({{ leetcode }}375.cpp)
    * Follow up: expected loss instead of worst loss. Use probability to multiply worst cost in DP?

# Tree

* [98 Validate Binary Search Tree]({{ leetcode }}98.cpp)
* [99 Recover Binary Search Tree]({{ leetcode }}99.cpp)
    * Morris Traversal.
* [102 Binary Tree Level Order Traversal]({{ leetcode }}102.cpp)
* [105 Construct Binary Tree from Preorder and Inorder Traversal]({{ leetcode }}105.cpp)
* [106 Construct Binary Tree from Inorder and Postorder Traversal]({{ leetcode }}106.cpp)
* [113 Path Sum II]({{ leetcode }}113.cpp)
* [114 Flatten Binary Tree to Linked List]({{ leetcode }}114.cpp)
* [116 Populating Next Right Pointers in Each Node]({{ leetcode }}116.cpp)
* [117 Populating Next Right Pointers in Each Node II]({{ leetcode }}117.cpp)
* [129 Sum Root to Leaf Numbers]({{ leetcode }}129.cpp)
* [145 Binary Tree Postorder Treversal]({{ leetcode }}199.cpp)
    * Morris Traversal. Reverse of left-right mirrored pre-order is post-order.
* [199 Binary Tree Right Side View]({{ leetcode }}199.cpp)
* [236 Lowest Common Ancestor of a Binary Tree]({{ leetcode }}236.cpp)
* [297 Serialize and Deserialize Binary Tree]({{ leetcode }}297.cpp)
* [337 House Robber III]({{ leetcode }}337.cpp)
* [951 Flip Equivalent Binary Trees]({{ leetcode }}951.cpp)
* [965 Univalued Binary Tree]({{ leetcode }}965.cpp)

# Sort

* [57 Insert Interval]({{ leetcode }}57.cpp)
    * O(n) time by direct insert.
* [148 Sort List]({{ leetcode }}148.cpp)
* [274 H-Index]({{ leetcode }}274.cpp)

# Bit Manipulation

* [136 Single Number]({{ leetcode }}136.cpp)
* [137 Single Number II]({{ leetcode }}137.cpp)
    * In such a problem, use bit DFA to substitude XOR operation. Such bit DFA should become 0 if 1 is met M times, where M is the occurence time of most elements.
* [187 Repeated DNA Sequences]({{ leetcode }}187.cpp)
* [201 Bitwise AND of Numbers Range]({{ leetcode }}201.cpp)
* [260 Single Number III]({{ leetcode }}260.cpp)
    * Divide numbers into two parts.
* [318 Maximum Product of Word Lengths]({{ leetcode }}318.cpp)
* [393 UTF-8 Validation]({{ leetcode }}393.cpp)
* [397 Integer Replacement]({{ leetcode }}397.cpp)

# Search

* [45 Jump Game II]({{ leetcode }}45.cpp)
* [51 N-Queens]({{ leetcode }}51.cpp)
* [52 N-Queens II]({{ leetcode }}52.cpp)
* [127 Word Ladder]({{ leetcode }}127.cpp)
* [130 Surrounded Regions]({{ leetcode }}130.cpp)
* [133 Clone Graph]({{ leetcode }}133.cpp)
* [200 Number of Islands]({{ leetcode }}200.cpp)
* [207 Course Schedule]({{ leetcode }}207.cpp)
* [210 Course Schedule II]({{ leetcode }}210.cpp)
* [332 Reconstruct Itinerary]({{ leetcode }}332.cpp)
    * O(n) time since the problem is finding Eularian path.
* [386 Lexicographical Numbers]({{ leetcode }}386.cpp)
* [967 Numbers With Same Consecutive Differences]({{ leetcode }}967.cpp)

# Graph

* [399 Evaluate Division]({{ leetcode }}399.cpp)

# Trie

* [164 Maximum Gap]({{ leetcode }}164.cpp)
    * O(n) time.
* [208 Implement Trie (Prefix Tree)]({{ leetcode }}208.cpp)
* [212 Word Search II]({{ leetcode }}212.cpp)

# Design

* [146 LRU Cache]({{ leetcode }}146.cpp)
* [284 Peeking Iterator]({{ leetcode }}284.cpp)
    * Cache next element.
* [380 Insert Delete GetRandom O(1)]({{ leetcode }}380.cpp)

# Segment Tree & Binary Index Tree

* [307 Range Sum Query - Mutable]({{ leetcode }}307.cpp)

