var highScores = JSON.parse(localStorage.getItem("highScores")) || []
var displayScore = false;

var questions = [
    {
        q: 'The condition in an if/else statement is enclosed with _________.',
        b: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        a: 2
    },
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
var timeLeft = 0
var maxTime = 75
var score = 0
var timerHandle
var resultDisplayHandle

function setTimeLeft(seconds) {

    timeLeft = Math.max(seconds, 0)
    document.getElementById("secondsLeft").textContent = timeLeft
}

function startTimer() {
    setTimeLeft(maxTime)
    timerHandle = setInterval(function () {
        setTimeLeft(timeLeft - 1)
        if (timeLeft <= 0) {
            results()
        }
    }, 1000)
}

var clearContent = function () {
    contentEl.innerHTML = ""
};

function takeQuiz() {
    document.getElementById("listScores").style = "display: none";
    document.getElementById("startQuiz").style = "display: none";
    document.getElementById("quizSection").style = "display:block";
    document.getElementById("questionDiv").style = "display:block";
    displayQuestion(currentQuestion)
    startTimer()
}

function displayQuestion(index) {

    var question = questions[index]
    document.getElementById("highScores").style.display = "none"
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
    document.getElementById("listScores").style = "display: none";
}

function evaluateAnswer(correct) {

    if (correct) {
        score = score + 10
        document.getElementById("result").textContent = "Correct!"
        document.getElementById("listScores").style = "display: none";
    } else {
        setTimeLeft(timeLeft - 10)
        document.getElementById("result").textContent = "Incorrect...!"
        document.getElementById("listScores").style = "display: none";
    }
    currentQuestion++

    document.getElementById("answerResults").style = "display:block"
    clearTimeout(resultDisplayHandle)
    resultDisplayHandle = setTimeout(function () {
        document.getElementById("answerResults").style = ""
    }, 2000);

    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion)

    } else {
        results()
        console.log("You've finished!")
    }
};

function results() {
    clearInterval(timerHandle)
    console.log(score)
    score = score + timeLeft

    //change display
    document.getElementById("yourScore").style = "display: inline";
    document.getElementById("quizSection").style = "display:none";
    document.getElementById("questionDiv").style = "display:none";
    document.getElementById("score").textContent = score
}

function saveScore(event) {
    document.getElementById("listScores").style = "display: none";
    event.preventDefault()
    var initials = document.getElementById("inputInitials").value
    var letters = /^[a-zA-Z]+$/;

    if (!initials || initials.length > 2) {
        document.getElementById("validate").innerHTML = "Please enter two letters."
        return;
    }
    if (inputInitials.value.match(letters)) {
    } else {
        document.getElementById("validate").innerHTML = "Please enter only two letters."
        return;
    }

    var newHighScore = { initials, score }
    highScores.push(newHighScore)
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores))
    console.log(highScores);

    showScores();
    displayScore = false;
}

function showScores() {
    if (!displayScore) {
        document.getElementById("scoreDisplay").innerHTML = "";
        document.getElementById("initials").innerHTML = "";
        //empty out scores from browser
        document.getElementById("startQuiz").style = "display: none";
        document.getElementById("yourScore").style = "display: none";
        document.getElementById("timer").style = "display: none";
        document.getElementById("listScores").style = "display: block";
        var retrievedScores = JSON.parse(localStorage.getItem("highScores"));

        for (var i = 0; i < retrievedScores.length; i++) {
            var div = document.createElement("div")
            div.innerHTML += retrievedScores[i].initials.toUpperCase()
            document.getElementById("initials").appendChild(div)
            var div2 = document.createElement("div2")
            div2.setAttribute("class", "block");
            div2.innerHTML += retrievedScores[i].score
            document.getElementById("scoreDisplay").appendChild(div2)
        }
        displayScore = true;
    }
}

function goBack() {
    displayScore = false;
    location.reload();

}

function clear() {

    window.localStorage.removeItem("highScores");
    // window.location.reload();
    showScores();


}

document.getElementById("start").addEventListener("click", takeQuiz)
document.getElementById("initialsForm").addEventListener("submit", saveScore)
document.getElementById("goBack").addEventListener("click", goBack)
document.getElementById("clearScores").addEventListener("click", clear)
document.getElementById("highScores").addEventListener("click", showScores)