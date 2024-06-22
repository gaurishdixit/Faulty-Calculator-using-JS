/*Create a faulty calculator using Java Script

This faulty calculator+does following:-
a. It takes two number as input from user.
b. It performs wrong operations as follows:-

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operations 10% of the time

*/
let num = Math.random();
console.log(num);

let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter second number");

let obj = {

    "+" : "-",
    "*" : "/",
    "-" : "*",
    "/" : "+"
}
if (num < 0.5) {
    console.log(`${a} ${b} ${c}`);
    alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);
    
    
}

else {
    b = obj[b];
    console.log(`${a} ${b} ${c}`);
    alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);


}