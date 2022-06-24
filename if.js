//assigning a variable value to another variable,
//longhand
let variable1; //undefined
var func = () => {
    if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
        let variable2 = variable1;
        return variable2;
    }
}
func();
//shorthand
let test1;
let test2 = test1 || 'bar'; //if test1 is undefined, assign 'bar'

let test3 = 'foo';
let test4 = test3 || 'bar'; //if test3 is not undefined, assign 'foo' OR 'bar'



//longhand 
    //if (likeJavaScript === true)
    //if ( a !== true )
//shorthand 
    //if (likeJavaScript)
    //if ( !a )
//EXAMPLE
    // let dbHost;
    // if (process.env.DB_HOST) {
    //   dbHost = process.env.DB_HOST;
    // } else {
    //   dbHost = 'localhost';
    // }
//SHORTHAND
    // const dbHost = process.env.DB_HOST || 'localhost';




//Decimal base exponents - fancy way to write numbers without the trailing zeros
//longhand 
    // for (let i = 0; i < 10000; i++) {}
//shorthand 
    // for (let i = 0; i< 1e7; i++) {}

