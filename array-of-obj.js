//Array of objects
let addresses = [
    {
        name: "ari 1",
        addressline1: "15 florida grove",
        addressline2: "keasbey NJ 08832"
    },
    {
        name: "ari 2",
        addressline1: "15 florida grove rd",
        addressline2: "keasbey NJ 08832"
    }
]
//Object
let newAddress = {
    name: "ari 3",
    addressline1: "15 florida grove",
    addressline2: "keasbey NJ 08832"
}

//console.log(addresses.length); //2
//console.log(addresses[0]);     //Prints first array

addresses.unshift(newAddress); //Paces new object at the START of address object

addresses.push(newAddress);    //Paces new object at the END of address object

addresses.splice(1, 0, newAddress)  //Array.splice({index where to start},{how many items to remove},{items to add});

//get 1 item from array
let ari2 = addresses.find(address => address.name === "ari 2"); //Find 1 object in an array by its values

let ari1 = addresses.find(address => address.name === "ari 1" && address.addressline1 === "15 florida grove");//Find 1 object in an array by MULTIPLE values

//Get multiple items from an array
let address3 = addresses.filter(address=> address.name === "ari 3");
//console.log(address3.length);

//Transform an array of objects into an array of different objects.
let test = addresses.map(address => {
    if(address === "15 florida grove") {
        return "address 1"
    }
    if(address === "15 florida grove rd") {
        return "address 2"
    }
})
//this will out put new array ['address 1', 'address 2']


//Check if objects in array fulfill a condition
cars.some(car => car.color === "red" && car.type === "cabrio");
// output: true
cars.every(car => car.capacity >= 4);
// output: false



//Loop & create HTML
let parent = document.getElementById('test');
let div = document.createElement('div');
div.innerHTML= 'TEST';

addresses.forEach( (address,i) => {
    let divChild = document.createElement('div');
    divChild.id = i;
    divChild.className = 'section-'+i
    divChild.innerHTML = `${address.name} <br> ${address.addressline1} <br> ${address.addressline2} `;
    div.append(divChild);
});

parent.append(div);