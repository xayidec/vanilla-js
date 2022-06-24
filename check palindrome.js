const name = 'madam';
function palindrome (param) {
    const i2a = param.toString().split("");
    const a2i = i2a.reverse().join("");
    console.log(a2i);

    
}

palindrome(name)