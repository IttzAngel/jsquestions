function printName() {
  console.log("my name is Angel");
}

function greetUser(userName) {
  console.log("hello, " + userName);
}

function buyCoffee(dollars) {
  const price = 4;
  const remainder = dollars - price;
  return remainder;
}

function myHobbies(hobbyArray) {
  return hobbyArray;
}

function checkWeather(weatherCondition, temperature) {
  if (weatherCondition === "rain") {
    if (temperature >= 40) {
      return "its a little warmer, but be dressed to get wet";
    } else {
      return "it is freezing, get your booty inside or dress warm";
    }
  } else if (weatherCondition === "sun") {
    if (temperature >= 70) {
      return "it is hot, wear a t shirt and shorts";
    } else {
      return "it is fine to wear pants, just be prepared in case of humidity";
    }
  } else if (weatherCondition === "humid") {
    if (temperature >= 80) {
      return "stay inside and dont even bother with this heat, but drink a lot of water";
    } else {
      return "slightly cooler, but be careful";
    }
  } else {
    return "that weather does not exist dummy";
  }
}

function areaOfTriangle(base, height){
  const area = (base * height) / 2;
  return area;
}

function diceRoller(){
  min = 2;
  max = 12;
  result = Math.floor(Math.random() * (max - min)) + min;
  return result;
}

function helloAliyahorHakeem(){}

function getInitials(){}

function printFinalPrice(priceOfProduct, discountAmount){
  f
}

printName();

userName = "IttzAngel";
greetUser(userName);

dollars = 10;
moneyLeft = buyCoffee(dollars);
console.log(moneyLeft);

hobbyArray = ["Gaming", "Coding", "Gym"];
console.log(myHobbies(hobbyArray));

console.log(checkWeather("sun", 90));

console.log(areaOfTriangle(10, 5));

console.log(diceRoller());

// let car = "Honda";

const car = {type:"Honda", model:"Civic", color:"Gold"};

car.start = function (){
  console.log("car goes vroom vroom");
}

car.drive = function (){
  console.log("WE NEED TO GO FAST");
}

car.brake = function (){
  console.log("AHHHHHHHHHHHH SLOW DOWN");
}

car.start();

car.drive();

car.brake();