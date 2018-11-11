const questionsArray = [
    //question 0
    {
        questionText: 'جيبك فيه قد ايه دلوقتي؟ ',
        questionChoice: ['اقل من 10 جنيه', 'اقل من 100 جنيه', '100-200 جنيه', 'انا غني فشخ'],
        questionAnswerOne: 0,
        questionAnswerTwo: 1,
        questionAnswerThree: 2,
        questionAnswerFour: 3,
    },
    {
        questionText: 'عندك أصدقاء خياليين؟ ',
        questionChoice: ['كل صحابي خايلين', 'واحد بس ساعة الشدة', 'احيانا', 'لا'],
        questionAnswerOne: 0,
        questionAnswerTwo: 1,
        questionAnswerThree: 2,
        questionAnswerFour: 3
    },
    {
        questionText: 'بتشارك اهتماماتك/الحاجات اللى بتحبها/بتحب تعملها مع حد؟',
        questionChoice: ['معنديش حاجة بحبها', 'احيانا', 'مع صحابي بس', 'بشارك مع كل الناس'],
        questionAnswerOne: 0,
        questionAnswerTwo: 1,
        questionAnswerThree: 2,
        questionAnswerFour: 3
    },
    {
        questionText: 'بتحب تسمع ايه؟',
        questionChoice: ['اغاني جرح و حزن', 'حمو بيكا', 'روك', 'ميتال'],
        questionAnswerOne: 0,
        questionAnswerTwo: 1,
        questionAnswerThree: 2,
        questionAnswerFour: 3
    },{
        questionText: 'ارتبط كام مره؟',
        questionChoice: [' ولا مرة', 'مرة واحدة', 'اكتر من مرة', 'مرتبط حاليا'],
        questionAnswerOne: 0,
        questionAnswerTwo: 1,
        questionAnswerThree: 2,
        questionAnswerFour: 3
    },
    {
        questionText: 'بتروح تصيف فين؟',
        questionChoice: [' انا بخاف من المية و الشمس', 'في البانيو', 'السخنة', 'والساحل او الجونة '],
        questionAnswerOne: 0,
        questionAnswerTwo: 1,
        questionAnswerThree: 2,
        questionAnswerFour: 3
    },
    {
        questionText: 'بتقضي وقتك فراغك في ايه؟',
        questionChoice: ['العدم', 'بتفرج علي مسلسلات او بلعب', 'بنزل اتمشي ', ' بروح القهوة '],
        questionAnswerOne: 0,
        questionAnswerTwo: 1,
        questionAnswerThree: 2,
        questionAnswerFour: 3
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
        // console.log('1.startChoppin ran');
        currentQuestionNumber = 0;
        // console.log('currentQuestionNumber');
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
    let correctAnswer = questionsArray[currentQuestionNumber].questionAnswerOne;

    if (userAnswer == questionsArray[currentQuestionNumber].questionAnswerOne) {
        //add totalScore by 1
        totalScore += 10;
        // console.log(totalScore + 10 + "Momen Hesham Ahmed Osman");
    }
    else if (userAnswer == questionsArray[currentQuestionNumber].questionAnswerTwo) {
        totalScore += 5;
        // console.log(totalScore + 5 + "Momen Hesham Ahmed Osman");

    }
    else if (userAnswer == questionsArray[currentQuestionNumber].questionAnswerThree) {
        totalScore += 3;
        // console.log(totalScore + 3 + "Momen Hesham Ahmed Osman");

    }
    else if (userAnswer == questionsArray[currentQuestionNumber].questionAnswerFour) {
        totalScore += 0;
        // console.log(totalScore + 10 + "Momen Hesham Ahmed Osman");
    }

    else {
        // console.log(totalScore)
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
        // console.log(i);
    }
    // console.log('answersDisplay ran');
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
    // console.log('Momen Hesham ' + totalScore);
    // console.log(totalScore);
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