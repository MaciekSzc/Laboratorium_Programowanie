// Zadanie 1

let a = 20;
let b = 10;

// Dodawanie
let add = a + b;
console.log("Wynik dodawania:", add);
document.getElementById("addition").innerHTML = "Wynik dodawania: " + add;

// Odejmowanie
let subtract = a - b;
console.log("Wynik odejmowania:", subtract);
document.getElementById("subtraction").innerHTML = "Wynik odejmowania: " + subtract;

// Mnożenie
let multiply = a * b;
console.log("Wynik mnożenia:", multiply);
document.getElementById("multiplication").innerHTML = "Wynik mnożenia: " + multiply;

// Dzielenie
let divide = a / b;
console.log("Wynik dzielenia:", divide);
document.getElementById("division").innerHTML = "Wynik dzielenia: " + divide;


// Zadanie 2

let a = 5;
let b = 7;
let c = 9;


let p = (a + b + c) / 2;
let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));


console.log("Długości boków trójkąta: a =", a, "b =", b, "c =", c);
console.log("Pole trójkąta wynosi:", area);


document.getElementById("sides").innerHTML = "Długości boków trójkąta: a = " + a + ", b = " + b + ", c = " + c;
document.getElementById("area").innerHTML = "Pole trójkąta wynosi: " + area;


// Zadanie 3


let n = 10;
let randomNumber = Math.ceil(Math.random() * n);


let guess = prompt("Zgadnij liczbę całkowitą między 1 a 10");


if (guess == randomNumber) {
  console.log("Zgadłeś liczbę:", randomNumber);
  document.getElementById("result").innerHTML = "Zgadłeś liczbę: " + randomNumber;
} else {
  console.log("Niestety, nie zgadłeś. Szukana liczba to:", randomNumber);
  document.getElementById("result").innerHTML = "Niestety, nie zgadłeś. Szukana liczba to: " + randomNumber;




}


//Zadanie 4



const num1 = parseFloat(prompt("Podaj pierwszą liczbę: "));
const num2 = parseFloat(prompt("Podaj drugą liczbę: "));
const num3 = parseFloat(prompt("Podaj trzecią liczbę: "));

if (num1 >= num2 && num1 >= num3) {
  document.getElementById("addr").innerHTML = "Pierwsza liczba jest największa: " + num1;
} else if (num2 >= num1 && num2 >= num3) {
  document.getElementById("addr").innerHTML = "Druga liczba jest największa: " + num2;
} else {
  document.getElementById("addr").innerHTML = "Trzecia liczba jest największa: " + num3;
}


//zad5

function najwiekszyWspolnyDzielnik(a, b) {
  let t;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
}

const num1 = parseInt(prompt("Podaj pierwszą liczbę: "));
const num2 = parseInt(prompt("Podaj drugą liczbę: "));

const nwd = najwiekszyWspolnyDzielnik(num1, num2);

console.log("Największy wspólny dzielnik liczb " + num1 + " i " + num2 + " wynosi " + nwd + ".");


  //Zadanie 6

  const student1 = {
    imie: "Michał",
    nazwisko: "Lecina",
    wiek: 45,
  };
  
  const student2 = {
    imie: "Klara",
    nazwisko: "Bebch",
    wiek: 11
  };
  
  const student3 = {
    imie: "Fredi",
    nazwisko: "Kamionka",
    wiek: 46,
  };
  
  
  
  student1.nrIndeksu = 12345;
  student2.nrIndeksu = 23456;
  student3.nrIndeksu = 34567;
  
  
  
  console.log(student1.imie);
  console.log(student2.nazwisko);
  console.log(student3.wiek);


 



