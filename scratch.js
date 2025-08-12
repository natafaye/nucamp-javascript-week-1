//const myFavoriteFood = prompt("What's your favorite food?")
// const is actually considered the default in JS
// because it helps prevent bugs and it's more readable

// A const variable and a constant are not the same thing
// const it won't change later
// constant it will always have this exact value

// if(myFavoriteFood === "spaghetti") {
//     alert("Your favorite is spaghetti")
// }

// One equals = is a command
// Your favorite food is now spaghetti

// Triple equals === is a question
// Is your favorite food spaghetti?

let count = 3

count = 4

count += 5 // count = count + 5

let friend = "fish"
friend = "hippo"

friend += "fish" // friend = "hippo" + "fish"


let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

// Milo
dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

// He wants it to be potty trained
// He doesn’t want it to shed
// He wants it to like to snuggle or like to play fetch (or both)

// && || ! ()
// dogName, likesFetch, sheds, pottyTrained, likesSnuggles

const rafaelShouldGetMilo = pottyTrained && !sheds && (likesFetch || likesSnuggles)

console.log("Should I get Milo", rafaelShouldGetMilo)

// Why parenthesis? Because && is greedy (or is higher precedence in the order of operations)
// (3 + 4) * 5 <-- 35 or 23

// Penny
dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

const rafaelShouldGetPenny = pottyTrained && !sheds && (likesFetch || likesSnuggles)

console.log("Should I get Penny", rafaelShouldGetPenny)


// Making the function (saving it) technical term is declaring it
function putKidsToBed() {
    // the code to run when this function is called
    // alert("Go to bed!")
    // alert("Go to bed!")
    // alert("Go to bed!")
    // alert("Go to bed!")
    // alert("Go to bed!")
}

// trigger / call / run
putKidsToBed()
putKidsToBed()


// parameters are just variables that the function makes for you

function cookInOven(food, temperature) { // let food = FIRST THING; let temperature = SECOND THING
    let cookedFood = "Cooked " + food + " at " + temperature
    return cookedFood // return always simplifies down to a value then returns that
}

// The way code runs it simplifies the right hand side of the equal sign to a value
// a call to a function simplifies to whatever that function returns
// parameters will simplify to a value then that value gets passed in
let cookedRice = cookInOven("rice", 200)
let cookedSomethingElse = cookInOven("chicken", 450)
console.log(cookedRice)





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