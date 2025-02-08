// alert('hi')
// alert("goodbye")
alert('I cant "do" this')

// shorthand

let number = 3

number++ // number = number + 1
number += 2 // number = number + 2


let isSweet = true
let hasDairy = false
let isCooked = true
let isHot = false

isSweet && (hasDairy || isCooked && !isHot)


// Single equals =
// Statement
// number = 3
// The number IS three now
// We are making it three

// Triple equals ===
// Question
// number === 3
// Is the number three?
// This gives true if it is, and false if it is not



let sunny = true
let rainy = true

if (sunny) {
    // detour code
    // maybe run
    alert("Wear a hat")
}

let apple = 3

// saving a contact in your phone
// declaring the function
function cookInOven() {
    // saved code that we can trigger anytime we want
}

function putKidsToBed() {
    alert("GO TO BED")
    alert("GO TO BED")
    alert("GO TO BED")
    alert("GO TO BED")
    alert("GO TO BED")
    alert("GO TO BED")
}

// trigger that function
// calling the function
putKidsToBed()
putKidsToBed()




function cookInOven(food, temperature) { // let food = "rice"; let temperature = 200
    let cookedFood = "Cooked " + food + " at " + temperature
    return cookedFood
}

// Another way to write basically the same thing
const cookInOven = (food, temperature) => { // let food = "rice"; let temperature = 200
    let cookedFood = "Cooked " + food + " at " + temperature
    return cookedFood
    alert("This code will never run")
}

let cookedRice = cookInOven("rice", 200) // WAIT
console.log(cookedRice)
