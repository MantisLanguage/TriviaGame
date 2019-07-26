// attaching quiz variable to quiz div
var quiz = $("#quiz");
// Array of questions with variables of question, answers, and correctAnswer
var questions = [{
    question: "An octopus has how many hearts?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3"
}, {
    question: "What is the plural form for octopus?",
    answers: ["Octopuses", "Octopeese", "Octopods", "Octopi"],
    correctAnswer: "Octopuses"
}, {
    question: "Any octopus has how many tentacles and how many arms?",
    answers: ["8 tentacles, 0 arms", "0 tentacles, 8 arms", "4 tentacles, 4 arms", "8 tentacles, 8 arms"],
    correctAnswer: "0 tentacles, 8 arms"
}, {
    question: "An octopus can regrow this, if it is lost:",
    answers: ["It's mantle", "It's beak", "It's eye", "A limb"],
    correctAnswer: "A limb"
}, {
    question: "Which of these is not a known escapte tactic:",
    answers: ["Ink spray", "Disposing of a limb", "Camouflage", "Suffocation"],
    correctAnswer: "Suffocation"
}, {
    question: "Female octopuses lay anywhere between _____ and _____ eggs, but only one or two on average survive to adulthood.",
    answers: ["100 and 500", "1,000 and 5,000", "10,000 and 50,000", "100,000 and 500,000"],
    correctAnswer: "100,000 and 500,000"
}, {
    question: "Octopuses are lacking which sense?",
    answers: ["Sight", "Smell", "Hearing", "Taste"],
    correctAnswer: "Hearing"
}, {
    question: "What color is an octopuses blood?",
    answers: ["Blue", "Red", "Orange", "Brown"],
    correctAnswer: "Blue"
}, {
    question: "An octopuses ink is composed of mucus and",
    answers: ["Melanin", "Termecohydrate", "Phosphate", "Tetrahydrochloride"],
    correctAnswer: "Melanin"
}, {
    question: "Octopuses on average live for:",
    answers: ["Less than 1 year", "1-2 years", "2-5 years", "5+ years"],
    correctAnswer: "1-2 years"
},];
// timer and game score
var timer;
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $("#countdown").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },
    // start button functionality and timer defined
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#secondary").prepend("<h2>Time Remaining: <span id='countdown'>120</span> Seconds</h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            quiz.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                quiz.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        quiz.append("<button id='done'>Done</button>");
    },
    //   end button functionality and if's for correct/incorrect
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() === questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() === questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() === questions[8].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val() === questions[9].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("#secondary h2").remove();
        quiz.html("<h2>All Done!</h2>");
        quiz.append("<h3>Correct Answers: " + this.correct + "</h3>");
        quiz.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        quiz.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};
// click functions [start/finish]
$(document).on("click", "#start", function () {
    game.start();
});
$(document).on("click", "#done", function () {
    game.done();
});

// developer cheatsheet
console.log(questions[0].correctAnswer)
console.log(questions[1].correctAnswer)
console.log(questions[2].correctAnswer)
console.log(questions[3].correctAnswer)
console.log(questions[4].correctAnswer)
console.log(questions[5].correctAnswer)
console.log(questions[6].correctAnswer)
console.log(questions[7].correctAnswer)
console.log(questions[8].correctAnswer)
console.log(questions[9].correctAnswer)
