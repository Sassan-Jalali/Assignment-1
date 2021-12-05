/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/


let blue = false;

const solution1 = document.getElementById ("answer-one")



const ChangeBgColor = () => {

  solution1.style.backgroundColor = "blue";
  
};

const ChangeBgBack = () => {

  solution1.style.backgroundColor = "white";
  
};


function taskOne() {
 console.log(blue)
 if (blue == false) {
  solution1.addEventListener("click", ChangeBgColor);
  blue=true
}
  else {
    solution1.addEventListener("click", ChangeBgBack);
    blue=false
  }
}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/



const numbers = [234, 986, 784];

const numbersLength = numbers.length;




function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  
 }




function taskTwo() {
  const randomnumber = getRndInteger(0, 1000);

  window.addEventListener("click", numbers.splice(1,0, randomnumber), console.log(numbers)
  )
  document.getElementById("answer-two").innerHTML = numbers;
  
}


/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

const date = new Date();

console.log(date);

var day = date.getDay();

console.log(day)


function taskThree() {
  if (day >= 1 && day < 6) {
    alert("FML");
  }

  else  { 
    alert("Woohooo it's weekend");
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
  try{

    let answer =  valueOne*valueTwo;
    if(isNaN(answer)) throw "Jag kan bara multiplicera nummer"

    else  alert("Produkten är: " + answer)

  }
  catch(err){
    alert("Jag kan bara multiplicera nummer")
  }
}

function taskFour() {
var numbers1 = prompt("Vänligen ange ett nummer")
var numbers2 = prompt("Vänligen ange ett andra nummer")
  multiplier(numbers1, numbers2);
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






function taskFive() {

  let i = 0;
  while (i <= fruits.length) { 
    

    if(fruits[i] === "apelsin" || fruits[i] === "päron") {
    
      trash.push(fruits[i]), console.log(trash)
     
     
    }
  
    else{
      eatable.push( fruits[i]), console.log(eatable)
      
      
    }
    i++
  }


document.getElementById("answer-five").innerHTML =("<b>Trash:</b>" + trash + "<br>" + "<b>Edible:</b>" + eatable);

/* Om jag inte sätter en </b> för att bryta bold markeringen så funkar formateringen som den ska, men när jag bryter
bold markeringen så flyttas texten helt, inte helt 100% varför. */
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


function taskSix() {
  let i = 0;

  for (let i = 0; i < persons.length; i++){

    if (persons[i].married == true && persons[i].age > 30){
      married.push(persons[i].name);
      overThirty.push(persons[i].name);
      console.log(married, overThirty);
    }
    else if (persons[i].married == true){
      married.push(persons[i].name);
      underThirty.push(persons[i].name);
      console.log(married,underThirty);
    }
    else if(persons[i].married == false && persons[i].age < 30 ) {
      notMarried.push(persons[i].name);
      underThirty.push(persons[i].name);
      console.log(notMarried,underThirty);

    }else{
      notMarried.push(persons[i].name);
      overThirty.push(persons[i].name);
      console.log(notMarried,overThirty);

    }

  }
    document.getElementById("answer-six").innerHTML= "<b>Gift:</b>" + married + "<br>" + "<b>Ogift:</b>" + 
    notMarried + "<br>" + "<b>Över 30</b>: " + overThirty + "<br>" + "<b>Under 30:</b>" + underThirty;

    /* Samma problem här, utan bold så funkar formateringen som den ska, med bold så flyttas texten rätt konstigt.*/
}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,<br> totam rem aperiam,<br> eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,<br> sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,<br> qui dolorem ipsum quia dolor sit amet,<br> consectetur,<br> adipisci velit,<br> sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,<br> quis nostrum exercitationem ullam corporis suscipit laboriosam,<br> nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,<br> vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  document.getElementById("answer-seven").innerHTML = (addMeSomeLineBreaks)
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/



function taskEight() {
  var x = document.getElementById("card-eight");
  window.addEventListener("click", taskEight, x.style.display = "none") 
  
  setTimeout(() => {
    x.style.display = "block";
  }, 3000)
}



/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

/*let late = true;

const answercont = document.getElementById("answer-container")

const ChangeAllBgColorBlue = () => {

  answercont.style.backgroundColor = "blue"
}



const ChangeAllBgColorRed = () => {

  
};

const hour = date.getHours();

console.log(hour)


function taskNine() {
  console.log(late)
  if(late == true)

  answercont.addEventListener("click",ChangeAllBgColorBlue);
  late=false

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

function calculator(valueOne, valueTwo, operator) {
  alert("Replace this alert with a solution");
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator();
}
