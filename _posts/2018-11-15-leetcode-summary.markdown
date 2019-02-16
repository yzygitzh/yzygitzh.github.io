---
layout: post
title:  "LeetCode Problem Summary"
date:   2018-11-09 19:30:00 +0800
categories: Algorithm
tags: Algorithm
---

{% assign leetcode = "https://github.com/yzygitzh/oj_solutions/tree/master/leetcode/src/" %}

# Array

Prefix-sum can solve many subarray related problems.

* [41 First Missing Positive]({{ leetcode }}41.cpp)
    * O(n) time and O(1) space, put i in i-th place.
* [48 Rotate Image]({{ leetcode }}48.cpp)
    * Rotate a matrix in place. Union-pilling.
* [54 Spiral Matrix]({{ leetcode }}54.cpp)
    * Return matrix elements in spiral order.
* [59 Spiral Matrix II]({{ leetcode }}59.cpp)
    * Fill matrix in spiral order.
* [73 Set Matrix Zeros]({{ leetcode }}73.cpp)
    * Given a matrix, if there is a zero, it's row and column are set to zero.
    * O(mn) time and O(1) space. Save tainted rows/cols in 0 row/col, and record whether 0 row/col is cleared.
* [163 Missing Ranges]({{ leetcode }}163.cpp)
    * Given a number array, return missing ranges.
    * Mind overflow.
* [169 Majority Element]({{ leetcode }}169.cpp)
    * O(n) time and O(1) space achieved by Boyer Moore Vote algorithm.
* [228 Summary Ranges]({{ leetcode }}228.cpp)
    * Given a sorted number array, convert them into intervals.
* [229 Majority Element II]({{ leetcode }}169.cpp)
    * Boyer Moore Vote can be extended to O(n) time and O(k) space in general [n/k] case.
    * Each time throw k different elements.
* [238 Product of Array Except Self]({{ leetcode }}238.cpp)
    * Given an array, for each element compute array product except itself.
    * O(n) time and O(1) space by prefix product.
* [245 Shortest Word Distance III]({{ leetcode }}245.cpp)
    * Given word list and two words, find minimum distance of their indices.
    * O(n) time and O(1) space, simple scan through.
* [289 Game of Life]({{ leetcode }}289.cpp)
    * Emulate a game of life grid.
* [311 Sparse Matrix Multiplication]({{ leetcode }}311.cpp)
    * Given two sparse matrices, multiply them.
    * O(mne) time where m and n is the result matrix's dimensions and e is related to sparsity. Convert rows and columns into (number, index) pairs and multiply them.
* [419 Battleships in a Board]({{ leetcode }}419.cpp)
    * A battleship in a grid is XXXX sequence horizontal or vertical. Any two battleships won't intersect. Count them.
    * O(n) time (one pass) and O(1) space. Find battleship's left-up heads.
* [442 Find All Duplicates in an Array]({{ leetcode }}442.cpp)
    * Given a number array with length n and elements from 1 to n, some elements appear exactly twice while others exactly once.
    * O(n) time and O(1) space, put numbers in their place, and find mismatched ones.
* [487 Max Consecutive Ones II]({{ leetcode }}487.cpp)
    * Given 01 string, one can turn a 0 to 1. Find maximum consecutive 1 string.
    * O(n) time and O(1) space, scan through 1 strings and try to connect 0-connecte ones.
* [498 Diagonal Traverse]({{ leetcode }}498.cpp)
    * Walk matrix (0,0), (0,1), (1,0), (2,0), (1,1), (0,2), ...
* [950 Reveal Cards In Increasing Order]({{ leetcode }}950.cpp)
* [961 N-Repeated Element in Size 2N Array]({{ leetcode }}961.cpp)
    * Boyer Moore Vote.
* [962 Maximum Width Ramp]({{ leetcode }}962.cpp)
    * Given a number array, find maximum i, j i.e. A[i] <= A[j] and i < j.
    * O(nlog(n)), prefix-min.
* [985 Sum of Even Numbers After Queries]({{ leetcode }}985.cpp)
    * Keep track of even numbers only.
* [989 Add to Array-Form of Integer]({{ leetcode }}989.cpp)
    * Add two array-form integers.

# Backtracking

General framework for combaination problems:

        1. add result
        2. for element in set
        3.     patch result
        4.     dfs()
        5.     unpatch result

* [22 Generate Parentheses]({{ leetcode }}22.cpp)
    * Patch result only when valid parentheses sequence.
* [37 Sudoku Solver]({{ leetcode }}37.cpp)
    * Patch result only when valid sudoku.
* [39 Combination Sum]({{ leetcode }}39.cpp)
    * Numbers w/o duplicate. DFS monoly on set.
* [40 Combination Sum II]({{ leetcode }}40.cpp)
    * Numbers with duplicate. DFS monoly on sorted set, and skip duplicates before patching.
* [46 Permutations]({{ leetcode }}46.cpp)
    * Numbers w/o duplicate. At each level try all numbers.
* [47 Permutations II]({{ leetcode }}47.cpp)
    * Numbers with duplicate. DFS on sorted set, and skip duplicates.
* [60 Permutation Sequence]({{ leetcode }}60.cpp)
    * Generate k-th permutation of 1...n.
    * O(n^2) time, enumerate digits from the most siginificant position.
    * O(nlog(n)) time if using BST or BIT to support log(n) looking up and updating for i-th digit.
* [77 Combinations]({{ leetcode }}77.cpp)
    * Numbers w/o duplicate, generate (n, k) results. DFS monoly on sorted set.
* [78 Subsets]({{ leetcode }}78.cpp)
    * Numbers w/o duplicate. DFS monoly on sorted set and add to result at each level.
* [79 Word Search]({{ leetcode }}79.cpp)
    * Given a letter grid, search for target word's path. Brute-force DFS.
* [89 Gray Code]({{ leetcode }}89.cpp)
    * Gray code encodes 1 to n with 1 to n but each adjacent pair differs only in 1 bit.
    * Note that the gray codes can be divided into parts with most significants 1 or 0.
* [90 Subsets II]({{ leetcode }}90.cpp)
    * Numbers with duplicate, generate (n, k) results. Solutions must not duplicate. Skip duplicates before patching.
* [93 Restore IP Addresses]({{ leetcode }}93.cpp)
    * Given a digit string, split it into valid IP.
* [131 Palindrome Partitioning]({{ leetcode }}131.cpp)
    * Given a string, return all palindrome partitions. Test whether palindrome before DFS. 
* [216 Combination Sum III]({{ leetcode }}216.cpp)
    * Numbers in 1-9 and exactly k numbers, w/o duplicate. DFS monoly, and return when there is not enough numbers.
* [254 Factor Combinations]({{ leetcode }}254.cpp)
    * Given a number, generate all factor decompositions of it. First generate all factors and DFS on them. Can use \"Humble Number\" alike method to accelerate it.
* [267 Palindrome Permutation II]({{ leetcode }}267.cpp)
    * Given a string, generate all its permutaions that are palindrome. Simple letter count.
* [291 Word Pattern II]({{ leetcode }}291.cpp)
    * Given a pattern string like "abab" and a target string like "xxyyxxyy", find if there is a bijection between pattern string's single characters and target string's non-empty segments.
    * Enumerate possible segments for each character and memo enumerated results.
* [306 Additive Number]({{ leetcode }}306.cpp)
    * Given a string, find whether it can be parsed as a fibonacci sequence.
    * Enumerate start state and validate following states.
* [320 Generalized Abbreviation]({{ leetcode }}320.cpp)
    * Given a word, generate its generalized abbreviations, e.g., "word": "w1rd", "w2d", "3w", "4", etc.
    * DP or bit manipulation also work.
* [351 Android Unlock Patterns]({{ leetcode }}351.cpp)
    * Calculate number of k-length Android unlock patterns.
    * DFS, reuse symmetric cases.

# Linked List

* General scheme to reverse linked list
    * before = nullptr
    * oldHead = head, head = head-\>next, oldHead-\>next = before, before = oldHead
    * need update result when before == nullptr

* [2 Add Two Numbers]({{ leetcode }}2.cpp)
    * Add two numbers represented by linked list.
* [19 Remove Nth Node From End of List]({{ leetcode }}19.cpp)
    * O(n) time and O(1) space in one pass: two pointers, the distance between which is N.
* [23 Merge k Sorted Lists]({{ leetcode }}23.cpp)
    * O(nlog(k)) using heap.
    * O(nlog(k)) time (from merge tree) and O(1) space using merge sort.
* [24 Swap Nodes in Pairs]({{ leetcode }}24.cpp)
    * before-\>p1-\>p2-\>head.
* [25 Reverse Nodes in k-Group]({{ leetcode }}25.cpp)
    * Similar to swap nodes in pairs, but do reverse instead of swap.
* [61 Rotate List]({{ leetcode }}61.cpp)
* [82 Remove Duplicates from Sorted List II]({{ leetcode }}82.cpp)
* [86 Partition List]({{ leetcode }}86.cpp)
    * Partition linked list nodes by value with threshold K.
* [92 Reverse Linked List II]({{ leetcode }}92.cpp)
    * Given a linked list, reverse m-th to n-th nodes.
* [109 Covert Sorted List to Binary Search Tree]({{ leetcode }}109.cpp)
    * Converted a sorted linked list into a balanced BST.
* [138 Copy List with Random Pointer]({{ leetcode }}138.cpp)
    * O(1) space by making origin-\>new single lists.
* [142 Linked List Cycle II]({{ leetcode }}142.cpp)
    * O(n) time and O(1) space achieved by Floyd's circle finding algorithm.
* [143 Reorder List]({{ leetcode }}143.cpp)
    * L(1)-\>L(2)->...-\>L(n-1)-\>L(n) => L(1)-\>L(n)-\>L(2)-\>L(n-1)...
    * O(n) time and O(1) space. Reverse the second half and merge.
* [147 Insertion Sort List]({{ leetcode }}147.cpp)
* [328 Odd Even Linked List]({{ leetcode }}328.cpp)
    * L(1)-\>L(2)->...-\>L(n-1)-\>L(n) => L(1)-\>L(3)-\>...L(2)-\>L(4)...
    * O(n) time and in place. Invariant: odd-even list + origin list.
* [369 Plus One Linked List]({{ leetcode }}369.cpp)
* [430 Flatten a Multilevel Doubly Linked List]({{ leetcode }}430.cpp)
    * Preorder traversal.
* [445 Add Two Numbers II]({{ leetcode }}445.cpp)

# Hash Table

Besides being an O(1) r/w table, hash tables are often used to save preprocessed results or find matching elements.

* [1 Two Sum]({{ leetcode }}1.cpp)
    * Given a number array, find all number pairs that sum to k.
    * O(n) time.
* [18 4Sum]({{ leetcode }}18.cpp)
    * O(n^3) worst time because there might be Theta(n^3) answers.
* [36 Valid Sudoku]({{ leetcode }}36.cpp)
    * Validate a 9x9 sudoku.
    * O(81) time.
* [128 Longest Consecutive Sequence]({{ leetcode }}128.cpp)
    * Given a number array, find the maximum length of a consecutive sequence.
    * O(n) time. Union-find also works.
* [249 Group Shifted Strings]({{ leetcode }}249.cpp)
    * Given a list of strings, sort them according to shifting equivalance classes.
    * O(nk) time, where k is the maximum length of string element.
* [299 Bulls and Cows]({{ leetcode }}299.cpp)
    * 4-digit number guessing game, generate hints (correct numbers & correct places).
* [325 Maximum Size Subarray Sum Equals k]({{ leetcode }}325.cpp)
    * O(n) time. Classical prefix-sum.
* [454 4Sum II]({{ leetcode }}454.cpp)
    * Given four number arrays, count number of quadruples that sum up to zero.
    * O(n^2) time by count two sums first.
* [939 Minimum Area Rectangle]({{ leetcode }}939.cpp)
    * Given (x, y) points, find minimum area of square constructed by four of them.
    * O(n^2) time by checking point pairs as diagonal points. Find rest in hashset.
* [966 Vowel Spellchecker]({{ leetcode }}966.cpp)
    * Implement a dictionary supporting capitalization and vowel corrections.
    * Store normalized representations in a hashset.

# Two Pointers

Two pointers sometimes is an implementation of mono-stack or mono-queue. Mono here means that, under the problem's condition, the **optimal value** of left pointer is a mono function of right pointer, and vice versa.
 One needs to find out the mover changing condition, this is typically when moving more won't make things better.

* [3 Longest Substring Without Repeating Characters]({{ leetcode }}3.cpp)
    * O(n) time and O(1) space. Mono function is increasing. When there is repeat, moving is bad.
* [11 Container With Most Water]({{ leetcode }}11.cpp)
    * Given several plunks standing on an X-axis, calculate the maximum volume of bucket formed by two plunks.
    * O(n) time and O(1) space. The function is going-to-center mono.
* [15 3Sum]({{ leetcode }}15.cpp)
    * O(n^2) time. Sort then use two pointers.
* [16 3Sum Closest]({{ leetcode }}16.cpp)
    * 3Sum but return the triplet whose sum is closest to a target.
    * O(n^2) time. Sort and two pointers.
* [30 Substring with Concatenation of All Words]({{ leetcode }}30.cpp)
    * Given a string and a word (all same length) list, find all substrings that are made up of the whole word list.
    * O(nm) time and O(m) space, where n is length of string and m is length of word. Word-level two pointer, start from 0 - m-1.
    * DP is also possible. For each index, save the longest valid substring ended with it, and corresponding word usages.
* [42 Trapping Rain Water]({{ leetcode }}42.cpp)
    * Given several plunks standing on an X-axis, caculate the maximum volume of water it can trap.
    * O(n) time by mono-stack.
    * O(n) time by DP. The amount of water loadable at each point is determined by leftMax and rightMax.
    * O(1) space by two pointers from two ends. leftMax and rigthMax is going-to-center mono, thus volume is mono.
* [75 Sort Colors]({{ leetcode }}75.cpp)
    * Sort sequences consisting of 1, 2, 3.
    * O(n) time and one pass by two pointers. Not related to mono things.
* [76 Minimum Window Substring]({{ leetcode }}76.cpp)
    * Given S and T, find minimum window in S containing AT LEAST all letters in T.
    * O(n) time by two pointers.
* [80 Remove Duplicates from Sorted Array II]({{ leetcode }}80.cpp)
    * Given a sorted array, remove redundant elements such that no element appears more than 2 times.
    * O(n) time by two pointers. Not related to mono things.
* [159 Longest Substring with At Most Two Distinct Characters]({{ leetcode }}159.cpp)
    * Easy O(n) time two pointers.
* [209 Minimum Size Subarray Sum]({{ leetcode }}209.cpp)
    * O(n) time by two pointers.
    * O(nlog(n)) time by binary search the minimum size.
* [259 3Sum Smaller]({{ leetcode }}259.cpp)
    * O(n^2) time by sorting first. Similar to 3Sum Closest.
* [287 Find the Duplicate Number]({{ leetcode }}287.cpp)
    * O(n) time and O(1) space by Floyd Cycle Detection Algorithm. No mono things.
* [340 Longest Substring with At Most K Distinct Characters]({{ leetcode }}340.cpp)
    * O(n) time and O(1) space, typical sliding window.
* [424 Longest Repeating Character Replacement]({{ leetcode }}424.cpp)
    * Given a string, one can at most alter k characters. Find the maximum length of repeat character string.
    * O(n) time. Note that these k characters must be in a sliding window.
    * Use per-character queue also works.
* [457 Circular Array Loop]({{ leetcode }}457.cpp)
    * Find circles in integer array. Floyd Cycle Detection Algorithm.
    * Pitfall: only mark elements as zero when the case is confirmed invalid.
* [481 Magical String]({{ leetcode }}481.cpp)
    * Build recursive string: 1221121... -\> 1 22 11 2 1 -\> 12211...
    * Generate string according to its prefix.
* [828 Unique Letter String]({{ leetcode }}828.cpp)
    * Define UNIQ(s) is the number of unique letters in a string. Find sum of UNIQ of all substrings of S.
    * At each step, calculate UNIQ of substrings ending by that character. Maintain a character index map.
* [904 Fruit Into Baskets]({{ leetcode }}904.cpp)
    * Find longest subarray with at most 2 distinct numbers.
* [986 Interval List Intersections]({{ leetcode }}986.cpp)
    * Given two non-intersect interval lists, calculate their intersected result.
    * Merge sort. Always throw the interval with lower end and keep the rest interval.
* [992 Subarrays with K Different Integers]({{ leetcode }}992.cpp)
    * Prefix-sum-like method, Find number of subarrays with AT MOST K different integers.

# String

KMP Template.

Next array calculation is linear time because each time p itself is right shifted, and at most p.length() times. Or we can consider k. k is always >= -1, and it's increased only p.length() times. but k=next[k] always decreases k, which is at most p.length() times.

The next[i]=next[k] optimization needs no further loop. If p[i] == p[k] still holds, it conflicts with former assignments.

{% highlight cpp %}
// caculate next
i = 0, k = -1;
while (i < p.length()) {
    while (k >= 0 && p[i] == p[k]) k = next[k];
    i++, k++;
    if (i == p.length()) break;
    if (p[i] == p[k]) next[i] = next[k];
    else next[i] = k;
}
// match, nearly the same with next calculation
i = 0, k = 0;
while (i < s.length() && k < p.length()) {
    while (k >= 0 && p[i] == p[k]) k = next[k];
    i++, k++;
}
{% endhighlight %}

* [5 Longest Palindromic Substring]({{ leetcode }}5.cpp)
    * O(n^2) time easy solution.
    * O(nlog(n)) time suffix array.
* [6 ZigZag Conversion]({{ leetcode }}6.cpp)
* [8 String to Integer (atoi)]({{ leetcode }}8.cpp)
* [12 Integer to Roman]({{ leetcode }}8.cpp)
* [17 Letter Combinations of a Phone Number]({{ leetcode }}17.cpp)
* [43 Multiply Strings]({{ leetcode }}43.cpp)
* [49 Group Anagrams]({{ leetcode }}49.cpp)
    * If word A is word B's permutation, then they're anagrams of each other.
* [65 Valid Number]({{ leetcode }}65.cpp)
    * First remove space, then check invalid characters, finally sequentially try to grab sign, int, dot, frac and e-num part.
* [68 Text Justification]({{ leetcode }}68.cpp)
* [151 Reverse Words in a String]({{ leetcode }}151.cpp)
* [158 Read N Characters Given Read4 II - Call multiple times]({{ leetcode }}158.cpp)
    * Buffer reads in a queue.
* [161 One Edit Distance]({{ leetcode }}161.cpp)
* [165 Compare Version Numbers]({{ leetcode }}165.cpp)
* [214 Shortest Palindrome]({{ leetcode }}214.cpp)
    * Given a string, find minimum length of palindrome formed by adding characters in front of it.
    * KMP, match from tail using head as pattern.
* [227 Basic Calculator II]({{ leetcode }}227.cpp)
    * Evaluate expression without parentheses.
* [418 Sentence Screen Fitting]({{ leetcode }}418.cpp)
    * Similar to text justification. Need to find end-position circles.
* [459 Repeated Substring Pattern]({{ leetcode }}459.cpp)
    * Find whether a string is made up by smaller repeating units.
    * Validate whether s is in (s+s)[1:-1]. Proof done by GCD-like approach.
* [468 Validate IP Address]({{ leetcode }}418.cpp)
* [937 Reorder Log Files]({{ leetcode }}937.cpp)

# Heap

* [215 Kth Largest Element in an Array]({{ leetcode }}215.cpp)
    * O(n+klogk) time using heap sort.
    * O(nlogk) time using minimum heap.
    * Average O(n) using quick-sort-like quick-select.
    * Strict O(n) using divide & conquer.
    * O(32n) time using trie.
* [295 Find Median from Data Stream]({{ leetcode }}295.cpp)
    * O(32) insertion and O(32) query by trie.
    * O(log(n)) insertion and O(1) query by maintaining small-half maxheap and large-half minheap.
* [313 Super Ugly Number]({{ leetcode }}313.cpp)
    * O(kn) time. USACO humble number.
* [347 Top K Frequent Elements]({{ leetcode }}347.cpp)
    * O(nlog(k)) using heap.
* [355 Design Twitter]({{ leetcode }}355.cpp)
    * postTweet(userId, tweetId), getNewsFeed(userId), follow(srcId, tgtId), unfollowId(srcId, tgtId).
    * Use heap to implement getNewsFeed.
* [373 Find K Pairs with Smallest Sums]({{ leetcode }}373.cpp)
    * Given two number array, find k-th smallest pairs formed by numbers from the two arrays.
    * O(klog(k)) time by heap + BFS.
* [378 Kth Smallest Element in a Sorted Matrix]({{ leetcode }}378.cpp)
    * The matrix's rows and columns are sorted.
    * O(nlog(n)) by binary search. O(klog(k)) by heap + BFS.
    * O(n) time algorithm presented in paper "Selection in X + Y and matrices with sorted rows and columns", where n is number of rows.
* [407 Trapping Rain Water II]({{ leetcode }}407.cpp)
    * Given a grid with heights, find how much rain water it can trap.
    * O(mnlog(mn)) time, each time floodfill from lowest grid that cannot trap any water. The cannot-trap set is maintained by a heap.

# Stack

Mono stack/queue can maintain min/max in average O(1) time, get in strict O(1) time.

* [32 Longest Valid Parentheses]({{ leetcode }}32.cpp)
    * O(n) time, expand by context free grammar: \<exp\> = (\<exp\>) \| \<exp\>\<exp\> \| null
    * O(n) time, simple scan from two ends.
* [71 Simplify Path]({{ leetcode }}71.cpp)
    * Simplify a UNIX path. Use stack to handle /../../ == / cases.
* [84 Largest Rectangle in Histogram]({{ leetcode }}84.cpp)
    * Mono stack.
    * O(n) time in another DP solution, for each stick save lessThanLeft and lessThanRight. 
* [150 Evaluate Reverse Polish Notation]({{ leetcode }}150.cpp)
* [224 Basic Calculator]({{ leetcode }}224.cpp)
    * Evaluate expressoin containing parentheses and +-.
* [239 Sliding Window Maximum]({{ leetcode }}239.cpp)
    * Mono queue, similar with Largest Rectangle in Histogram.
    * O(nk) time using trie, where k is the length of int.
* [316 Remove Duplicate Letters]({{ leetcode }}316.cpp)
    * Given a sequence, remove duplicate letters to get a lexicographical smallest subsequence.
    * O(n) time using mono stack. Similar to Create Maximum Number.
* [321 Create Maximum Number]({{ leetcode }}321.cpp)
    * Given two digit arrays, create maximum k-length number using digits from them. Order is preserved.
    * O(nk) time by mono stack. Enumerate number of digits picked from the two array. Bigger digit is always better to come first, leading to mono stack solution.
* [331 Verify Preorder Serialization of a Binary Tree]({{ leetcode }}331.cpp)
    * O(n) time and space using stack.
    * O(1) space, maintain binary tree's capacity. Leaf (nullptr) decreases capcity while other decrease one then increase two. 
* [385 Mini Parser]({{ leetcode }}385.cpp)
    * Parse JSON like strings containing only numbers and lists.
* [388 Longest Absolute File Path]({{ leetcode }}388.cpp)
* [394 Decode String]({{ leetcode }}394.cpp)
    * Decode strings like "3[a2[c]]" -\> accaccacc.
* [402 Remove K Digits]({{ leetcode }}402.cpp)
    * Simplified Create Maximum Number on a single number.
* [439 Ternary Expression Parser]({{ leetcode }}439.cpp)
    * Evaluate nested ternary expression, like F?1:T?3:4 == 3.
* [946 Validate Stack Sequences]({{ leetcode }}71.cpp)
    * O(n) space by stack emulation, O(1) space reuse input.

# Dynamic Programming

aD/bD: O(n^a) states, each update consumes O(n^b) time.

1D/0D, 1D/1D (optimization to O(nlog(n))), 2D/0D, 2D/1D (parallelogram inequation), etc.

Digit DP, Tree DP, Knapsack, Binary Optimization, State DP, etc.

Note: for dense problems, search with memo is much slower (~10x) than DP.

* [10 Regular Expression Matching]({{ leetcode }}10.cpp)
    * \'.\' matches any single character, \'a\*\' matchs zero or more \'a\', \'.\*\' matches zero or more any character.
    * O(nk) time where k is pattern length and n is target length. 2D/0D.

            string s, pattern p
            F[M][N]: s[:M] matches p[:N]
            F[M][N] = (isDot(p[N]) || s[M] == p[N]) && F[M-1][N-1] ||
                      isStar(p[N]) && (F[M][N-1] || (isDot(p[N]) || s[M] == p[N]) && F[M-1][N])
            Bound: F[0][N], true for N == 0 and prefix stars.

    * O(n) time by DFA.
* [44 Wildcard Matching]({{ leetcode }}44.cpp)
    * \'?\' matches any single character, \'\*\' matches zero or more any character.
    * O(nk) time, 2D/0D.

            string s, pattern p
            F[M][N]: s[:M] matches p[:N]
            F[M][N] = (isDot(p[N]) || s[M] == p[N]) && F[M-1][N-1] ||
                      isStar(p[N]) && (F[M][N-1] || F[M-1][N])
            Bound: F[0][N], true for N == 0 and prefix stars.

    * There is also an O(n) time and O(1) space greedy solution, greedily matches strings containing \'a-z\' and \'?\' since \'\*\' can match anything.
* [53 Maximum Subarray]({{ leetcode }}53.cpp)
    * O(n) time and O(1) space.
* [62 Unique Paths]({{ leetcode }}62.cpp)
    * Going from left-up to right-down.
    * O(mn) time, classical 2D/0D. O(min(m, n)) time if calculate (m + n, n), mind overflow.
* [63 Unique Paths II]({{ leetcode }}63.cpp)
    * There will be some obstacles.
    * O(mn) time classical 2D/0D.
* [64 Minimum Path Sum]({{ leetcode }}64.cpp)
    * Going from left-up to right-down, minimize path cost.
    * O(mn) time classical 2D/0D.
* [72 Edit Distance]({{ leetcode }}72.cpp)
    * O(mn) time classical 2D/0D. Use alignment to give a proof.
            
            F[M][N]: edit distance between s1[:M] and s2[:N]
            F[M][N] = min(F[M-1][N-1], F[M][N-1] + 1, F[M-1][N])

* [85 Maximal Rectangle]({{ leetcode }}85.cpp)
    * O(mn) time, classical 2D/0D.
    * Based on Largest Rectangle in Histogram.
    * For each point DP on maxHeight, maxLeft and maxRight.

            maxL/R: maximum left/right space expandable.
            H[x][y] = H[x-1][y] + 1 if R[x][y] == 1 else 0
            L[x][y] = min(L[x-1][y], maxL[x][y])
            R[x][y] = min(R[x-1][y], maxR[x][y])

* [87 Scramble String]({{ leetcode }}87.cpp)
    * Strings can be represented by binary trees. Given two strings, determine if one can be transformed from the other one by flipping binary tree nodes.
    * O(n^4) time, each [i1, j1] can be mapped to any [i2, j2].
* [91 Decode Ways]({{ leetcode }}91.cpp)
    * A->1, B->2, ..., calculate number of ways to decode a digit string.
    * O(n) time 1D/0D.
* [95 Unique Binary Search Trees II]({{ leetcode }}95.cpp)
    * Generate all valid binary search trees containing 1 to n.
    * O(catalan\_number) time, aboue O(4^n/n^1.5) time.
* [96 Unique Binary Search Trees]({{ leetcode }}96.cpp)
    * Generate number of valid binary search trees containing 1 to n.
    * O(n^2) or O(n) time by Catalan number deduction.
    * C(n) = (2n, n) / (n + 1)
    * C(n) = (2n, n) - (2n, n + 1)
    * C(n) = C(0)C(n - 1) + C(1)C(n - 2) ... + C(n - 1)C(0)
    * C(n) = 2(2n - 1) / (n + 1) * C(n - 1)
* [97 Interleaving String]({{ leetcode }}97.cpp)
    * Given string a and b, find whether c can be formed from the interleaving of a and b.
    * O(mnk) time, 3D/0D. F[m][n][k]: c[:k] can be formed from a[:m] and b[:n]. Use memo search.
* [115 Distinct Subsequences]({{ leetcode }}115.cpp)
    * Given string a and b, find number of subsequences s of a i.e. s == b.
    * O(mn) time, 2D/0D
    
            F[m][n]: number of subsequences of a[:m] that matches b[:n].
            F[m][n] = F[m][n-1] + a[m] == b[n] ? F[m-1][n-1] : 0

* [120 Triangle]({{ leetcode }}120.cpp)
    * Given a number triangle like

              2
             3 4
            6 5 7

      Find maximum path from root to leaf.
    * O(n^2) time, 2D/0D.
* [123 Best Time to Buy and Sell Stock III]({{ leetcode }}123.cpp)
    * Complete at most two transactions.
    * O(n) time O(n) space by scanning from two ends, and for each point calculate maximum profit before/after this point.
    * O(n) time and O(1) space by DFA.

            0 -sell-> 1 -buy--> 2 -sell-> finale
            <-rest--  <-rest--  <-rest-

* [124 Binary Tree Maximum Path Sum]({{ leetcode }}124.cpp)
    * O(n) time, 1D/0D. Classical tree DP.
    * MaxPath[root] = rootVal + max(MaxPath[left], MaxPath[right]). Global max can be single/double paths.
* [132 Palindrome Partitioning II]({{ leetcode }}132.cpp)
    * Given a string, calculate minimum times of cut to cut it into palindromes.
    * O(n^2) time, classical 1D/1D.
    * O(n) space if we update answer while enumerating all palindromes.
* [139 Word Break]({{ leetcode }}139.cpp)
    * Given a dictionary and a string, judge whether the string can be cut into words from dictionary. 
    * O(nm) time, where n is string length and m is maximum word length, typical 1D/1D.
* [140 Word Break II]({{ leetcode }}140.cpp)
    * Output all possible answers in Word Break.
    * O(nm) time, 1D/1D. Use trie.
* [174 Dungeon Game]({{ leetcode }}174.cpp)
    * A maze with HP gem and Toxic area. Calculate minimum start HP.
    * O(mn) time, 2D/0D. start HP can be zero once HP gem is enough.
* [188 Best Time to Buy and Sell Stock IV]({{ leetcode }}188.cpp)
    * Complete at most k transactions.
    * O(nk) time and O(k) space if use DFA.
    * This problem is similar to "maximum K segment sum". The latter problem has an O(n+klog(n)) time solution. If there is more than K positive numbers, greedily throw minimum positive number or merge maximum negative number.
* [213 House Robber II]({{ leetcode }}213.cpp)
    * Houses in a circle, cannot rob adjacent houses. Calculate the max score.
    * O(n) time. F[M]: maximum score when robbing houses <= M. All states can be divided into two cases: i-th house not robbed or (i+1)-th house not robbed.
* [221 Maximal Square]({{ leetcode }}221.cpp)
    * O(mn) time. 2D/0D. F[M][N]: maximal square with right-down (M, N). F[M][N] = min(F[M-1][N-1]+1,F[M-1][N]+1,F[M][N-1]+1)
* [241 Different Ways to Add Parentheses]({{ leetcode }}241.cpp)
    * Given a string of numbers and operators, return all possible results by adding parentheses.
    * O(n^3) time where k is number of results, typical 2D/1D DP.
* [264 Ugly Number II]({{ leetcode }}264.cpp)
    * O(n) time. Similar to USACO Humble Numbers.
    * Make the result buffer mono, and keep a pointer pointing to the smallest result R that R\*P\>maxResult.
* [265 Paint House II]({{ leetcode }}265.cpp)
    * Given m houses in a row and n colors and a house-color cost matrix. Adjacent houses cannot be painted with the same color. Find minimum cost.
    * O(nk) time using mono queue to maintain minimum.
* [279 Perfect Squares]({{ leetcode }}279.cpp)
    * Given n, find the least number of square numbers summing to n.
    * O(n^1.5) time. Typical knapsack.
* [300 Longest Increasing Subsequence]({{ leetcode }}300.cpp)
    * O(nlog(n)) time achieved by 1D/1D update optimization, i.e. mono stack.
* [304 Range Sum Query 2D - Immutable]({{ leetcode }}304.cpp)
    * Given a matrix, query it's subregion.
    * O(n^2) time by prefix (2D) sum.
* [309 Best Time to Buy and Sell Stock with Cooldown]({{ leetcode }}309.cpp)
    * O(n) time with DFA method.
* [312 Burst Ballons]({{ leetcode }}312.cpp)
    * Burst a ballon sequence, score is nums[left]\*nums[i]\*nums[right].
    * O(n^3) 2D/1D. In order to make sub-problems well-defined, intervals should be closed. F[left][right]: points get by eliminating nums[left + 1]...nums[right - 1].
* [322 Coin Change]({{ leetcode }}322.cpp)
    * Complete knapsack, O(nk) time and O(k) space where n is number of objects and k is knapsack volume.
* [329 Longest Increasing Path in a Matrix]({{ leetcode }}329.cpp)
    * \"Ski\". O(mn) time with memo search.
* [333 Largest BST Subtree]({{ leetcode }}333.cpp)
    * Given a tree, find the BST with most nodes in it.
    * O(n) time, typical tree DP.
* [335 Self Crossing]({{ leetcode }}335.cpp)
    * A point is moving in a cartesian coordinate system with [up, left, down, right] loops. Check whether the point will head into its own trail.
    * O(n) time by summarizing the problem into three cases:

            Case A: ----    Case B: ----    Case C: ----
                    |  |            |  |            |  |
                    -->S            |  S            |  S<--
                                    |  ^            |     |
                                    |  |            -------
                                    ----

* [338 Counting Bits]({{ leetcode }}338.cpp)
    * Given n, count all 1-bit presented from 0 to n, and return them as an array.
    * O(n) time (no O(n) * sizeof(int)), count[n] = count[n - lowbit(n)], highbit is also ok.
* [343 Integer Break]({{ leetcode }}343.cpp)
    * Given a break n, break it into a1+a2+...+ak=n and maximize a1\*a2\*...\*ak.
    * O(n^2) time 1D/1D.
    * O(n) time using math. Break the number into 3's as many as possible.
* [354 Russian Doll Envelops]({{ leetcode }}354.cpp)
    * O(n^2) with straightforward DFS solution, but DFS with memo can time out.
    * O(nlog(n)), sort by ascending height and descending width, then find LIS in width. Descending width is to prevent same height solution.
* [357 Count Numbers with Unique Digits]({{ leetcode }}357.cpp)
    * Count number of numbers with unique digits between 0 and 10^n.
    * O(10n) time by knapsack. O(n) time by use combination math.
* [361 Bomb Enemy]({{ leetcode }}361.cpp)
    * Given a grid with Wall, Enemy and Zero and a killing-cross bomb, find maximum enemy can be killed.
    * O(mn) time, maximum continous length. O(n) space, walk left-right and up-down and maintain up-down memo.
* [363 Max Sum of Rectangle No Larger Than K]({{ leetcode }}363.cpp)
    * O(m^2 * nlog(n)) time using binary search in prefix sums.
* [368 Largest Divisible Subset]({{ leetcode }}368.cpp)
    * Given a number array, find largest subset S that any Si, Sj in S have Si|Sj or Sj|Si.
    * Note that such subset must be a chain that S1|S2|...|Sn. O(n^2) 1D/1D.
* [377 Combination Sum IV]({{ leetcode }}377.cpp)
    * Given a number array, find the number of combinations add up to a target. Order matters.
    * O(nk) time, 1D/1D. Enumerate sequence ends.
* [403 Frog Jump]({{ leetcode }}403.cpp)
    * Given several stones, a frog can jump k-1, k, k+1 forward if last jump is k. First jump is 1. Find whether the frog the reach the last stone.
    * O(n^2) time and space, 1D/1D, for each stone maintain its reachable jump length.
* [413 Arithmetic Slices]({{ leetcode }}413.cpp)
    * Given a number sequence, find all arithmetic subarray with length >= 3.
    * O(n) time and O(1) space, simple 1D/0D.
* [416 Partition Equal Subset Sum]({{ leetcode }}416.cpp)
    * Given a number set, partition it into equal-sum parts. 0/1 knapsack.
* [446 Arithmetic Slices II - Subsequence]({{ leetcode }}446.cpp)
    * Given a number sequence, find all arithmetic subsequences with length >= 3.
    * O(n^2) time. Find all deltas, for each delta build a DAG. Then DP on the DAG for path length >= 3.
* [464 Can I Win]({{ leetcode }}464.cpp)
    * Two players take turns take number from 0...n without re-usage. Find whether player 1 always wins.
    * O(2^n) time, state DP.
* [467 Unique Substrings in Wraparound String]({{ leetcode }}467.cpp)
    * Wraparound string is ...abcd...xyzabcd.... Given a string, find how many of its substrings appear in it.
    * O(n) time and O(26) space, for each character save maximum appeared length.
* [471 Encode String with Shortest Length]({{ leetcode }}471.cpp)
    * Find minimum encode of a string, e.g. "abbbabbbcabbbabbbc" -\> "2[2[abbb]c]".
    * O(n^3) time, typical 2D/1D. Build string by two parts or internal repeating units. The latter can be optimized by 459.
* [472 Concatenated Words]({{ leetcode }}472.cpp)
    * Given a word list, for each word judge whether it can be formed by other words.
    * DP with trie, similar with Word Break. Search is faster than DP.
* [474 Ones and Zeroes]({{ leetcode }}474.cpp)
    * Given a list like ["01","110","1","0"] and m \'0\' and n\'1\', calculate maximum number of elements constructable.
    * O(mnl) time. Classical 0-1 knapsack.
* [494 Target Sum]({{ leetcode }}494.cpp)
    * Given a number list, one can change their signs, find number of ways to sum to target.
    * O(2000n) time DP, for the sum of elements will not exceed 1000.
* [799 Champagne Tower]({{ leetcode }}799.cpp)
    * Treat rest champagne as a whole.
* [879 Profitable Schemes]({{ leetcode }}879.cpp)
    * Multi-dimension 0/1 knapsack. DP on range instead of exact number, mind boundary condition.
* [940 Distinct Subsequences II]({{ leetcode }}940.cpp)
    * Given a sequence, find number of distinct subsequences.
    * O(26n) time and O(26) space: iterate on number of subsequences ended with M-th character in alphabet.
* [964 Least Operators to Express Number]({{ leetcode }}964.cpp)
    * Given n and k, give minimum operators (+ - \* /) needed to represent k by n.
    * Radix problem.

            For any target < x^k, we can get the target or get x^k - target.
            Construct from the least significant position.
            pos = min(k * digit + pos, k * (digit + 1) + neg)
            e.g., 21 = 10 * 2 + 1 = 10 * 3 - 9 (x = 10)
            neg = min(k * (x - digit) + pos, k * (x - digit - 1) + neg)
            e.g., 79 = 10 * 8 - 1 = 10 * 7 + 9

* [968 Binary Tree Cameras]({{ leetcode }}968.cpp)
    * Given a binary tree, a camera on the node can monitor its parent, its children and itself. Find minimum number of cameras to monitor the whole tree.
    * O(n) time, typical tree DP. Three states: camera, monitored w/o camera, not monitored.
    * Tree (special graph) covering can be solved by greedy algorithm. Put cameras on leaves' parents and remove monitored nodes.
* [974 Subarray Sums Divisible by K]({{ leetcode }}974.cpp)
    * O(n) time by shifting array.
    * O(n) time by "two sum" of prefix sums. Seems many subarray problems can be done by prefix sum.
* [975 Odd Even Jump]({{ leetcode }}975.cpp)
    * Odd index jump to nearest non-less number, even index jump to nearest non-greater number. Find indices where end is reachable.
    * O(nlog(n)) time, binary search for valid index.
* [978 Longest Turbulent Subarray]({{ leetcode }}978.cpp)
    * Find length of longest subarray such that A[i]\<A[i+1]\>A[i+2]... for odd i and vice versa for even i.
* [979 Distribute Coins in Binary Tree]({{ leetcode }}979.cpp)
    * Given a tree and coins on nodes. There are in total N coins and nodes. Find minimum steps to make 1 node 1 coin.
    * Tree DP. For each node return its subtree's redundant coins.
* [982 Triples with Bitwise AND Equal To Zero]({{ leetcode }}982.cpp)
    * Given number array, find number of triples whose AND is zero. 0 <= number <= 65535.
    * O(65535n) time. Store pair AND count in an array and for each number try each number in the array.
* [983 Minimum Cost For Tickets]({{ leetcode }}983.cpp)
    * Given days for visiting and 1-day, 7-day and 30-day pass and their costs, find minimum cost to cover the days.
    * Classical 1D/1D. O(n) time because optimal day is mono increasing.
* [988 Smallest String Starting From Leaf]({{ leetcode }}988.cpp)
    * Given a binary tree, each node has a character, find smallest string from leaf to root.
    * Tree DP.

# Binary Search

Binary search can be used to optimize DP updating process.

Binary search on answer is a useful technique.

* [4 Median of Two Sorted Arrays]({{ leetcode }}4.cpp)
    * O(log(min(m, n))) time. Determine array B's index using array A's index.
* [33 Search in Rotated Sorted Array]({{ leetcode }}33.cpp)
    * No duplicate, four cases: \<\<, \<\>, \>\<, and \>\> (not possible).
* [34 Find First and Last Position of Element in Sorted Array]({{ leetcode }}34.cpp)
* [50 Pow(x, n)]({{ leetcode }}29.cpp)
* [74 Search a 2D Matrix]({{ leetcode }}74.cpp)
    * The matrix is a sorted array if rows are concatenated.
* [81 Search in Rotated Sorted Array II]({{ leetcode }}81.cpp)
    * With duplicate, O(n) worst time.
    * Nine cases combined by \<, = and \>. \>\> is not possible and == is unknown.
* [153 Find Minimum in Rotated Sorted Array]({{ leetcode }}153.cpp)
* [154 Find Minimum in Rotated Sorted Array II]({{ leetcode }}154.cpp)
* [162 Find Peak Element]({{ leetcode }}162.cpp)
    * Peak element is greater than its neighbors. nums[i] != nums[i + 1]. nums[-1] = nums[n] = -inf.
    * Invariant: search interval's two ends are always lower ones.
* [222 Count Complete Tree Nodes]({{ leetcode }}222.cpp)
    * Binary search on leaf positions according to depth.
* [240 Search a 2D Matrix II]({{ leetcode }}74.cpp)
    * The matrix's rows and columns are sorted.
    * O(m + n) time, walk from right-up.
    * O(min(m, n)) time divide & conquer.
* [275 H-Index II]({{ leetcode }}275.cpp)
    * Given citations sorted in ascending order, find H-index.
* [302 Smallest Rectangle Enclosing Black Pixels]({{ leetcode }}302.cpp)
    * O(mlog(n)) time by binary search. Project black pixels onto x and y dimensions, and search the bound.
* [327 Count of Range Sum]({{ leetcode }}327.cpp)
    * Given a number array, count different range sums.
    * O(nlog(n)) time by using balanced BST-alike data structure. Trie is also ok.
    * By introducing prefix sums, this is a typical 1D/1D DP problem whose updating process can be optimized.
* [410 Split Array Largest Sum]({{ leetcode }}410.cpp)
    * Given a number array, split it into m subarrays, find the minimum of the maximum of subarray sum.
    * O(n\*sumofarray) time, binary search on answer.
    * O(nmlog(n)) time, 2D/1D DP, updating process optimized with binary search.
* [436 Find Right Interval]({{ leetcode }}436.cpp)
    * Given intervals, for each interval find smallset one who is at the right of it.
    * O(nlog(n)) time, use set's lower\_bound.

# Binary Search Tree

* [218 The Skyline Problem]({{ leetcode }}218.cpp)
    * O(nlog(n)) time using line sweeping and map.
* [220 Contains Duplicate III]({{ leetcode }}220.cpp)
    * Given a number array, find if there are two elements nums[i] and nums[j] i.e. abs(i-j)<=k and (nums[i]-nums[j])<=t.
    * Use set::lower\_bound. Enumerate window at size K.
* [230 Kth Smallest Element in a BST]({{ leetcode }}230.cpp)
    * Save count in node to keep log(n) query time.
* [352 Data Stream as Disjoint Intervals]({{ leetcode }}352.cpp)
    * Given number stream, merge them into intervals.
* [450 Delete Node in a BST]({{ leetcode }}450.cpp)
* [480 Sliding Window Median]({{ leetcode }}480.cpp)
    * Use cpp multiset.
* [938 Range Sum of BST]({{ leetcode }}938.cpp)

# Greedy

Two kinds of greedy policy: proovable by swapping or proovable by math induction.

* [45 Jump Game II]({{ leetcode }}45.cpp)
    * Given an array with max jumping distance at each place. Caculate minimum step to the end.
    * O(n) time by greedy. Note that the minimum step to each index is mono increasing. Update jump number at each interval's end. Intervals can be updated greedily.
* [55 Jump Game]({{ leetcode }}55.cpp)
    * Given an array with max jumping distance at each place. Judge whether the end is reachable.
    * O(n) time by greedy.
* [56 Merge Intervals]({{ leetcode }}56.cpp)
    * O(nlog(n)) time, sort by start position and merge.
* [134 Gas Station]({{ leetcode }}134.cpp)
    * Given gas stations distributed on a circle, calculate whether one can travel around the circle once clockwise. Each gas station has limited gas volume.
    * O(n) time by greedy. Note that if SUM(cost) <= SUM(gas), there is always a solution, otherwise the circle can be divided into multiple parts where SUM(cost_part) > SUM(gas_part), contradiction. Then go around the circle and find the maximum point as start.
* [135 Candy]({{ leetcode }}135.cpp)
    * Children in a line, each with a rating value. Higher rate has more candy than neighbors. Calculate minimum candy.
    * O(n) time and O(1) space by greedy. Find all mountains, mountain feets are all ones and mountain tops depends to the longer side.
* [152 Maximum Product Subarray]({{ leetcode }}152.cpp)
    * O(n) time. Seperate the array by 0, and try positive greedily.
* [253 Meeting Rooms II]({{ leetcode }}253.cpp)
    * Given some meeting times, find out minimum number of meeting rooms required.
    * O(nlog(n)) time by sorting and line sweeping. If the time range is not big, O(n) time is possible by prefix sum.
* [330 Patching Array]({{ leetcode }}330.cpp)
    * Given a sorted positive array, return minimum number of numbers needed to make any number in [1, n] is representable by sum of array numbers.
    * If \[0, n) is filled, then \[0, n + m) can be filled for any m <= n. Greedily choose m == n when there is no number from array.
* [334 Increasing Triplet Subsequence]({{ leetcode }}334.cpp)
    * Given a number sequence, find if there is any i\<j\<k that nums[i]\<nums[j]\<nums[k].
    * O(n) time and O(1) space. Maintain current minimum first two numbers.
* [358 Rearrange String k Distance Apart]({{ leetcode }}358.cpp)
    * Given strings like "aabbcc", re-arrange it i.e. the same characters are at least distance k from each other.
    * O(n) time, greedily choose most remaining character.
* [376 Wiggle Subsequence]({{ leetcode }}56.cpp)
    * Give a sequence, caculate the maximum length of subsequence that S1 < S2 > S3... or S1 > S2 < S3...
    * O(n) by greedily update current value when the same inequality holds.
* [392 Is Subsequence]({{ leetcode }}392.cpp)
    * Given S and T, judge whether T is a subsequence of S.
    * Follow up: lots of queries. Store T's chracters' indices and use binary search.
* [406 Queue Reconstruction by Height]({{ leetcode }}406.cpp)
    * Given (h, k) pairs, k is the number of higher people before self, reconstruct the queue.
    * When h is same, smaller k is better. When k is same, smaller h is better. Greedily choose lowest valid element. Use BIT to save how many pairs before are higher.
    * This is a swap-invariant problem.
* [435 Non-overlapping Intervals]({{ leetcode }}435.cpp)
    * Given intervals, determine minimum intervals needed removing to make intervals non-overlapping.
    * O(nlog(n)) time and O(n) space by DP in the order of interval ends. For each interval find the minimum of removing or not.
    * O(nlog(n)) time and O(1) space by greedy in the order of starts/ends. Two cases:

              ---- : remove the latter    ---   : remove the outer
            ----                        -------

* [452 Minimum Number of Arrows to Burst Balloons]({{ leetcode }}452.cpp)
    * Given some segments, each time one can declare a point to erase all segments covering it. Find minimum declarations to erase all segments.
    * O(nlog(n)) time, greedily accumulate more segments before erasing. Any solution erasing the group by more than one declaration can be optimized to our method.
* [456 132 Pattern]({{ leetcode }}456.cpp)
    * Given a number array, find whether there is i\<j\<k and nums[i]\<nums[k]\<nums[j].
    * O(n) time, greedily find maximum (nums[k], nums[j]) pairs from right. Much like Increasing Triplet Subsequence.
    * O(nlog(n)) time, use set to maintain right numbers and find smallest number \> nums[i].
* [484 Find Permutation]({{ leetcode }}484.cpp)
    * Given "DI" like sequence, where D is decrese and I is increase, find the lexicographically minimum number sequence. For "DI", answer is 312.
    * Greedily build I+D+ sequence: put all but last I at the bottom, then ID+ top down.
* [495 Teemo Attacking]({{ leetcode }}495.cpp)
    * Teemo attack at several time points and have poison buff. Calculate total buff time.
    * O(n) time and O(1) space, check at each timepoint whether the poison can last to the next.
* [621 Task Scheduler]({{ leetcode }}621.cpp)
    * Given tasks, the machine must take a rest of L time units between two same tasks, find the minimum working time.
    * O(time) time, greedily choose task with most remaining. Can be optimized to O(n) if skip spare window.
* [871 Minimum Number of Refueling Stops]({{ leetcode }}871.cpp)
    * There are some gas station with limited gas G[i]. Find minimum number of refueling stops to reach the end.
    * O(n^2) time by DP on maximum gas remaining with first M stations and N refuelings.
    * O(nlog(n)) time by greedily choose maximum G[i] in reachable range.
* [945 Minimum Increment to Make Array Unique]({{ leetcode }}945.cpp)
    * Given an array, calculate minimum steps to make elements in A unique by incrementing elements.
    * O(n) time by greedily assigning lowest holes.
* [948 Bag of Tokens]({{ leetcode }}948.cpp)
    * Given power bags, initial power P. If each bag earns 1 point, try to earn maximum points.
    * O(nlog(n)) time, greedily use lowest bags for points, and points for highest bags.
* [976 Largest Perimeter Triangle]({{ leetcode }}976.cpp)
    * Given edge lengths, find maximum perimeter of valid triangles.
    * O(nlog(n)) time, sort then check maximum triples. Note that for optimal solution, given any longest edge, the other two edges must be maximum ones not longer than it.
* [984 String Without AAA or BBB]({{ leetcode }}984.cpp)
    * Generate strings containint m A's and n B's without "aaa" or "bbb".

# Math

Reservior sampling: Say sampling K items. Keep the first K items. In the N-th (N\>K) sampling, keep the old items with probability 1 - K/N. Easy proof by math induction.

Fisher-Yates algorithm: Each time select one element from rest K elements. Selection is implemented by swapping.

Game theory: mini-max, NIM problem, Sprague-Grundy function, etc.

Expanded Euclid algorithm.

Sieve of Eratosthenes, Miller Rabin.

* [7 Reverse Integer]({{ leetcode }}7.cpp)
    * Mind overflow!
* [9 Palindrome Number]({{ leetcode }}9.cpp)
* [29 Divide Two Integers]({{ leetcode }}29.cpp)
    * Do division without using \*, \/ and mod. Generate binary representation of result.
* [149 Max Points on a Line]({{ leetcode }}149.cpp)
    * O(n^2) time. For each point, sort other points into buckets according to their slopes.
    * O(n^3) method also works, uses dot product.
* [166 Fraction to Recurring Decimal]({{ leetcode }}166.cpp)
    * Given x/y representation, calculate recurring decimal representation.
    * Be careful with overflow.
* [204 Count Primes]({{ leetcode }}204.cpp)
    * Given n, count how many primes there are from 1 to n.
    * Sieve of Eratosthenes, erase ik, stop at i = sqrt(n).
    * Miller-Rabin.
* [223 Rectangle Area]({{ leetcode }}223.cpp)
    * Given two rectangles, find overall area.
    * Similar to a problem in USACO training, cut the other rectangle from up, down, left, right.
* [233 Number of Digit One]({{ leetcode }}233.cpp)
    * Given a positive number n, count number of 1's appearing in numbers from 1 to n.
    * O(n) time, classical digit DP.
* [247 Strobogrammatic Number II]({{ leetcode }}247.cpp)
    * Find all numbers that would look the same after turning 180 degree, like 69, 11, 88, 0, etc.
    * Simple recursion.
* [248 Strobogrammatic Number III]({{ leetcode }}248.cpp)
    * Find all numbers between low and high.
    * Add a comparator.
* [277 Find the Celebrity]({{ leetcode }}277.cpp)
    * N-person team, there is a person that doesn't know others but others all know him. Find it by sending knows(A, B) queries.
    * O(n) time. Each query at least strikes out one person.
* [294 Flip Game II]({{ leetcode }}294.cpp)
    * Non-trivial O(n^2) solution by Sprague-Grundy function.
* [319 Bulb Switcher]({{ leetcode }}319.cpp)
    * There is a bulb array. There is n operations, and the i-th operation will switch ki bulbs. Calculate whether k-th bulb is on.
    * Count factor numbers. Only square numbers are on.
* [356 Line Reflection]({{ leetcode }}356.cpp)
    * Given several (x, y) points, find a vertical line made the pattern central symmetric.
    * O(n) time. The reflection line's x is always (minX + maxX) / 2.
    * Double precision is not safe?
* [360 Sort Transformed Array]({{ leetcode }}360.cpp)
    * Given f(x) = ax^2 + bx + c and a sorted array, given the sorted array mapped by f.
    * Find the root.
* [365 Water and Jug Problem]({{ leetcode }}365.cpp)
    * Given two jugs with volume a and b, find whether water volume c can be measured.
    * Equivalant to solve ax + by = c (expand euclid algorithm), with a + b >= c.
    * x < 0 && y > 0: fill a with b, and pour a once full, vice versa.
* [372 Super Pow]({{ leetcode }}372.cpp)
    * Caculate a^b mod 1337, where b is very large.
    * Use Chinese remainder theorem because 1337 = 7 * 191?
* [375 Guess Number Higher or Lower II]({{ leetcode }}375.cpp)
    * Guess number, each time wrong pay $x where x is the guessing number. Find the cost that guarantees to win.
    * Minimax. Enumerate each split point and take the best cost, each best cost is the worst cost of left/right side.
    * Follow up: expected loss instead of worst loss. Use probability to multiply worst cost in DP?
* [382 Linked List Random Node]({{ leetcode }}382.cpp)
    * Classic reservior sampling.
* [384 Shuffle an Array]({{ leetcode }}384.cpp)
    * Classic Fisher-Yates algorithm.
* [390 Elimination Game]({{ leetcode }}390.cpp)
    * Given an array from 1 to n, remove odd/even position numbers. Find the last number.
    * Each time all a mod b (b is 2^n) is eliminated. Infer "a" each time.
* [396 Rotate Function]({{ leetcode }}396.cpp)
    * Given A, Bk is A's rotation, find maximum F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1]
* [398 Random Pick Index]({{ leetcode }}398.cpp)
    * Use map + rand or origin vector + reservior sampling.
* [423 Reconstruct Original Digits from English]({{ leetcode }}423.cpp)
    * Given a permutation of a string made up by 0-9's english words's, recover digits.
    * Use some unique character in the word.
* [453 Minimum Moves to Equal Array Elements]({{ leetcode }}453.cpp)
    * Given number array, each time we can increase n-1 numbers, find minimum moves to make all elements equal.
    * Increase n-1 == decrease 1. Find minimum.
* [462 Minimum Moves to Equal Array Elements II]({{ leetcode }}462.cpp)
    * Given number array, find minimum moves (+1/-1) to make all elements equal.
    * Find median.
* [469 Convex Polygon]({{ leetcode }}469.cpp)
    * Find whether points sequence form a convex polygon.
    * Cross product is sufficient. No dot product validation needed.
* [470 Implement Rand10() Using Rand7()]({{ leetcode }}470.cpp)
    * Rejection sampling. Pitfall: don't use rand7() * rand7(), use 7 * rand7() + rand7() instead.
    * Can re-use redundant digits in next rejection sampling.
* [477 Total Hamming Distance]({{ leetcode }}477.cpp)
    * Hamming distance of two numbers: bit number of XOR. Given a number array, count sum of all number pair hamming distance.
    * O(n) time, make use of prefix one/zero counts.
* [483 Smallest Good Base]({{ leetcode }}483.cpp)
    * Given n, find minimum k that n's representation is all-one-sequence in base k.
    * Enumerate one-sequence's length and binary search for k. Need \_\_u128int\_t to avoid overflow.
* [486 Predict the Winner]({{ leetcode }}486.cpp)
    * Two players fetch number from array's two ends alternatively, judge whether player1 can win.
    * Typicial minimax.
* [497 Random Point in Non-overlapping Rectangles]({{ leetcode }}497.cpp)
    * Area-weighted probability. Why only upper\_bound works?
* [812 Largest Triangle Area]({{ leetcode }}812.cpp)
    * Given points, find maximum area of triangle formed by any of them.
    * Heron's formula: S = sqrt(p(p-a)(p-b)(p-c)).
* [878 Nth Magical Number]({{ leetcode }}878.cpp)
    * Given A and B, find k-th smallest number divisible by A or B.
    * Binary search on n\*A array.
* [891 Sum of Subsequence Widths]({{ leetcode }}891.cpp)
    * Given a number array, find sum of all (max-min) of subsequences.
    * Sort and count neighbor coverage times. It's all about power of twos.
* [899 Orderly Queue]({{ leetcode }}899.cpp)
    * Given a string, one can move any character in prefix of length N to the end of the string. Find the lexicographically minimum string reachable.
    * When N>=2, this is a insertion sort.
* [949 Largest Time for Given Digits]({{ leetcode }}949.cpp)
    * Given four digits, make up largest HH:MM time.
* [963 Minimum Area Rectangle II]({{ leetcode }}963.cpp)
    * Given (x, y) points, find minimum area rectangle formed by those points. Sides are not necessarily parallel to x or y.
* [970 Powerful Integers]({{ leetcode }}970.cpp)
    * Given x and y, find all numbers x^i + y^i <= bound.
* [972 Equal Rational Numbers]({{ leetcode }}972.cpp)
    * Given two rational numbers (like 7.3(9) == 7.4), judge whether they'are equal.
    * Shorten cycling part, then shorten fractional part, then process (9) case.
* [977 Squares of a Sorted Array]({{ leetcode }}977.cpp)
* [991 Broken Calculator]({{ leetcode }}991.cpp)
    * Given X and Y, one can do -1 and \*2 to X, find minimum steps to Y.
    * Consider convert Y to X by doing +1 and /2. Greedily do /2 when even, +1 when odd.

# Divide and Conquer

* [273 Integer to English Words]({{ leetcode }}273.cpp)
    * Divide integer to 3-length segments.
* [395 Longest Substring with At Least K Repeating Characters]({{ leetcode }}395.cpp)
    * O(n) time, recursively expell letters with count less than target.

# Union-Find

* [261 Graph Valid Tree]({{ leetcode }}261.cpp)
    * Given edges, judge whether it's a tree.
* [305 Number of Islands II]({{ leetcode }}305.cpp)
    * Islands are popping out of a grid sea. Give number of islands after each popping.
    * Maintain a parent set, do erase and insert during each union.
* [323 Number of Connected Components in an Undirected Graph]({{ leetcode }}323.cpp)
* [803 Bricks Falling When Hit]({{ leetcode }}803.cpp)
    * Reverse-time union-find.
* [947 Most Stones Removed with Same Row or Column]({{ leetcode }}947.cpp)
    * Given stones on a 2D plane, one can remove a stone if there are other stones sharing the same row or column. Find maximum removes.
    * Union points by row or column.
* [952 Largest Component Size by Common Factor]({{ leetcode }}952.cpp)
    * Find the largest connected component of a graph, where there is an edge if two nodes share a common factor > 1.
    * O(N\*sqrt(W)) time, where W is the maximum value in input array.
* [990 Satisfiability of Equality Equations]({{ leetcode }}952.cpp)
    * Given equations like a==b, b!=c, a==c, find whether the equation set is satisfiable.

# Tree

Morris Traversal

    hasLeft -> find left subtree's rightmost leaf
        leaf found -> link current node to its right child -> go left
        self found -> break connection and go right subtree
    else go right subtree

Stack-Based Iterative Traversal

    while !stack.empty()
        p = stack.top()
        if (p->right != nullptr)
            p = p->right
            while (p != nullptr) push p, update p as p->left; # get smallest
        else
            pop stack
            while (stack top's right is p) update p, pop stack; # while largest

* [94 Binary Tree Inorder Traversal]({{ leetcode }}94.cpp)
* [98 Validate Binary Search Tree]({{ leetcode }}98.cpp)
* [99 Recover Binary Search Tree]({{ leetcode }}99.cpp)
    * Two elements of a BST is swapped. Find them out.
    * O(1) space by Morris Traversal.
* [102 Binary Tree Level Order Traversal]({{ leetcode }}102.cpp)
    * Sort tree's nodes into different depths.
* [103 Binary Tree Zigzag Level Order Traversal]({{ leetcode }}103.cpp)
    * Sort tree's nodes into different depths, but switch direction on each depth level.
* [105 Construct Binary Tree from Preorder and Inorder Traversal]({{ leetcode }}105.cpp)
    * O(n) time and O(n) space, record val's inorder index.
* [106 Construct Binary Tree from Inorder and Postorder Traversal]({{ leetcode }}106.cpp)
* [113 Path Sum II]({{ leetcode }}113.cpp)
    * Find all root to leaf paths that nodes sum to a target.
* [114 Flatten Binary Tree to Linked List]({{ leetcode }}114.cpp)
    * Flatten binary tree to preorder linked list.
    * O(n) time and O(1) space, use Morris Traversal and link left/right subtree when root is met again.
* [116 Populating Next Right Pointers in Each Node]({{ leetcode }}116.cpp)
    * Given a perfect binary tree, link siblings together.
    * Invariant: upper level is already linked.
* [117 Populating Next Right Pointers in Each Node II]({{ leetcode }}117.cpp)
    * Binary tree not perfect.
* [129 Sum Root to Leaf Numbers]({{ leetcode }}129.cpp)
    * Each node is a digit, find sum of numbers formed by root-leaf paths.
* [144 Binary Tree Preorder Traversal]({{ leetcode }}144.cpp)
* [145 Binary Tree Postorder Treversal]({{ leetcode }}199.cpp)
    * Morris Traversal. Reverse of left-right mirrored pre-order is post-order.
* [156 Binary Tree Upside Down]({{ leetcode }}156.cpp)
    * Do the following transformation recursively: (all right nodes are whether leaf with sibling or nullptr)

            1      4
           2 3 => 5 2
          4 5      3 1

* [173 Binary Search Tree Iterator]({{ leetcode }}173.cpp)
    * Average O(1) time and O(h) memory for next() and hasNext().
* [199 Binary Tree Right Side View]({{ leetcode }}199.cpp)
* [236 Lowest Common Ancestor of a Binary Tree]({{ leetcode }}236.cpp)
* [250 Count Univalue Subtrees]({{ leetcode }}250.cpp)
    * Find the number of univalue subtrees, where all nodes are of the same value.
* [255 Verify Preorder Sequence in Binary Search Tree]({{ leetcode }}255.cpp)
    * O(n) time by iterative traversal.
    * O(1) space by mono-stack and reuse input vector. Mono stack saves nodes not visited yet, thus all nodes less than current value must be visited (popped), because they can only be in left trees.
* [272 Closest Binary Search Tree Value II]({{ leetcode }}272.cpp)
    * Given a BST and target value, find k nearest neighbor.
    * O(klog(n)) time using stack-based iterative traversal.
* [285 Inorder Successor in BST]({{ leetcode }}285.cpp)
* [297 Serialize and Deserialize Binary Tree]({{ leetcode }}297.cpp)
* [298 Binary Tree Longest Consecutive Sequence]({{ leetcode }}298.cpp)
    * Given a binary tree, find the length of longest consecutive sequence going from up to down.
    * O(n) time, simple tree DP.
* [314 Binary Tree Vertical Order Traversal]({{ leetcode }}314.cpp)
    * Given a binary tree, output its vertical order traversal. For example:
      
                2
              3   4    => 1 3 2 5 0 4 6
            1  5|0  6

    * Traverse the tree and emit (node, position) pairs. O(n) time can be achieved if using hashmap.
* [337 House Robber III]({{ leetcode }}337.cpp)
    * Rob on a tree, adjacent nodes cannot be robbed.
    * O(n) time, typical tree DP.
* [366 Find Leaves of Binary Tree]({{ leetcode }}366.cpp)
    * Remove leaves of a binary tree step by step.
    * Tree DP. for each node calculate it's shortest path to leaf.
* [426 Convert Binary Search Tree to Sorted Doubly Linked List]({{ leetcode }}426.cpp)
    * Convert BST to a sorted list, left=prev, right=next.
    * Simple divide and conquer.
* [428 Serialize and Deserialize N-ary Tree]({{ leetcode }}428.cpp)
    * Simple recursion.
* [431 Encode N-ary Tree to Binary Tree]({{ leetcode }}431.cpp)
    * Left-(first) children and right-sibiling.
* [449 Serialize and Deserialize BST]({{ leetcode }}449.cpp)
    * Use 1,,-1,,, like preorder traversal string.
* [951 Flip Equivalent Binary Trees]({{ leetcode }}951.cpp)
* [965 Univalued Binary Tree]({{ leetcode }}965.cpp)
* [971 Flip Binary Tree To Match Preorder Traversal]({{ leetcode }}971.cpp)
* [987 Vertical Order Traversal of a Binary Tree]({{ leetcode }}987.cpp)
    * Similar to 314.

# Sort

Merge sort: O(nlog(n)) time. O(log(n)) space with recursion, O(1) space with bottom-up.

Heap sort: heapify O(n) time, poping O(nlog(n)). O(1) space.

Quick sort: O(nlog(n)) average time.

Quick selection: O(n) average time. Can do by nth\_element in STL.

{% highlight cpp %}
// Quick Selection
pivot = nums[right--];
l = left, r = right;
while (l - 1 < r) // invariant: <left:<pivot, >right:>=pivot
    if (nums[l] >= pivot) swap(nums[l], nums[r--]);
    else l++;
if (k == l - left + 1) return pivot;
else if (k <= l - left) right = l - 1;
else k -= left - l + 1, left = l;
{% endhighlight %}

Some sequences satisfy that swapping adjacent elements doesn't affect other elements. This means that any answer can be optimized into the optimal one by swapping neighbors. Such problems can be solved by defining custom comparators.

* [31 Next Permutation]({{ leetcode }}31.cpp)
    * O(n) time (worst case is reverse) and O(1) space by finding the least significant number a i.e. there is b less significant than b and a < b.
    * Simulating the DFS stack and judging at each depth whether the chose one is the maximum in possible number set also works.
* [57 Insert Interval]({{ leetcode }}57.cpp)
    * O(nlog(n)) time by sorting and merge.
    * O(n) time by direct insert.
* [148 Sort List]({{ leetcode }}148.cpp)
    * O(nlog(n)) time by merge sort. O(1) space by bottom-up sorting.
* [179 Largest Number]({{ leetcode }}179.cpp)
    * Given a list of non-negative integers, concatenate them into the largest number.
    * O(nlog(n)) time by custom sorting. For any two numbers, compare which should be the first to form a larger number when they form a new number. For example, 30\|309 vs. 309\|30.
* [274 H-Index]({{ leetcode }}274.cpp)
    * Given a citation list, find the author's H-index.
    * O(nlog(n)) time by sorting.
    * O(n) time by radix sorting. Any citation larger than n can be treated as n.
* [280 Wiggle Sort]({{ leetcode }}280.cpp)
    * Given a sorted array A, no replica, sort it i.e. A[0] \< A[1] \> A[2] \< A[3] ...
    * O(n) time by swapping neighbors.
* [296 Best Meeting Point]({{ leetcode }}296.cpp)
    * Given points in a grid, find the point where sum of manhattan distance from given points to it is minimized.
    * Find the median.
* [324 Wiggle Sort II]({{ leetcode }}324.cpp)
    * Given an array A, might with replica, sort it i.e. A[0] \< A[1] \> A[2] \< A[3] ...
    * Average O(n) time by quick selection and push \>mid to left and \< mid to right.
* [370 Range Addition]({{ leetcode }}370.cpp)
    * Given a range [0, n] and several range updates, give final values of all points.
    * O(nlog(n)) time by sorting the ranges and line sweeping.
    * O(n) time and O(1) space by changing range bounds and using prefix sum.
* [451 Sort Characters By Frequency]({{ leetcode }}451.cpp)
* [493 Reverse Pairs]({{ leetcode }}493.cpp)
    * Given a number array, find all (i,j) pairs that num[i] \> num[j] * 2.
    * Instrumented merge sort or BIT or BST(trie) with binary search. 315 and 327 are the same paradigm.
* [969 Pancake Sorting]({{ leetcode }}969.cpp)
    * Sort an array by reversing its prefixes.
    * The minimum number question is NP-hard. See [Wikipedia](https://en.wikipedia.org/wiki/Pancake_sorting)
* [973 K Closest Points to Origin]({{ leetcode }}973.cpp)

# Bit Manipulation

* [136 Single Number]({{ leetcode }}136.cpp)
    * XOR.
* [137 Single Number II]({{ leetcode }}137.cpp)
    * In such a problem, use bit DFA to substitude XOR operation. Such bit DFA should become 0 if 1 is met M times, where M is the occurence time of most elements.
* [187 Repeated DNA Sequences]({{ leetcode }}187.cpp)
    * Given a DNA sequence (ATCG), find all 10-length substring occuring more than once.
    * Use bitset to accelerate.
* [201 Bitwise AND of Numbers Range]({{ leetcode }}201.cpp)
    * Find the most significant bit that two numbers differ.
* [260 Single Number III]({{ leetcode }}260.cpp)
    * Given an array, all elements appear twice except two elements appear once. Find the two numbers.
    * O(n) time and O(1) space. The two numbers must differ in some bit. Divice the whole array according to the bit, and the subproblem is Single Number I.
* [318 Maximum Product of Word Lengths]({{ leetcode }}318.cpp)
    * Given a list of words, find maximum length product of two words having no common characters.
    * O(n^2) time, use bit manipulation for acceleration.
* [393 UTF-8 Validation]({{ leetcode }}393.cpp)
    * Emulation using bit manipulation.

# Search

* [51 N-Queens]({{ leetcode }}51.cpp)
* [52 N-Queens II]({{ leetcode }}52.cpp)
* [126 Word Ladder II]({{ leetcode }}126.cpp)
    * Output all shortest transformations. Record previous nodes leading to shortest path in BFS. Kind of like DP.
* [127 Word Ladder]({{ leetcode }}127.cpp)
    * Given equal-length word list and beginWord and endWord, find minimum steps to change beginWord to endWord. Each change is at most one character.
* [130 Surrounded Regions]({{ leetcode }}130.cpp)
    * Given grids filled by X and O, turn all surrounded O into X.
* [133 Clone Graph]({{ leetcode }}133.cpp)
    * Deep copy a graph.
* [200 Number of Islands]({{ leetcode }}200.cpp)
    * Flood filling.
* [286 Walls and Gates]({{ leetcode }}286.cpp)
    * Given grids made by walls, gates and empty room, fill each room with shortest path length to any gate.
    * O(mn), start from all zero points.
* [301 Remove Invalid Parentheses]({{ leetcode }}301.cpp)
    * Caculate invalid left and right brackets first by simple scanning. Then brute force DFS.
* [317 Shortest Distance from All Buildings]({{ leetcode }}317.cpp)
    * Given a grid with several buildings and obstacles. Find the best home location with minimum sum of distances to buildings.
    * BFS from all buildings and sum the distances.
* [364 Nested List Weight Sum II]({{ leetcode }}364.cpp)
    * Given a nested list, find weighted sum of all nodes. Weight is depth.
* [386 Lexicographical Numbers]({{ leetcode }}386.cpp)
    * Generate lexicographical ordered number list from 1 to n.
    * Do multiply 10 or plus one each time. After plus one, remove trailing zeros.
* [397 Integer Replacement]({{ leetcode }}397.cpp)
    * Given a number n, if n is even can do n >> 1, else can do n+1 or n-1. Find least step to 1.
    * Simple BFS.
* [417 Pacific Atlantic Water Flow]({{ leetcode }}417.cpp)
    * Given a grid, water flows to non-greater grids. Find all grids that can flow to both up-left and right-down.
    * Simple BFS. Memo search is not valid because states are not strictly mono.
* [433 Minimum Genetic Mutation]({{ leetcode }}433.cpp)
    * Same as word ladder.
* [440 K-th Smallest in Lexicographical Order]({{ leetcode }}440.cpp)
    * Given 1 and n, find k-th smallest in lexicographical order.
    * Given n and n + 1 (without carry), find numbers between them by adding zeros.
* [465 Optimal Account Balancing]({{ leetcode }}465.cpp)
    * People have debts among each other. Find minimum steps to clear the debt.
    * O(n!) time, calculate per-person surplus/deficit, then DFS.
* [473 Matchsticks to Square]({{ leetcode }}473.cpp)
    * Multiple knapsacks.
* [478 Generate Random Point in a Circle]({{ leetcode }}478.cpp)
    * Rejection sampling.
* [488 Zuma Game]({{ leetcode }}488.cpp)
    * Zuma game like "WRRBBW" -\> "WRR(R)BBW" -\> "WBBW"... Given start state and balls in hand, find minimum steps to eliminate all balls.
    * Simple DFS, memo state and balls in hand.
* [489 Robot Room Cleaner]({{ leetcode }}489.cpp)
    * Given an unknown maze and a robot with move() and turnRight(), clean the room.
    * DFS with relative position visited memo.
* [490 The Maze]({{ leetcode }}490.cpp)
    * Ball rolling in a maze. Given start and end point, judge whether the ball can stop at end point.
    * Simple BFS.
* [491 Increasing Subsequences]({{ leetcode }}491.cpp)
    * Given a number list, find all increasing subsequences.
    * For each position find possible next indices, then DFS.
* [967 Numbers With Same Consecutive Differences]({{ leetcode }}967.cpp)
* [980 Unique Paths III]({{ leetcode }}980.cpp)
    * Hamiltonian path.

# Graph

* [207 Course Schedule]({{ leetcode }}207.cpp)
* [210 Course Schedule II]({{ leetcode }}210.cpp)
    * Topological sort.
* [269 Alien Dictionary]({{ leetcode }}269.cpp)
    * Given a sorted word list of a new alphabet, recover character sequence.
    * Topological sort.
* [310 Minimum Height Trees]({{ leetcode }}310.cpp)
    * Given a tree, find the root set where it has minimum height.
    * Topological sort, remove leaves.
* [332 Reconstruct Itinerary]({{ leetcode }}332.cpp)
    * O(n) time since the problem is finding Eularian path.
* [399 Evaluate Division]({{ leetcode }}399.cpp)
    * Use floyd. Similar to currency exchange.
    * Union-find is also ok. For each a/b=x, assume a=x and b=1. If a and b already have assumed values, update them. Union-find is used for this update.
* [444 Sequence Reconstruction]({{ leetcode }}444.cpp)
    * Given some sequences, judge whether a supersequence S can be uniquely constructed from those sequences.
    * Topological sort.

# Trie

* [164 Maximum Gap]({{ leetcode }}164.cpp)
    * Given a number array, find maximum gap in sorted array.
    * O(32n) time with trie.
    * O(n) time by pigeon hole principle. Make buckets i.e. at least one bucket is empty, then the empty bucket(s) must be maximum adjacent. Also maintain min/max for each bucket.
* [208 Implement Trie (Prefix Tree)]({{ leetcode }}208.cpp)
* [211 Add and Search Word - Data structure design]({{ leetcode }}211.cpp)
    * Given word dict, support look-up supporting dot wildcard. Trie with DFS.
* [212 Word Search II]({{ leetcode }}212.cpp)
    * Given a word list, find all words appearing in the grid.
    * Use Trie to build a dict, then DFS.
* [336 Palindrome Pairs]({{ leetcode }}336.cpp)
    * Given a word list, find all word pairs that can be combined into a palindrome.
    * O(nk^2) time, using trie to find the other end of a palindrome.
    * Use hashset to find also works.
* [411 Minimum Unique Word Abbreviation]({{ leetcode }}411.cpp)
    * Given a word and a dictionary, find the smallest abbr. of the word ("apple"-\>"a4", etc.) that doesn't conflict with the dictionary. A number's length is 1.
    * O(mn\*2^m) time, where n\*2^m \<= 21. BFS with trie. BFS all nodes when in number region.
* [421 Maximum XOR of Two Numbers in an Array]({{ leetcode }}421.cpp)
    * O(n) time, DFS on trie.
* [425 Word Squares]({{ leetcode }}425.cpp)
    * Given a word list, find all word squares constructable. A word square is like
            
            ball
            area
            lead
            lady

    * Backtracking with validation by trie.

# Design

* [146 LRU Cache]({{ leetcode }}146.cpp)
    * Double linked list + hashmap.
* [244 Shortest Word Distance II]({{ leetcode }}244.cpp)
    * Given word list and two words, find minimum distance of their indices. There might be many queries.
    * O(n) time and space with hashmap and merge list.
* [251 Flatten 2D Vector]({{ leetcode }}251.cpp)
    * hasNext and next on a 2D vector.
    * Implement move2d and move.
* [271 Encode and Decode Strings]({{ leetcode }}271.cpp)
* [281 Zigzag Iterator]({{ leetcode }}281.cpp)
    * Given two number lists, the iterator should return their elements alternatively.
* [284 Peeking Iterator]({{ leetcode }}284.cpp)
    * Create a temporary iterator and fint its next.
    * Cache next element.
* [288 Unique Word Abbreviation]({{ leetcode }}288.cpp)
* [341 Flatten Nested List Iterator]({{ leetcode }}341.cpp)
    * hasNext and next. Use stack to store iterators.
* [346 Moving Average from Data Stream]({{ leetcode }}346.cpp)
* [348 Design Tic-Tac-Toe]({{ leetcode }}348.cpp)
    * O(1) time for each move and O(n) space. Save rowCount, colCount and crossCount.
* [353 Design Snake Game]({{ leetcode }}353.cpp)
* [362 Design Hit Counter]({{ leetcode }}362.cpp)
    * hit(timestamp), getHits(<=timestamp). Only 5-minute valid interval.
    * O(1) time for both operations. Use prefix counts and deleted counts.
* [379 Design Phone Directory]({{ leetcode }}379.cpp)
    * get(), check(), release() on an array.
    * Use a heap pointer and a free list.
* [380 Insert Delete GetRandom O(1)]({{ leetcode }}380.cpp)
    * Swap deleted one with the last one.
* [381 Insert Delete GetRandom O(1) - Duplicates allowed]({{ leetcode }}381.cpp)
    * Keep a set of indices instead of a single index.
* [460 LFU Cache]({{ leetcode }}460.cpp)
    * Use double linked-list for frequency list and recent list. Each frequency list node contains a recent list.
    * push\_front for frequency-list put new key, earse for get key, insert for frequency list change. Use get in put to add frequency.
* [981 Time Based Key-Value Store]({{ leetcode }}981.cpp)
    * Design a key-value store, supporting read latest value before some timestamp.
    * O(1) set and O(log(n)) read. use map's lower\_bound to search timestamp.

# Segment Tree & Binary Index Tree

* [307 Range Sum Query - Mutable]({{ leetcode }}307.cpp)
* [308 Range Sum Query 2D - Mutable]({{ leetcode }}308.cpp)
    * Quad tree.
* [315 Count of Smaller Numbers After Self]({{ leetcode }}315.cpp)
    * Instrumented merge sort also do.
    * Maintain a sorted array and do binary search in it also do.
* [391 Perfect Rectangle]({{ leetcode }}391.cpp)
    * Check whether several small rectangles exactly merge into a bigger one.
    * O(nlog(n)) time by line sweeping and segment tree.
    * O(n) by counting corners.

