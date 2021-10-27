/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let blue = false;

function taskOne() {
    if(blue){ 
    //the first thing that happens if blue = true is that we give it the new value = false.
    blue = false;
    //The second thing is that we target answer-one and change background-color to white.
    document.getElementById("answer-one").style.backgroundColor = "white";
  }
  else{
    //the first thing that happens when blue = false is that we give it the new value = true. 
    blue = true;
    //The second thing is that we target answer-one and change background-color to blue.
    document.getElementById("answer-one").style.backgroundColor = "blue";
  }
}
/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
  //First I declare a variable randomNumber and assign it a random number between 1-1000.
  const randomNumber = Math.floor((Math.random() * 1000) + 1);
  //I then use method push to add my number to my numbers-array.
  numbers.push(randomNumber);
  //Last I target my answer-two element and place the numbers-array within it.
  document.getElementById("answer-two").innerHTML =  numbers;
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
  //Inside the function I declare one variable date and assign a Date-Object to it. 
  //I then declare another variable that I give the value of what day it is. 
  let date = new Date();
  let day = date.getDay();
  //If day is equal to 6 which is saturday OR equal to 0 which is Sunday an alert-box with the text
  //Woohoo it's weekend shows up.
  if(day === 6 || day === 0){
    alert("Woohooo it's weekend");
  }
  //If day is not equal to 6 or 0 then an alert-box with the text FML shows up. 
  else{
    alert("FML");
  }
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {
//I use typeof to check that valueOne and valueTwo are valid numbers.
  if(typeof valueOne == 'number' && typeof valueTwo == 'number'){
    //If they are valid numbers I multiply them and alert the result.
    let sum = valueOne * valueTwo;
    alert("Produkten är: " + sum);
  }
  //If they are not numbers I alert a fail-message.
  else{
    alert("Jag kan bara multiplicera nummer");
  }
}

function taskFour() {
  multiplier(5, "Emma");
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];

const eatable = [];
const trash = [];

//Iterate over the fruits-array and call the function handleFruit.
fruits.forEach(handleFruit);

function handleFruit(fruit) {
  if(fruit === "apelsin" || fruit === "päron"){
    //If the fruit is an orange or a pear, we push the fruit to the trash-array.
    trash.push(fruit)
  }
  else{
    //Otherwise we push the fruit to the eatable-array.
    eatable.push(fruit)
  }
}

function taskFive() {
  document.getElementById("answer-five").innerHTML = "<b>Ätligt:</b> " +  eatable + "<br>" + "<b>Skräp:</b> " + trash;
}


/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];
//Iterate over the persons-array and call the function checkAgeAndMarriage.
persons.forEach(checkAgeAndMarriage);

function checkAgeAndMarriage(person){
  if(person.age >= 30){
    //If the persons age is greater than or equal to 30 then we push that persons name to the overThirty-array.
    overThirty.push(person.name);
  }else{
    //Otherwise we push persons name to the underThirty-array.
    underThirty.push(person.name);
  }
  if(person.married){
    //If the person is married we push the persons name to the married-array.
    married.push(person.name);
  }else{
    //Otherwise we push the persons name to the not married-array.
    notMarried.push(person.name);
  }
}

function taskSix() {
  alert("Over thirty: " + overThirty);
  alert("Under thirty: " + underThirty);
  alert("Married: " + married);
  alert("Not married: " + notMarried);
}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
  //I first declare a variable and give it the value of a empty text string. This variable will represent the
  //mega string with line-breaks.
  let lineBreaks =""

function taskSeven() {
  //Iterate over all the characters in the mega string. 
  for(let x of addMeSomeLineBreaks){
    if(x ===","){
      //If the character is a comma sign then we add a line-break element to our lineBreaks string.
      lineBreaks += "<br>";
    }else{
      //Otherwise we just add the character to our lineBreaks string.
      lineBreaks += x;
    }
  }
  document.getElementById("answer-seven").innerHTML = lineBreaks;
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

function taskEight() {
  /*
  Start off by targeting the element with id card-eight. Store it in a constant
  div.
  */
  const div = document.getElementById("card-eight");
  //Hide the div
  div.style.display = "none";
  /*
  After 3000 milliseconds, a function will be triggered.
  This functions displays the div once again.
  */
  setTimeout(() => {
    div.style.display = "block";
  }, 3000);
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() {
  //I create a variable representing the current date
  const date = new Date();
  //A variable hour represents the current hour
  const hour = date.getHours();
  //A variable minute represents the current minute
  const minute = date.getMinutes();
  //A variable backgroundColor will store the color that we later use for our div-elements
  let backgroundColor;

  if(hour < 17 || (hour === 17 && minute === 0)) {
    //We have two cases when the background-color should be red:
    //- The hour is 0-16 (00:00 - 16:59 should all result in a red background-color)
    //- The hour is 17 and the minute is 0 (17:00 should also result in a red background-color)
    backgroundColor = "red";
  } else {
    //Only one case should result in a blue background-color:
    //- The hour is greater than or equal to 17 (17:01 - 23:59). Remember that 17:00 is caught by the if statement.
    backgroundColor = "blue";
  }

  //We target all div-elements with the class answer-container
  let divar = document.querySelectorAll(".answer-container");
  //We iterate over each div and set the background-color
  for (let i = 0; i < divar.length; i++) {
    divar[i].style.backgroundColor = backgroundColor;
  }
}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator){
  //First I declare a variable result without a value. So I can use it in both my if and switch.
  //Here we make use of the fact that javascript isn't type safe. That is, the result can be either
  //the string "Något är fel" or a number representing the result of an arithmetic operation.
  let result;

  if (typeof valueOne != 'number' || typeof valueTwo != 'number') {
    //If typeof valueOne OR typeof valueTwo is not a number the result variable will be the string "Något är fel".
    result = "Något är fel";
  } else {
    //Otherwise we can go on and choose add, subtract, divide or multiply our two numbers depending on the operator.
    //Since we only support four operators, an if statement would be sufficient. However, if we want to expand
    //this in the future to support more operators, a switch statement seems more scalable.
    switch(operator) {
      case "add":
        result = valueOne + valueTwo;
        break;
      case "subtract":
        result = valueOne - valueTwo;
        break;
      case "divide":
        result = valueOne / valueTwo;
        break;
      case "multiply":
        result = valueOne * valueTwo;
        break;
      default:
        //If trying to pick something else then subtract, divide, add or multiply we will give the result variable
        //the string "Något är fel".
        result = "Något är fel";
    }
  }
  alert(result);
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator("Emma", 2, "add");
}

const arr = [1,2,3];
alert(arr.sum());
