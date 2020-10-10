document.getElementById("start").addEventListener("click", takeQuiz);

var questions = [
    {
        q: 'Commonly used data types DO NOT include __________.',
        b: ["strings", "booleans", "alerts", "numbers"],
        a: 2
    },

    {
        q: 'Arrays in Java Script can be used to store _________.',
        b: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        a: 3
    },
    {
        q: 'String values must be enclosed within _________ when being assigned to variables.',
        b: ["commas", "curly brackets", "parenthesis", "square brackets"],
        a: 2
    },
    {
        q: 'A very useful tool used during development for printing content to the debugger is:',
        b: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        a: 4
    },
]

var currentQuestion = 0



var clearContent = function () {
    contentEl.innerHTML = ""
};

function takeQuiz() {
    document.getElementById("startQuiz").style = "display: none";
    document.getElementById("quizSection").style = "display:block";
    document.getElementById("questionDiv").style = "display:block";

    displayQuestion(currentQuestion)
    console.log(currentQuestion)

    // Quiz Questions Go Here: Create Array!
    //var questions = [

    //new Question("A very useful tool used during development for printing content to the debugger is:", ["JavaScript", "terminal/bash","for loops", "console.log"], "console.log"),
    //];




    // get 2nd object: questions[1].q

    //We Start the game with a score of 0.
    var score = 0;

    //Loop over every question object

    //for (let i = 0; i < questions.length; i++) {


    //var h1 = document.querySelector("#question");
    //question.innerHTML = questions [i].q;
    //console.log(answer);

    //var choices = questions [i].b;

    //console.log(questions);

    //var button = document.createElement("button");
    //document.getElementById("choice").appendChild(button);
    //button.innerHTML = choices;
    //button.style = "display:block;"

    //var answer= choice.onclick;
    //console.log(answer);
    //button.addEventListener('click',function() {
    //evAnswer(i===question.a)
    //})

    //}
}

function displayQuestion(index) {
    var question = questions[index]
    document.getElementById("questionHeader").textContent = question.q
    document.getElementById("choiceDiv").innerHTML = ''
    for (let i = 0; i < question.b.length; i++) {
        var button = document.createElement("button")
        button.textContent = question.b[i]
        button.style.display = "block"
        button.addEventListener("click", function () {
            evaluateAnswer(i === question.a)

        })
        document.getElementById("choiceDiv").appendChild(button)


    }

    //console.log(question)
    //evaluateAnswer()
}

function evaluateAnswer(correct) {
    console.log(correct)
    currentQuestion++



    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion)
    } else {
        results ()
        console.log("You've finished!")
    }
};

function results () {
//change display

}

       //(questions[i]);
        //if (
           // (answer === questions[i].a) 
       //) {
           //Increase score
            //score++;
           //console.log('Correct!');
       // } else {
         //console.log('Wrong!');
       //}
  // };



   // }



    //var question1 = "Commonly used data types DO NOT include __________.";
    //var listQuestions =["strings", "booleans","alerts", "numbers"]; 
    //var answer = "alerts"; 

    //var h1 = document.querySelector("#question");
    //h1.innerHTML = question1;

    //for (var i = 0; i < listQuestions.length; i++) {

           //var button = document.createElement("button");
           //document.getElementById("choice").appendChild(button);
           //button.innerHTML = listQuestions [i];
           //button.style = "display:block;"











//var quiz = new Quiz(questions);
