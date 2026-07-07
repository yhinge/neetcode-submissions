class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.trim().length <= 1){
            return true;
        }
        
        let isAlphaNum = (c) =>
            (c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0)) ||
            (c >= "A".charCodeAt(0) && c <= "Z".charCodeAt(0)) ||
            (c >= "0".charCodeAt(0) && c <= "9".charCodeAt(0));

        let j = s.length - 1;
        let i = 0;
        let str = s.toLowerCase();

        //console.log("Starting check");

        while (i < str.length && j >= 0 && i<=j) {
            //console.log("Processing ", str[i], str[j], str.charCodeAt(i), str.charCodeAt(j));
            if (!isAlphaNum(str.charCodeAt(i))) {
                i++;
                continue;
            }
            if (!isAlphaNum(str.charCodeAt(j))) {
                j--;
                continue;
            }
            if (str.charCodeAt(i) !== str.charCodeAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
