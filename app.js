//Start button on the Start Page takes user to the first question
//When an answer is selected, turn white border box into blue
//when an answer is selected, other answer boxes turn into white border
//when an answer is submitted, Question Status on the bottom adds from 0/10 to 1/10 and so on
//If an answer submitted is correct, add Score status on the bottom from 0/10 to 1/10 and so on
//If a submit button is clicked without an answer choosed, show a red bordered box wrapping the whole 4 answers
//If a submit button is clicked without an answer choosed, show a text Please make a choice in red on the top of the red bordered box
//When an anwer is submitted, display the next question
//When an answer is submitted, display the matching choices for the question
//final page will let the user restart the quiz from question one as a new user
//final page with with 5/5 correct answer shows different text than 3/5 or 0/5

//step 1, Define global variable
const questionsArray = [
    //question 0
    {
        questionText: 'ثسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسشسيس',
        questionChoice: ['شسيسش', 'شسيسش', 'شسيشسي', 'سشيشسيس'],
        questionAnswer: 3,
    },

];


let currentQuestionNumber = 0;
let totalNumberOfQuestion = questionsArray.length;
let totalScore = 3



//Step 2, Defining functions

//Click .start-button adds .hidden class to Start Section, and removes .hidden class of Question Section
function startChoppin() {
    $('.start-button').click(function () {
        $('.start-section').hide();
        $('.question-section').show();
        $('.final-section').hide();
        console.log('1.startChoppin ran');
        currentQuestionNumber = 0;
        console.log('currentQuestionNumber');
    })
};

//Click .reset-button adds .hidden class to Question and Final Section, and removes .hidden class of Start Section
function tryAgain() {
    $('.reset-button').click(function () {
        location.reload();
        //        $('.start-section').show();
        //        $('.final-section').hide();
        //        $('.question-section').hide();
        //        console.log('Last.tryAgain ran');
        //
        //        //resets currentQuestionNumber and totalScore to 0
        //        currentQuestionNumber = 0;
        //        console.log('currentQuestionNumber')
        //        totalScore = 0;
        //        console.log('totalScore')
    })
}


function checkAnswer() {
    //*****can be any answer from prev. questions

    //    let userAnswer = $('input[class="answer"]:checked').val()
    let userAnswer = $('input[class="answer"]:checked').val();
    console.log($('input[class="answer"]:checked'));
    //if answer === currentQuestionNumber.questionAnswer
    let correctAnswer = questionsArray[currentQuestionNumber].questionAnswer;
    console.log(correctAnswer, userAnswer);
    if (userAnswer == correctAnswer) {
        //add totalScore by 1
        totalScore++;
        console.log(totalScore);
    }
    //else
    //return false
    else {
        console.log(totalScore)
    };
};

//function containerLighter() {
//add class .right
//if (checkAnswer() === true) {
//    target.addClass('right');
//} else {
//    target.addClass('wrong');
//};
//console.log('3.containerLigher ran');
//console.log(target);
//};

function questionDisplay() {
    //    $('.question').empty();
    $('.question').text(questionsArray[currentQuestionNumber].questionText);
    console.log('questionDisplay ran', currentQuestionNumber);
    questionStatus();
    scoreStatus();
}

function answersDisplay() {
    //delete old .answers-container
    $('.answers-container').empty();
    //Amount of answers in a question
    const amountOfAnswers = questionsArray[currentQuestionNumber].questionChoice.length;
    //populate empty .answers-container
    for (let i = 0; i < amountOfAnswers; i++) {
        $('.answers-container').append(
            `
            <div class='answer'>
                <input  type="radio" name='answer' value='${i}' required onclick="Showbutton()">${questionsArray[currentQuestionNumber].questionChoice[i]}<br />
            </div>
            `
        );
        console.log(i);
    }
    console.log('answersDisplay ran');
}
function Showbutton() {
    $('.waitSelectAnswer').hide();
    $('.submit-button').show();
}
function questionStatus() {
    $('.question-circle').empty();
    $('.question-circle').append(
        `<p class= 'question-status'>السؤال ${currentQuestionNumber + 1} من 10</p>`
    );
};

function scoreStatus() {
    $('.score-circle').empty();
    $('.score-circle').append(
        `<p>Score ${totalScore} out of 10</p>`
    );
    console.log('scoreStatus ran');
    console.log(totalScore);
};

function submit() {
    $('.submit-button').click(function () {
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {
            checkAnswer();
            $('.final-score-container').empty();
            $('.final-score-container').append(
                `
                    ${totalScore}
                `
            );
            $('.start-section').hide();
            $('.question-section').hide();
            $('.final-section').show();
            scoreStatus();
            store();
            
        } else {
            checkAnswer();
            currentQuestionNumber++;
            questionDisplay();
            answersDisplay();
            console.log(totalScore);

        }
    });
}

function functionsHandler() {
    startChoppin();
    tryAgain();
    checkAnswer();
    containerLighter();
    questionDisplay();
    answersDisplay();
    questionStatus();
    scoreStatus();
};


$(function () {
    //On Start Section
    $('.question-section').hide();
    $('.final-section').hide();
    $('.submit-button').hide();


    $('.playstore').hide();
    $('.appstore').hide();

    startChoppin();

    //On Question Section
    submit();

    questionDisplay();
    answersDisplay();
    //    questionStatus();
    //    scoreStatus();
    tryAgain();
})


function store() {
    if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
        console.log("momen")
        $('.playstore').show();
    
    }
    else if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
        $('.appstore').show();
    }
    else {
        $('.playstore').show();
        $('.appstore').show();
        
    }

}