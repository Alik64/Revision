class Solution:
    def isPalindrome(self, x: int) -> bool:
        inverse = str(x)[::-1]
        return str(x) == inverse