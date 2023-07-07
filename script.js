function printName(){
    console.log("my name is Angel");
}

function greetUser(userName){
    console.log("hello, " + userName);
}

function buyCoffee(dollars){
    const price = 4;
    const remainder = dollars - price;
    return remainder;
}

function myHobbies(hobbyArray){
    return hobbyArray;
}

function checkWeather(weatherCondition, temperature){
    hotAndHumid = "wear shorts and t shirt";
    rainyAndCold = "wear jeans and a coat";
    warmAndBreezy = "beautiful day! wear either shorts or jeans and either short sleeve or longsleeve" 
}

printName();

let userName = "IttzAngel";
greetUser(userName);

dollars = 10;
moneyLeft = buyCoffee(dollars);
console.log(moneyLeft);

const hobbyArray = ["Gaming", "Coding", "Gym"];
console.log(myHobbies(hobbyArray));

