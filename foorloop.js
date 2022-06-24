
//add 2 integers that add up to the second parameter

/*var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i + 1; j<nums.length; j++) { //VERY IMPORTANT TO DO i+1
            if (nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
};*/

//SPLIT ARRAY INTO M parameter
nums = [1,2,3,4,5];
m = 2
var splitArray = function(nums, m) {
    for (let y=1; y < nums.length; y+=m){
        let test = nums.slice(y, y + m);
        console.log(y)
        return test;
    }
};
splitArray(nums, m)
//[2,3]


//Reverse array manually - custom
function customReverse(originalArray) {

    let leftIndex = 0; //index starts at 0
    let rightIndex = originalArray.length - 1; //length - 1 to get last item index
   
    //while left item is less then last item
    while (leftIndex < rightIndex) {
  
      // Swap the elements with temp variable
      let temp = originalArray[leftIndex]; //store left item on Temp
      originalArray[leftIndex] = originalArray[rightIndex]; //switch left item with right item
      originalArray[rightIndex] = temp; //switch right item with the left one store on temp
  
      // Move indices to the middle
      leftIndex++;
      rightIndex--;
    }
  }
  let myArray = [1, 2, 3, 4, 5];

customReverse(myArray);

console.log(myArray);




/*
while (i <10) {
    i++
}*/


//for loop - longhand
const fruits = ['mango', 'peach', 'banana'];
for (let i = 0; i < fruits.length; i++){};

//OF get values
for (let fruit of fruits) 
    if (fruit === 'mango') {
        console.log(`there is ${fruit}`);
    }

//OF - only works in arrays, not objects**

//IN - 
    //gets index for arrays
    for (let fruit in fruits) 
        console.log(fruit); // index
    //value using in 
    for (let fruit in fruits) 
        console.log(fruits[fruit]); // value

//IN - gets property for objects
const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'};
for (let item in obj)
    //console.log(item); //prints property
    //in order to get the value due
    console.log( obj[item] );

    