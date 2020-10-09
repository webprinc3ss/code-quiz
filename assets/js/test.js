document.getElementById("start").addEventListener("click", takeQuiz);



function takeQuiz() {
    document.getElementById("startQuiz").style = "display: none";
    document.getElementById("takeQuiz").style = "display:block";
    document.getElementById("quizQuestions").style = "display:block";


    var question1 = "Commonly used data types DO NOT include __________.";
    var listQuestions =["strings", "booleans","alerts", "numbers"]; 
    //var answer = "alerts"; 
    
    var h1 = document.querySelector("#question");
    h1.innerHTML = question1;

    for (var i = 0; i < listQuestions.length; i++) {
           
           var button = document.createElement("button");
           document.getElementById("choice").appendChild(button);
           button.innerHTML = listQuestions [i];
           button.style = "display:block;"
           
           

           
           
           
        }
    }

  // Quiz Questions Go Here: Create Array!
  //var questions = [
    //new Question("Commonly used data types DO NOT include __________.", ["strings", "booleans","alerts", "numbers"], "alerts"),
    //new Question("Arrays in Java Script can be used to store _________.", ["numbers and strings", "other arrays","booleans", "all of the above"], "all of the above"),
    //new Question("String values must be enclosed within _________ when being assigned to variables.", ["commas", "curly brackets","quotes", "parenthesis"], "parenthesis"),
    //new Question("The condition in an if/else statement is enclosed with _________.", ["quotes", "curly brackets","parenthesis", "square brackets"], "curly brackets"),
    //new Question("A very useful tool used during development for printing content to the debugger is:", ["JavaScript", "terminal/bash","for loops", "console.log"], "console.log"),
//];

//var quiz = new Quiz(questions);
