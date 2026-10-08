// Check Person is adult or not

const age = 18
if (age >= 18) {
    console.log("adult")
} else {
    console.log("not adult")
}


// Check Person is eligible for voting
const voting = 18
if (voting >= 18) {
    console.log("eligible")
} else {
    console.log("not eligible")
}

// Check number is even or not
let num = 4
if (num % 2 == 0) {
    console.log("even")
} else {
    console.log("odd")
}

// Check number is positive, negetive & zero
function checkNum(num) {
    if (num === 0) {
        return "Zero";
    } else if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkNum(0))
// console.log(checkNum(4))
// console.log(checkNum(7))


// check number is buzz and not buzz
let buzz = 8
if (buzz % 7 === 0 || buzz % 10 === 7) {
    console.log("buzz no.")
} else {
    console.log("not buzz no.")
}


// chech Triangle is valid ya not valid
let a = 4
let b = 4
let c = 3
if (a + b > c && a + c > b && b + c > a) {
    console.log("valid")
} else (
    console.log("not valid")
)

// cheak vowel ya noe vowel

let ch = 'y'
if ('aeiouAEIOU'.includes(ch)) console.log('vowel')
else (
    console.log("not vowel"))


// find three largest number 
let x = 10, y = 20, z = 15;
if (x >= y && x >= z) 
    console.log("largest: " + x);
else if (y >= x && y >= z) 
    console.log("largest: " + y);
else
     console.log("largest: " + z);



//  check grade 
let marks = 85;
if(marks >= 90) 
    console.log("A+");
else if(marks >= 80)
     console.log("A");
else if(marks >= 70)
     console.log("B");
else if(marks >= 60) 
    console.log("C");
else if(marks >= 50)
     console.log("D");
else 
    console.log("Fail");



// check binary Number

// let bin = 10101;
// if(/^[01]+$/.test(bin)) 
//     console.log("binary");
// else
//      console.log("not binary");