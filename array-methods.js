let items = [
    { name: 'Bike',      price:100    },
    { name: 'TV',        price: 1000  },
    { name: 'Book',      price:10     },
    { name: 'Computer',  price: 2000  },
    { name: 'Phone',     price: 900   },
    { name: 'Keyboard',  price: 25    },
]

//FILTER = filters to meet a condition and returns new array
const filteredItems = items.filter( item => {
    return item.price <= 1000
});
console.log(filteredItems);


//MAP = maps and returns values in array
const itemName = items.map( item => {
    return item.name
})
console.log(itemName);


//REMOVE last item
    fruit.pop()


//REMOVE first
    fruits.shift();

//ADD
    fruits.push("Kiwi")


//remove certain items by index OR ADD
    //REMOVE
    let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
    let removed = myFish.splice(3, 1)

    // removed = Mandarin -- if 1 it goes after index- if 0 it goes before index

    //ADD
    let myArr = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removedI = myArr.splice(2, 0, 'drum')
    console.log(myArr)

    // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]



//
Math.random();