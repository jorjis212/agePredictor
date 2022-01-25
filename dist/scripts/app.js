'use strict';

//colors
const succcessColor = '#60b347';
const primaryColor = '#586ba4';

//handle collapsibles
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((item) => {
    item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
    });
});

//render graph into container

const containerHintOne = document.querySelector('.hints-one');
const containerHintTwo = document.querySelector('.hints-two');

renderGraph(containerHintOne, age, 5, false, true, 'btn-revealOne');
renderGraph(containerHintTwo, age, 5, true, true, 'btn-revealTwo');




// game points
const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');

const playAgainBtn = document.querySelector('.btn-playAgain');

const inputUser = document.querySelector('input.input-client');

const checkBtn = document.querySelector('.btn-check');

const message = document.querySelector('.message');



checkBtn.addEventListener('click', function () {
    if (age === inputUser.valueAsNumber) {
        document.body.style.background = succcessColor;
        //canvas render
        startConfetti(8000);
        highScore.innerHTML =
            (+highScore.innerHTML < +score.innerHTML) ? score.innerHTML : highScore.innerHTML;
        addClass(highScore, 'blink', 3000);
        message.innerHTML = `Congratulations, you guess it right 🎊🎊🎊`
        addClass(message, 'scale-in-bottom', 3000);
        revealBtnOne.disabled = true;
        revealBtnTwo.disabled = true;
        addClass(playAgainBtn, 'bounce-in-left', 20000);

    }
    else if
        (age > inputUser.valueAsNumber && inputUser.valueAsNumber > 0) {
        score.innerHTML = `${+(score.innerHTML) - 3}`;
        addClass(score, 'shake', 3000);
        message.innerHTML = `Am i so little ? 🙄🙄`;
        addClass(message, 'scale-in-bottom', 3000);
    }
    else if
        (age < inputUser.valueAsNumber && inputUser.valueAsNumber > 0) {
        score.innerHTML = `${+(score.innerHTML) - 3}`;
        addClass(score, 'shake', 3000);
        message.innerHTML = `Too high, you hurt me. 😡😡`;
        addClass(message, 'scale-in-bottom', 3000);

    } else {
        message.innerHTML = "Insert valid value. 🙏🙏🙏";
        addClass(message, 'scale-in-bottom', 3000);
    }

});

//reveal-btn click event
function revealTheBtn(reducer) {
    this.style.visibility = 'hidden';
    this.nextSibling.classList.add('filter-none');
    score.innerHTML = `${+(score.innerHTML) - reducer}`;
    addClass(score, 'shake', 3000);
}

let revealBtnOne = document.getElementById('btn-revealOne');
let revealBtnTwo = document.getElementById('btn-revealTwo');


revealBtnOne.addEventListener('click', function () {
    revealTheBtn.call(this, 5);
});
revealBtnTwo.addEventListener('click', function () {
    revealTheBtn.call(this, 7);
});


//play again
playAgainBtn.addEventListener('click', function () {
    score.innerHTML = '100';
    message.innerHTML = "start guessing 🎃🎃🎃.";
    document.body.style.background = primaryColor;
    age = generateImg(objBundle);
    //loading bar handling
    startLoader();
    imageHero.onload = () => afterLoad();
    renderGraph(containerHintOne, age, 4, false, true, 'btn-revealOne');
    renderGraph(containerHintTwo, age, 4, true, true, 'btn-revealTwo');

    //btn handleing
    let revOne = document.getElementById('btn-revealOne');
    let revTwo = document.getElementById('btn-revealTwo');
    revOne.addEventListener('click', function () {
        revealTheBtn.call(this, 5);
    });
    revTwo.addEventListener('click', function () {
        revealTheBtn.call(this, 7);
    });
    collapsibles.forEach((item) => {
        item.classList.remove('collapsible--expanded');
    });

    revealBtnOne.disabled = false;
    revealBtnTwo.disabled = false;
    inputUser.value = "";

});



