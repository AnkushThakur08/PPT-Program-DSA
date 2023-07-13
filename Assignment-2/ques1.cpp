/*

Question 1
Given an integer array nums of 2n integers, group these integers into n pairs
(a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is
maximized. Return the maximized sum.

Example 1:
Input: nums = [1,4,3,2]
Output: 4

*/


#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int arrayPairSum(vector<int> nums) {
    sort(nums.begin(), nums.end());

    int sum = 0;

    for (int i = 0; i < nums.size(); i += 2) {
        sum += min(nums[i], nums[i + 1]);
    }

    return sum;
}

int main() { 
    
    cout<<arrayPairSum({1,4,3,2})<<endl;
    cout<<arrayPairSum({6,2,6,5,1,2})<<endl;

    return 0; 
}