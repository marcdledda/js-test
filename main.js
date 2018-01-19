console.log("Start JS");

var phrase = "Mr. and Mrs. Dursley of number four Privet Drive, were proud to say that they were perfectly normal, thank you very much.";
var test = phrase.match(/[aeiou]/ig);
console.log(test);


// Seperate Exercises (SE-1)
let skyIsBlue = true;
if (skyIsBlue){
    console.log("Ye, sky is indeed blue");
} else {
    console.log("Nah, sky is green.");
}

// (SE-2)
let jedi = ["Skywalker", "Yoda", "Obi-wan", "Qui-Gon", "Windu"];
let jediText = "";

jedi.push("Winnie");
jedi.unshift("( ͡° ͜ʖ ͡°)")

console.log("How many jedis there are:", jedi.length);
for (let x = 0; x < jedi.length; x++){
    jediText += `<li>${jedi[x]}</li>`
}
document.getElementById("el-demo").innerHTML = jediText;

// (SE-3)
let colors = ["RED", "YELLOW", "BLUE", "GREEN", "ORANGE", "PURPLE"];
let reverseColors = colors.reverse();
console.log("Reverse rainbow ", reverseColors);
let sortedColors = colors.sort();
console.log("Alphabetical Sorted rainbow ", sortedColors);

// (SE-4)
let numbers = [2, 4, 100, 33, 54, 1, 6];
console.log("Numbers:", numbers);
let sortedNumbers = numbers.sort(function(first, second){
    return first - second;
})
console.log("Sorted Numbers: ", sortedNumbers);

// (SE-5)
let fruits = ["Carrot", "Watermelon", "Apple", "Orange", "Banana"];
console.log(fruits);
let notFruits = fruits.slice(2);
console.log("Removed: ", notFruits);

// (SE-6)
let evenOdds = ["middle"];
for (let i = 100; i >=0; i--){
    if (i % 2 === 0){
        evenOdds.unshift(i);
    } else {
        evenOdds.push(i);
    }
}
console.log(evenOdds);