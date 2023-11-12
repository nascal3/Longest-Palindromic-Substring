function longestPalindrome(s) {
    // Handle edge case, empty or single-character string
    if (s.length < 2) {
      return s;
    }
  
    let start = 0; // Starting index of the longest palindromic substring
    let maxLength = 1; // Length of the longest palindromic substring
  
    /**
     * Expands around the center to find palindromes.
     * @param {number} left - Left index to start expanding.
     * @param {number} right - Right index to start expanding.
     */
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        const currentLength = right - left + 1;
  
        // Update if a longer palindrome is found
        if (currentLength > maxLength) {
          maxLength = currentLength;
          start = left;
        }
  
        // Expand the search space
        left--;
        right++;
      }
    }
  
    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
      expandAroundCenter(i, i); // Odd length palindrome
      expandAroundCenter(i, i + 1); // Even length palindrome
    }
  
    // Return the longest palindromic substring
    return s.substring(start, start + maxLength);
  }
  
  // Example usage:
  const input1 = "babad";
  console.log(longestPalindrome(input1)); // Output: "bab" or "aba"
  