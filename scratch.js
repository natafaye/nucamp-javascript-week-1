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







let isAdult = prompt("Are you an adult?")

if(isAdult !== "yes") {
    alert("You're a kid!")
}

let hasTomatoes = true
let spicy = false

if(spicy && !hasTomatoes) {
    alert("yummy!")
}

let racers = ["Kyle", "Natalie"]

// If I'm not winning, make me win
if(racers[0] !== "Natalie") {
    racers.unshift("Natalie")
}

// ! NOT kind of means I need this to be false


// ! is like a weird math thing
// 1 + 1 = 2
// 2 + 2 = 4
// 4 - 3 = 1

// -1 * (2 + 1) = -3
// !false = true

// true && true = true
// false || true = true
// !false = true
// !true = false

//let cardApproved = ASK API TO RUN CREDIT CARD


// All the same

if(!cardApproved) {
    alert("Your card was declined! Try a different card")
}

// These are weird, professionals don't do this
if(cardApproved === false) {
    alert("Your card was declined! Try a different card")
}

if(cardApproved !== true) {
    alert("Your card was declined! Try a different card")
}




// This is a weird thing to do "The red car was red and also, did you hear it was red?"
//if(isSpicy === true) {}
// The normal way
//if(isSpicy)



let cart = []

if(!cart.length) {
    alert("You can't buy nothing!")
}


let showSidebar = false

function toggleSidebar() {
    showSidebar = !showSidebar // flip showSidebar to the opposite of what it was before
}

// Same thing
nucamp !== "fdsfds"
!(nucamp === "fdsfds")