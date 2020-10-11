var highScores = JSON.parse(localStorage.getItem("highScores")) || []
//console.log(highScores)
    //short circuiting

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
    var maxTime = 40
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
        document.getElementById("startQuiz").style = "display: none";
        document.getElementById("quizSection").style = "display:block";
        document.getElementById("questionDiv").style = "display:block";
    
        displayQuestion(currentQuestion)
        startTimer()
    
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
        if (correct) {
            score = score + 10
            document.getElementById("result").textContent = "Correct!"
        } else {
            setTimeLeft(timeLeft - 10)
            document.getElementById("result").textContent = "Incorrect...!"
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
        event.preventDefault()
        var initials = document.getElementById("inputInitials").value
        if (!initials) {
            return;
        }
        console.log(initials)
        var newHighScore = {initials , score}
        highScores.push(newHighScore)
        highScores.sort( (a,b) => b.score - a.score)
        //var MAX_HIGH_SCORES = 5;
        highScores.splice(5);
        localStorage.setItem("highScores", JSON.stringify(highScores))
        console.log(highScores);
        document.getElementById("yourScore").style = "display: none";
        document.getElementById("listScores").style = "display: block";
        //localStorage.getItem("highscores");
        // iterate localStorage
        //scorelist.innerHTML = highScores

        var retrievedScores = JSON.parse(localStorage.getItem("highScores"));

        for (var i = 0; i < retrievedScores.length; i++) {
            var div = document.createElement("div")
            document.getElementById("initials").appendChild(div)
            div.innerHTML +=  retrievedScores[i].initials.toUpperCase() 
            var div2 = document.createElement("div2")
            div2.setAttribute("class", "block");
            document.getElementById("scoreDisplay").appendChild(div2)
            div2.innerHTML +=  retrievedScores[i].score

        //highScores.forEach(function(highScores){
            //console.log(highScores)
            //var li = document.createElement("li")
            //document.getElementById("scorelist").appendChild(li)
           //li.innerHTML = highScores
        //}) 
        }

        //for (var i = 0; i < highScores.length; i++) {
            //console.log(highScores)

            //var li = document.createElement("li")
            //document.getElementById("scorelist").appendChild(li)
           //li.innerHTML = "highScores.initials" + "highScores.score"
           //console.log(highScores[0])
           
    }

        
        //.map(highScores => {
            //return highScores.initials[0] , highScores.score[0]
        //})
        //.join("");
        
        //for (var i = 0; i < localStorage.length; i++) {
           
            //var li = document.createElement("li")
            //document.getElementById("scorelist").appendChild(li)
           // li.textContent = highScores.initials
        //}
    

function goBack() {
    location.reload();
}

function clear() {
    localStorage.clear();
}

    document.getElementById("start").addEventListener("click", takeQuiz)
    document.getElementById("initialsForm").addEventListener("submit", saveScore)
    document.getElementById("goBack").addEventListener("click", goBack)
    document.getElementById("clearScores").addEventListener("click" , clear)


    