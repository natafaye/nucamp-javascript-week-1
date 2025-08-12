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

