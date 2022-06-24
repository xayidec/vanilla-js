/*
{
  "dataTable":   [
    {
      "name": "Ari",
      "age": 30
    }
 ]
}
*/

//async makes a function return a Promise
//await makes a function wait for a Promise

async function f() {
    console.log('Async function.');
    return Promise.resolve('Promise returns after asynch process');
}

f().then(function(result) {
    console.log(result)
});

//*
async function l() {
    let promise = new Promise( (resolve, reject) => {
        resolve('Hello World, I\'m using async function');
    });
    console.log(await promise);
}
l();
//*

/*
async function fetchData () {
    let file = await fetch('/articles/user.json');
    let user = await file.json();

    let userData = await fetch(`https://api.github.com/users/${user.name}`)
    let userfile = await userData.json();

    let img = document.createElement('img')
    img.src = userfile.image;
    document.body.append(img);

    await new Promise( (resolve, reject) => {
        setTimeout(resolve, 3000)
    });

    img.remove();
}

fetchData ();
*/

//
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}
  
async function f() {
    wait().then(result => console.log(result));
}
f();



//flat()
var arr1 = [2,6,8,[8,4,3,9,[8,4,3,9,[8,4,3,9]]]];
console.log(arr1.flat(3))


//flatmap() creates new array
var arr2 = [2,6,8];
console.log(arr2.flatMap( x => [x, x*2]));
    // [2, 4, 6, 12, 8, 16]

var arr3 = ['it\'s cold', 'today', '!'];
console.log(arr3.flatMap( y => y.split(" ") ) );
    //["it's", 'cold', 'today', '!']


    
const users = [
    [{ id: 1, name: 'John' }, { id: 3, name: 'Wayne' }],
    [
        [
            { id: 7, name: 'Melissa' },
            { id: 2, name: 'David' }
        ],
    ],
];

const flattened = users.flat(Infinity);

console.log(flattened);



var data = [{ id: "acc.1260446672222.11", type: "EXPENSES_FOLDER", name: "Expense Group", balance: 3418.11, children: [{ id: "acc.1260446672238.27", type: "EXPENSE", name: "Advertising, Promotion and Entertainment Account", balance: 0, children: [] }, { id: "acc.9a2492ba-0d82-4f4a-a1b4-14868f1e1a39", type: "EXPENSES_FOLDER", name: "Premises Costs", balance: 0, children: [{ id: "acc.287ba5b6-5536-428b-950f-d71d2af73ccc", type: "EXPENSE", name: "Use of Home - Gas", balance: 0, children: [] }, { id: "acc.7091ee15-3f02-4bd1-94e5-5918cf986969", type: "EXPENSE", name: "Hire of Venue, Studios, Teaching Rooms", balance: 0, children: [] }] }, { id: "acc.827ec446-edeb-4f2b-8032-d306292d2d83", type: "EXPENSES_FOLDER", name: "Administrative Expenses", balance: 558.61, children: [{ id: "acc.0ed5fc81-7734-4452-86a9-db22a6b0f8e8", type: "EXPENSE", name: "Bank Charges", balance: 15, children: [] }, { id: "acc.e2cdb2c0-8565-4991-a35a-d4596b0ddf45", type: "EXPENSE", name: "Software & Computer Peripherals", balance: 417.13, children: [] }, { id: "acc.96d5d00e-43f4-4d3a-b97b-fdf258c65514", type: "EXPENSE", name: "Printing, photocopying etc", balance: 55.93, children: [] }, { id: "acc.494dd64a-4fb3-42b8-be3e-8f3b59a2ef59", type: "EXPENSE", name: "Artists Administration Service", balance: 0, children: [] }, { id: "acc.1260446672238.35", type: "EXPENSE", name: "Stationery", balance: 0, children: [] }, { id: "acc.96d89d0d-5465-488b-b37f-d41ca114c5e6", type: "EXPENSE", name: "Mobile Telephone", balance: 41.19, children: [] }, { id: "acc.1260446672238.33", type: "EXPENSE", name: "Home Telephone", balance: 0, children: [] }, { id: "acc.1260446672238.38", type: "EXPENSE", name: "Postage/delivery", balance: 29.36, children: [] }] }, { id: "acc.b9c9bbc7-43df-472e-9ac8-c7c76f08f49a", type: "EXPENSES_FOLDER", name: "Instruments, Equipment Maintenance etc", balance: 1002.48, children: [{ id: "acc.1260446672238.32", type: "OTHER_EXPENSES", name: "Instrument Insurance", balance: 157.48, children: [] }, { id: "acc.2a1cca15-2868-4770-a3e7-d43a6268c6a1", type: "EXPENSE", name: "Instrument Repairs & Maintenance", balance: 845, children: [] }, { id: "acc.a908aee0-84fb-450a-916b-4cec25265aef", type: "EXPENSE", name: "Accessories & Replacement Parts", balance: 0, children: [] }] }, { id: "acc.a42cdd86-0d9e-4f3f-af0d-7c4525374731", type: "EXPENSES_FOLDER", name: "Motor Vehicle", balance: 0, children: [{ id: "acc.cb325e7e-0ce4-4c78-9cb4-20659df733a6", type: "EXPENSE", name: "Fuel and Oil", balance: 0, children: [] }] }, { id: "acc.4bdd9e26-ce64-4e7f-b46a-82ec9de06ded", type: "EXPENSES_FOLDER", name: "Other Travel", balance: 132.1, children: [{ id: "acc.77dd2142-f2de-4a2c-9247-061d0661bc0a", type: "EXPENSE", name: "Taxis", balance: 24.5, children: [] }, { id: "acc.2b54abdd-7ef5-43cd-bdb9-c8c981b59ff2", type: "EXPENSE", name: "Public Transport", balance: 107.6, children: [] }] }, { id: "acc.e4695b70-31fa-4e23-afd0-97335dcd5b9e", type: "EXPENSE", name: "Subsitence", balance: 0, children: [] }, { id: "acc.02d222bf-4dff-4308-afe9-69b93f412ada", type: "EXPENSE", name: "Hotel and Accomodation", balance: 0, children: [] }, { id: "acc.d61cd5b4-2c80-4ab8-93d0-9d5726bd253b", type: "EXPENSES_FOLDER", name: "Fees and Commission Paid", balance: 0, children: [{ id: "acc.1262189019758.7", type: "EXPENSE", name: "Pupils exam entry fees", balance: 0, children: [] }, { id: "acc.a7d7efd3-d0da-4704-babb-079b6077f3fe", type: "EXPENSE", name: "Audition, competition entry fees", balance: 0, children: [] }, { id: "acc.3b91ee4e-40a8-46d8-aa05-3afa5974b3ef", type: "EXPENSE", name: "Deputies, Other Musicians", balance: 0, children: [] }] }, { id: "acc.250d6872-6023-4599-a0b6-b7159eebbfa1", type: "EXPENSES_FOLDER", name: "Other Professional Expenses", balance: 1739.42, children: [{ id: "acc.b7315228-f85a-4ffb-9199-d1128a409e5f", type: "EXPENSE", name: "Promotion & Publicity", balance: 138.6, children: [] }, { id: "acc.69ca2005-d7a0-448b-b70c-dafb128a48ae", type: "EXPENSE", name: "Other Expenses", balance: 364.5, children: [] }, { id: "acc.dcd999d2-4e18-41be-b9cc-218d4034b88e", type: "EXPENSE", name: "Office Equipment, Furniture", balance: 0, children: [] }, { id: "acc.e0460706-d5c9-4c40-9d1e-0d2058864b92", type: "EXPENSE", name: "CDs, Dowloads etc", balance: 67.57, children: [] }, { id: "acc.1866df79-9e44-459a-a978-727904987469", type: "EXPENSE", name: "Professional Books, Magazines", balance: 104.01, children: [] }, { id: "acc.24c1651d-e7ae-48bc-a32d-311427e0fcea", type: "EXPENSE", name: "Professional Associations", balance: 272.17, children: [] }, { id: "acc.289ab0ac-b9d3-435e-ac82-9da9702b7d4b", type: "EXPENSE", name: "Tuition", balance: 470, children: [] }, { id: "acc.f24cf99b-6291-4b9f-821e-425f4909d4e1", type: "EXPENSE", name: "Scores, Manuscript Paper etc", balance: 215.32, children: [] }, { id: "acc.1af95953-56f0-455e-9d0a-7c4e0477cf0d", type: "EXPENSE", name: "Performance Clothing", balance: 0, children: [] }, { id: "acc.c0585577-535a-4ae2-a02b-e5b249f67c67", type: "EXPENSE", name: "Concerts, Shows etc", balance: 107.25, children: [] }] }, { id: "acc.1260446672222.24", type: "ADMIN", name: "Administrative Expenses", balance: 0, children: [] }, { id: "acc.1260446672238.26", type: "TRAVEL", name: "Travel and Subsistence Account", balance: -14.5, children: [] }, { id: "acc.1260446672238.28", type: "LEGAL", name: "Legal and Professional Costs Account", balance: 0, children: [] }, { id: "acc.1260446672238.36", type: "OTHER_EXPENSES", name: "Rent/Rates", balance: 0, children: [] }, { id: "acc.1262191376548.37", type: "EXPENSE", name: "Research", balance: 0, children: [] }, { id: "acc.1262191388329.38", type: "EXPENSE", name: "Professional Development", balance: 0, children: [] }, { id: "acc.1262192291558.52", type: "EXPENSE", name: "Professional Presentation", balance: 0, children: [] }, { id: "acc.1262193596634.72", type: "EXPENSE", name: "Subscriptions", balance: 0, children: [] }, { id: "acc.1262265941130.16", type: "EXPENSE", name: "Piano accompaniment", balance: 0, children: [] }, { id: "acc.1267370824329.1", type: "EXPENSE", name: "Cost of Sales", balance: 0, children: [] }] }];


function flatten(into, node){
    if(node == null) return into;
    if( Array.isArray(node) ) return node.reduce(flatten, into);
    into.push(node);
    return flatten(into, node.children);
}

var out = flatten([], users);
console.log(out + "flattened test")

/*==============*/

const users2 = [
    [{ id: 1, name: 'John' }, { id: 3, name: 'Wayne' }],
    [
        [
            { id: 7, name: 'Melissa' },
            { id: 2, name: 'David' }
        ],
    ],
];

const flattened2 = users2.flat(Infinity);

console.log(flattened2);