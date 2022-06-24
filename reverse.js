
//              Option 1 - For string

const reverseNum = x => { parseFloat(x.toString().split('').reverse().join('') ); console.log(x) }

function reverseNumber(num){
    num = num + '';
        let reversedText = num.split('').reverse().join('');
        let reversedNumber = parseInt(reversedText, 10);
    console.log("reversed number: ", reversedNumber);
        return reversedNumber;
}


reverseNumber('456')
//              Option 2 - For digits

number = 12345
const i2a = number.toString().split("");
const a2i = parseInt(i2a.reverse().join(""));
console.log(a2i);


//              Option 3 - For digits
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(6789)));
