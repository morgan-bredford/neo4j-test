Fastest slide  
Description
You're about to compete at sliding down a pyramid and to win you need to take the fastest path to
the bottom.
A pyramid is represented as this:

1
2 3
4 5 6

You always start from the top and have to find your way to the bottom. You can only slide to the
two adjacent fields downwards. Example: 1 -> [2, 3], 2 -> [4, 5], 3 -> [5, 6].
The number in each field represents how much you'll be slowed down by friction.
The fastest route is the route that has the lowset sum of all the fields passed through.
The task
Write a program that solves the shortest slide path.
The input will be provided in the form of a number of telling you how many layers there will be and
after that one layer per row with spaces between the values per layer.
Example:

4
1
2 3
4 5 6
7 8 9 10

The output from the program of the above pyramid would be: 14 (the sum of the path 1, 2, 4, 7)
More examples
A
Input:

4
3
7 4

2 4 6
8 5 9 3

Output:

16

B
Input:

15
75
95 64
17 47 82
18 35 87 10
20 4 82 47 65
19 1 23 75 3 34
88 2 77 73 7 63 67
99 65 4 28 6 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 4 68 89 53 67 30 73 16 69 87 40 31
4 62 98 27 23 9 70 98 73 93 38 53 60 4 23

Output:

447

Requirements
The solution should have no external depdendecies.
