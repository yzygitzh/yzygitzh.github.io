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
* [39 Combination Sum]({{ leetcode }}39.cpp)
* [40 Combination Sum II]({{ leetcode }}40.cpp)
* [48 Rotate Image]({{ leetcode }}48.cpp)
* [54 Spiral Matrix]({{ leetcode }}54.cpp)
* [59 Spiral Matrix II]({{ leetcode }}59.cpp)

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
    * O(1) space.
* [142 Linked List Cycle II]({{ leetcode }}142.cpp): There is a circle in a single linked list. Find the start of it.
    * O(1) space.
* [143 Reorder List]({{ leetcode }}143.cpp): L(1)->L(2)->...->L(n-1)->L(n) => L(1)->L(n)->L(2)->L(n-1)...
    * O(n) time and O(1) space.
* [147 Insertion Sort List]({{ leetcode }}147.cpp)
* [148 Sort List]({{ leetcode }}148.cpp)
* [328 Odd Even Linked List]({{ leetcode }}328.cpp)

# Hash Table

* [939 Minimum Area Rectangle]({{ leetcode }}939.cpp): Given (x, y) points, find minimum area of square constructed by four of them.
    * Hashset is faster than O(log(n)) binary search.

# Two Pointers

* [1 2Sum]({{ leetcode }}1.cpp)
    * O(n) time.
* [3 Longest Substring Without Repeating Characters]({{ leetcode }}3.cpp)
    * O(1) space.
* [11 Container With Most Water]({{ leetcode }}11.cpp)
* [15 3Sum]({{ leetcode }}15.cpp)
* [16 3Sum Closest]({{ leetcode }}16.cpp)
* [18 4Sum]({{ leetcode }}18.cpp)
    * O(n^2) time.
* [75 Sort Colors]({{ leetcode }}75.cpp): Sort sequences consisting of 1, 2, 3.
    * One pass.
* [80 Remove Duplicates from Sorted Array II]({{ leetcode }}80.cpp)
* [209 Minimum Size Subarray Sum]({{ leetcode }}209.cpp)
* [287 Find the Duplicate Number]({{ leetcode }}287.cpp)
    * O(n) time and O(1) space.
* [30 Substring with Concatenation of All Words]({{ leetcode }}30.cpp)
    * O(nm) time and O(m) space, where n is length of string and m is length of word.
* [392 Is Subsequence]({{ leetcode }}392.cpp)
    * Follow up: lots of queries.

# String

* [5 Longest Palindromic Substring]({{ leetcode }}5.cpp)
    * O(n^2) easy solution.
    * O(n(logn)) suffix array.
* [6 ZigZag Conversion]({{ leetcode }}6.cpp)
* [8 String to Integer (atoi)]({{ leetcode }}8.cpp)
* [12 Integer to Roman]({{ leetcode }}8.cpp)
* [17 Letter Combinations of a Phone Number]({{ leetcode }}17.cpp)
* [22 Generate Parentheses]({{ leetcode }}22.cpp)
* [43 Multiply Strings]({{ leetcode }}43.cpp)
* [49 Group Anagrams]({{ leetcode }}49.cpp)
* [937 Reorder Log Files]({{ leetcode }}937.cpp): Custom string sort.

# Heap

* [215 Kth Largest Element in an Array]({{ leetcode }}215.cpp)

# Stack

* [71 Simplify Path]({{ leetcode }}71.cpp)
* [946 Validate Stack Sequences]({{ leetcode }}71.cpp)
    * Rule based solution.

# Dynamic Programming

* [10 Regular Expression Matching]({{ leetcode }}10.cpp)
* [62 Unique Paths]({{ leetcode }}62.cpp)
* [63 Unique Paths II]({{ leetcode }}63.cpp)
* [64 Minimum Path Sum]({{ leetcode }}64.cpp)
* [300 Longest Increasing Subsequence]({{ leetcode }}300.cpp)
    * O(n(logn)) time.
* [940 Distinct Subsequences II]({{ leetcode }}940.cpp): Find number of distinct subsequences.
    * O(1) space: iterate on number of subsequences ended with M-th character in alphabet.

# Binary Search

* [29 Divide Two Integers]({{ leetcode }}29.cpp)
* [33 Search in Rotated Sorted Array]({{ leetcode }}33.cpp)
* [50 Pow(x, n)]({{ leetcode }}29.cpp)
* [74 Search a 2D Matrix]({{ leetcode }}74.cpp)
* [81 Search in Rotated Sorted Array II]({{ leetcode }}81.cpp)
    * O(n) worst time because of duplicate numbers.
* [153 Find Minimum in Rotated Sorted Array]({{ leetcode }}153.cpp)
* [153 Find Peak Element]({{ leetcode }}153.cpp)
* [222 Count Complete Tree Nodes]({{ leetcode }}222.cpp)
* [230 Kth Smallest Element in a BST]({{ leetcode }}230.cpp)
* [240 Search a 2D Matrix II]({{ leetcode }}74.cpp)
    * O(m + n) time.
    * O(min(m, n)) time divide & conquer.
* [275 H-Index II]({{ leetcode }}275.cpp)
* [378 Kth Smallest Element in a Sorted Matrix]({{ leetcode }}378.cpp)
    * O(n) time algorithm presented in paper "Selection in X + Y and matrices with sorted rows and columns", where n is number of rows.

# Binary Search Tree

* [938 Range Sum of BST]({{ leetcode }}938.cpp): Find sum of nodes in a BST between two numbers.

# Greedy

* [55 Jump Game]({{ leetcode }}55.cpp)
* [56 Merge Intervals]({{ leetcode }}56.cpp)
* [945 Minimum Increment to Make Array Unique]({{ leetcode }}945.cpp)
* [948 Bag of Tokens]({{ leetcode }}948.cpp)

# Math

* [7 Reverse Integer]({{ leetcode }}7.cpp)
* [9 Palindrome Number]({{ leetcode }}9.cpp)

# Divide and Conquer

* [241 Different Ways to Add Parentheses]({{ leetcode }}241.cpp)

# Union-Find

* [947 Most Stones Removed with Same Row or Column]({{ leetcode }}947.cpp)
