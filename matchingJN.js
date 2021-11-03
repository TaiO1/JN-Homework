let isMatching = (str) => {
    let stack = [];
    // Bracket open and closed pair
    let open = {
        '{': '}',
    };
    
    // Closed bracket, will return true if the closed bracket proceeds a matching open bracket
    let closed = {
        '}': true,
    }
    
    // If an open bracket is found, push it to the stack
    // If a closing bracket is found, then pop from the stack 
    // If an open bracket was on the stack, function returns true since there is a matching pair
    // If no open bracket was on the stack, function returns false
    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

// Test cases
console.log(isMatching("{}")) // returns true
console.log(isMatching("{()}")) // returns true
console.log(isMatching("{abcde}")) // returns true
console.log(isMatching("")) // returns true, since there is no closing bracket missing an open bracket
console.log(isMatching("(['*&^%")) // returns true, since there are no open or closed  brackets
console.log(isMatching("}{")) // returns false, no open bracket before closed bracket
console.log(isMatching("{{}")) // returns false, no closed bracket for second open bracket
