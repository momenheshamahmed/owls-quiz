const questionsArray = [
    //question 0
    {
        questionText: 'The best tool to peel a ginger is...',
        questionChoice: ['Vegetalble peeler', 'Cheese grater', 'Paring Knife', 'Spoon'],
        questionAnswer: 1,
    },
    {
        questionText: 'The best tool to peel a ginger is...',
        questionChoice: ['Vegetalble peeler', 'Cheese grater', 'Paring Knife', 'Spoon'],
        questionAnswer: 1,
    },
    {
        questionText: 'The best tool to peel a ginger is...',
        questionChoice: ['Vegetalble peeler', 'Cheese grater', 'Paring Knife', 'Spoon'],
        questionAnswer: 1,
    },
    {
        questionText: 'The best tool to peel a ginger is...',
        questionChoice: ['Vegetalble peeler', 'Cheese grater', 'Paring Knife', 'Spoon'],
        questionAnswer: 1,
    },
];


let currentQuestionNumber = 0;
let totalNumberOfQuestion = questionsArray.length;
let totalScore = 0;



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
        console.log(totalScore * 10 + "Momen");
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
            <div class='answerDiv'>
                <input  class="answer" type="radio" name='answer' value='${i}' onclick="Showbutton()" required >${questionsArray[currentQuestionNumber].questionChoice[i]}<br />
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
        `<p class= 'question-status'>السؤال ${currentQuestionNumber + 1} من ${totalNumberOfQuestion }</p>`
    );
};

function scoreStatus() {
    $('.score-circle').empty();
    $('.score-circle').append(`${totalScore} `);
    console.log('Momen Hesham ' + totalScore);
    console.log(totalScore);
};

function submit() {
    $('.submit-button').click(function () {
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {
            checkAnswer();
            $('.final-score-container').empty();
            $('.final-score-container').append(
                `
                    ${totalScore * 10}
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
            $('.submit-button').hide();
            $('.waitSelectAnswer').show();

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