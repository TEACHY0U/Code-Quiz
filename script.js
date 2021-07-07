// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var progress = document.getElementById("progress");

// create my questions
var questions = [
    {
        question : "Who is the second President of the United States?",
        choiceA : "John Adams",
        choiceB : "Thomas Jefferson",
        choiceC : "James Monroe",
        correct : "A"
    },{
        question : "How many states are in the United States of America?",
        choiceA : "51",
        choiceB : "50",
        choiceC : "52",
        correct : "B"
    },{
        question : "How many amendments are there in the united states constitution?",
        choiceA : "10",
        choiceB : "32",
        choiceC : "27",
        correct : "C"
    }
];

// create variables

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var  questionTime = 75;


// render a question
function renderQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
}

// render progress
function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
var count = 75;
var interval = setInterval(function(){
  document.getElementById('time-left').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('time-left').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }
    }
}


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 75;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
}


function answerIsCorrect(){
    document.getElementById(runningQuestion);
}

function answerIsWrong(){
    document.getElementById(runningQuestion);
}

