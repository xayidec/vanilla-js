// Sum 2 integers from array & return the indices that add up to the second parameter

var twoSum = (nums, target) => {
    for (let i=0; i <= nums.length; i++) {
        for (let j=i+1; j <= nums.length; j++) {
            if (i+j === target) {
                return [i,j];
            }
        }
    }
}

//ADD LINKED LIST AND REVERSE
function addTwoNumbers(l1, l2) {
    console.log('test0');
    let carry = 0
    while(l1 || l2) {
        console.log('test1')
        let val1 = 0;
        let val2 = 0;

        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        
        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        }

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let int =
        if (sum > 9) {

        }
        console.log('test2');
        console.log(`${val1} + ${val2} = ${sum}`)
    }
}

addTwoNumbers()