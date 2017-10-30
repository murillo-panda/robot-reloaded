var robot = require("robotjs");


// var myVar = setInterval(typeSomething, 60000);
var myVar = setInterval(moveMouse, 2000);


robot.setMouseDelay(2);
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
var counter = 0;

function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function incrementCounter(){
  return counter = counter + 1;
}

function moveMouse(){
  incrementCounter();
  robot.moveMouse(randomNumber(1, width), randomNumber(1, height));
}

function typeSomething(message){
  incrementCounter();
  robot.typeString('IDLE TIME: '+ counter);
}
