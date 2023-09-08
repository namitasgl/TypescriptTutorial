console.log("Typescript Hello World");
console.log("Welcome");
// Variable declaration with strong typed
let firstName = "Namita";
let st0atus = true;
// reference variable to avoid clunky string concatenation -> using backticks
console.log(` Hello ${firstName} status is ${st0atus}`);
//For Loops 2 way
//1st way
for (let count = 0; count < 3; count++) {
    console.log(`count ${count}`);
}
let values = ["Namita", "Gagan", "Muskaan"];
for (let i = 0; i < values.length; i++) {
    console.log(` Name : ${values[i]}`);
}
//Arrays growable/ dynamic
values.push("Nancy");
//2nd way for loops for array
console.log(" Simple for loop for Arrays");
for (let val of values) {
    // conditionals 
    if (val == 'Namita') {
        console.log(` Name : ${val} is our code writter`);
    }
    else
        console.log(` Name : ${val}`);
}
