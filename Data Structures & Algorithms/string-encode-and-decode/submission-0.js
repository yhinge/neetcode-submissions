class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(let i=0; i<strs.length; i++){
            result+=strs[i].length+"#"+strs[i];
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result= [];
        let lengthString="";
        for(let i=0; i<str.length; i++){
            if(str[i]==='#'){
                let length = Number(lengthString)
                result.push(str.slice(i+1,i+length+1));
                i+=length;
                lengthString="";
            }else{
                lengthString+=str[i];
            }
            //5#Hello5#World
        }
        return result;
    }
}
