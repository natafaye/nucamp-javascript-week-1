let friend = "fish"
// let friends = "shark" NO EFFECT ON LINE 3
friend = "hippo"


friend += "fish" 
// SIMPLIFIES TO: friend = friend + fish


let fee = 1.25
let total = 7.99 + fee



let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

// Puzzle Pieces:
// dogName, likesFetch, sheds, pottyTrained, likesSnuggles
// () && || !

// He wants it to be potty trained
// He doesn’t want it to shed
// He wants it to like to snuggle or like to play fetch (or both)


// Milo
dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

let shouldGetMilo = pottyTrained && !sheds && (likesSnuggles || likesFetch)


// Penny
dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

let shouldGetPenny = pottyTrained && !sheds && (likesSnuggles || likesFetch)


console.log("Milo: " + shouldGetMilo)
console.log("Penny: " + shouldGetPenny)


let age = 40
let country = "USA"
let money = 1


if((age >= 21 || country === "Germany") && money >= 4.99) {
    console.log("Here's a beer!")
} else {
    console.log("You can't have one")
}


// let cost = 100
// const numberOfPeople = prompt("How many people are in your group?") // "70"

// // If you have more than 10 people -20$
// // If you have more than 5 people -10$
// // If you have more than 50 people -50$

// if(numberOfPeople > 50) {
//     cost -= 50
// } else if(numberOfPeople > 10) { //  && numberOfPeople <= 50
//     cost -= 20 // cost = cost - 20
// } else if(numberOfPeople > 5) { // && numberOfPeople <= 10
//     cost -= 10
// } else { // we can assume that you have 5 or less poeple in your group
//     alert("Wow you don't have a lot of friends")
// }

// alert("Your cost is $" + cost)

// 2 people = $100
// 7 people = $90
// 12 people = $80
// 70 poeple = $50




// Save the contact

// parameter = variable that's made by the function

function cookInOven(food, temperature) {
  let cookedFood = "Cooked " + food + " at " + temperature
  return cookedFood
}

let cookedRice = cookInOven("rice", 200) // function simplifies to whatever value it returns
console.log("This is what's for dinner: " + cookedRice)
