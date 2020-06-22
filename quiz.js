
//Variables
var body = document.body;
var pText = "Try to answer the following code-related questions within the time limit keep in mind that the incorrect answers will penalize your score/time by ten seconds!";

//Functions
function addMessage(parentElement, element, message) {
    var messageElement = document.createElement(element);
    messageElement.textContent = message;
    parentElement.appendChild(messageElement);
    return messageElement;
}

//Create the 'div' as quiz-wrapper
var quizEl = addMessage(body, "div", "");
quizEl.className = "quiz-wrapper";
quizEl.style.visibility = 'visible';
quizEl.setAttribute('style', 'height: 500px; width: 700px; background-color: white; margin:30px auto ;padding: 25px; text-align: center, position: relative');

// Create 'div' for displaying score as child of quiz-wrapper, positioned on left of quiz-wrapper
var scoreEl = addMessage(quizEl, "div", "High Score");
scoreEl.className = "score-info";
scoreEl.style.visibility = 'visible';

// Create 'div' for displaying Time as child of quiz-wrapper, positioned as right on quiz-wrapper
var timerEl = addMessage(quizEl, "div", "Time");
timerEl.className = "timer-info";
timerEl.style.visibility = 'visible';
    

// Create 'div' for Displaying Coding challenge as child of quiz-wrapper
var quizContent = addMessage(quizEl, "div", "Coding Quiz Challenge");
quizContent.className = "quiz-content";
quizContent.style.visibility = 'visible';
    
// Cretae 'div' to display instructions and questions as child of quiz-wrapper
var pEl = addMessage(quizEl, "p", pText);
pEl.className = "para";
pEl.style.visibility = 'visible';

//timerEl.textContent += ": 5";

// pEl.textContent = "q1";

//Create 


let count = 0;
let timerValue = 60;
let timerId;

var startBtn = addMessage(quizEl, "button", "Start Quiz");
startBtn.addEventListener("click", function () {
    timerId = setInterval(timerValue, 1000)
    appendQ()
})

function endGame() {
    alert('YOUR TIME RAN OUT!')
}

function updateTimer() {
    // document.getElementById("timerEl").textContent = ": timerValue";
    timerValue--;
    timerEl.textContent = timerValue;
    if (timerValue <= 0) { 
        //stop timer using timerId
        endGame()
    }
}

function appendQ() {
    console.log('clikced!');

    updateTimer();
    // document.getElementById("questions").innerHTML = `<p style="color:white">${questions[count].q}</p>`
    // let answers = "";
    // questions[count].c.forEach((a, i) => answers += `<button class="answerBtn" id=${i}>${a}</button>`);
    // document.getElementById("answers").innerHTML = answers
    // document.getElementsByClassName("button").each(a=>a.addEventListener("click", function () {
    //     alert(this.id)
    // }))
}
// function choice1Callback() {
    
// }
// var choice1 = addMessage(quizEl, "choice1", "choice1-button");
// choice1.value = 'choice1 value'; // will just add a hidden value
// choice1.innerHTML = 'my text';
// eventCapture(choice1, choice1Callback);

// function createQuizQuestions() {}
// function showResults() {}
// updateTimer("10");
// Event listeners

// function eventCapture(element, callback) {
//     element.addEventListener("click", callback);
// }

// document.getElementById("startBtn").addEventListener("click", function () {
//     timer = setInterval(counter, 1000)
//     appendQ()
// })


// function counter() {
//     document.getElementById("timer").textContent = time;
//     time--;
//     if(time<=0) endGame()
// }


    //   // The array of questions for our quiz game.
    //   var questions = [
    //     { q: 'The sky is blue.', a: 't' },
    //     { q: 'There are 365 days in a year.', a: 't' },
    //     { q: 'There are 42 ounces in a pound.', a: 'f' },
    //     { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    //     { q: 'Bananas are vegetables.', a: 'f' }
    //   ];

    //   // We start the game with a score of 0.
    //   var score = 0;

    //   // Loop over every question object
    //   for (var i = 0; i < questions.length; i++) {
    //     // Display current question to user and ask OK/Cancel
    //     var answer = confirm(questions[i].q);

    //     // Compare answers
    //     if (
    //       (answer === true && questions[i].a === 't') ||
    //       (answer === false && questions[i].a === 'f')
    //     ) {
    //       // Increase score
    //       score++;
    //       alert('Correct!');
    //     } else {
    //       alert('Wrong!');
    //     }
    //   }

    //   // Show total at end
    //   alert('You got ' + score + '/' + questions.length);