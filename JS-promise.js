let x = new Promise( (resolve, reject) => {
    if (1+1 === 2) {
        resolve("it is resolved");
    } else {
        reject('It was falso so it was rejected');
    }
});

x.then((msg) => {
    console.log(`${msg} Then it was called`);
}).catch((msg) => {
    console.log(`${msg} then it was cought`);
})

/*Promise.all([]).then(()=>{}) runs several functions at once. Separated by comma*/

function makeRequest(location) {
    return new Promise( (resolve,reject) => {
        if (location === 'google') {
            resolve('first resolve');
        } else {
            reject('rejected')
        }
    })
}

function processRequest (response) {
    return new Promise( (resolve,reject) => {
        resolve('second resolve + ' + response) 
    })
}
//You can call the 2 above functions by doing async function using '.then'
// makeRequest('googe').then( (response) => {
//     console.log('running')
//     return processRequest(response)
// }).then( (proposedResponse) => {
//     console.log(proposedResponse);
// }).catch( (err) => {
//     console.log(err);
// });

//or you can use async and await
async function runCodewithAsync() {
    try {
        let response = await makeRequest('google');
        let proposedResponse = await processRequest(response);
        console.log(proposedResponse);
    } catch (err) {
        console.log(err);
    }
}
runCodewithAsync();

//EXTRACT JSON OBJECT from FETCH
async function fetchMoviesJSON() {
    const response = await fetch('/movies');
    const movies = await response.json();
    return movies;
}
function getMovies(movies) {
    movies.forEach( movie => {
        
    })
}
fetchMoviesJSON().then(movies => {
    movies; // fetched movies
});