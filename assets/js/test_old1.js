document.getElementById("start").addEventListener("click", takeQuiz);

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

function takeQuiz(questions) {
    document.getElementById("startQuiz").style = "display: none";
    document.getElementById("takeQuiz").style = "display:block";
    document.getElementById("quizQuestions").style = "display:block";

    // show question
    document.getElementById("question");
    question.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess("1", choices[i]);

  }

}




  // Quiz Questions Go Here: Create Array!
  var questions = [
    new Question("Commonly used data types DO NOT include __________.", ["strings", "booleans","alerts", "numbers"], "alerts"),
    new Question("Arrays in Java Script can be used to store _________.", ["numbers and strings", "other arrays","booleans", "all of the above"], "all of the above"),
    new Question("String values must be enclosed within _________ when being assigned to variables.", ["commas", "curly brackets","quotes", "parenthesis"], "parenthesis"),
    new Question("The condition in an if/else statement is enclosed with _________.", ["quotes", "curly brackets","parenthesis", "square brackets"], "curly brackets"),
    new Question("A very useful tool used during development for printing content to the debugger is:", ["JavaScript", "terminal/bash","for loops", "console.log"], "console.log"),
];

var quiz = new Quiz(questions);
