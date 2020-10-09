//Variables declared by ID
var start = document.getElementById("start")
var h1 = document.getElementById("h1");
var quizContent = document.getElementById ("quizContent");
var welcome = document.getElementById ("welcome");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var highScores = document.getElementById("highScores");
var timer = document.getElementById("timer");
var result = document.getElementById("result");
var btn = document.getElementById ("btn");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

//Questions in an array
var questions = [
    {
        question : "Commonly used data types DO NOT include __________.",
        choice1 :  "strings",
        choice2 :  "booleans",
        choice3 :  "alerts",
        choice4 :  "numbers",
        answer : choice3,
    },
    {
        question : "Arrays in Java Script can be used to store _________.",
        choice1 :  "numbers and strings",
        choice2 :  "other arrays",
        choice3 :  "booleans",
        choice4 :  "all of the above",
        answer : choice4,
    },
    {
        question : "String values must be enclosed within _________ when being assigned to variables.",
        choice1 :  "commas",
        choice2 :  "curly brackets",
        choice3 :  "quotes",
        choice4 :  "parenthesis",
        answer : choice4,
    },
    {
        question : "The condition in an if/else statement is enclosed with _________.",
        choice1 :  "quotes",
        choice2 :  "curly brackets",
        choice3 :  "parenthesis",
        choice4 :  "square brackets",
        answer : choice2,
    },
    {
        question : "A very useful tool used during development for printing content to the debugger is:",
        choice1 :  "JavaScript",
        choice2 :  "terminal/bash",
        choice3 :  "for loops",
        choice4 :  "console.log",
        answer : choice4,
    },
]

var lastQuestion = questions.length - 1;
var runningQuestion = 0;

function runQuestion(){
    //welcome.style.display = "none";
    quizContent.style.display = "block";

    var q = questions[runningQuestion];

    choice1.innerHTML = q.choice1;

    choice2.innerHTML = q.choice2;

    choice3.innerHTML = q.choice3;

    choice4.innerHTML = q.choice4;
}


runQuestion();

start.addEventListener("click", runQuestion);


