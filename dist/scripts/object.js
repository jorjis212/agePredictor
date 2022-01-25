'use strict';

const imageHero = document.querySelector('.heroimage');


const objBundle = {
    squirrel: {
        "squirrel-1": 10,
        "squirrel-2": 6,
        "squirrel-3": 7,
        "squirrel-4": 8,
        "squirrel-5": 9,
        "squirrel-6": 16,
        "squirrel-7": 17,
        "squirrel-8": 18,
        "squirrel-9": 19,
        "squirrel-10": 20,
        "squirrel-11": 19,
    },
    cat: {
        "cat-1": 4,
        "cat-2": 8,
        "cat-3": 10,
        "cat-4": 5,
        "cat-5": 7,
        "cat-6": 11,
        "cat-7": 12,
        "cat-8": 4,
        "cat-9": 15,
        "cat-10": 13,
        "cat-11": 14,
        "cat-12": 10,
        "cat-13": 12,

    },
    other: {
        "panda-1": 18,
        "panda-2": 19,
        "puppy-1": 7,
        "puppy-2": 8,
        "puppy-3": 15,
        "puppy-4": 9,

    }
};


function generateImg(objBundle) {
    const category = Object.keys(objBundle).sort(() => Math.random() - 0.5)[0];
    const obj = shuffle(Object.keys(objBundle[category]));

    const randomImage = obj[0];

    const path = `./dist/images/imgSource/${randomImage}.webp`;

    imageHero.src = path;

    const age = objBundle[category][randomImage];
    return age;
}

let age = generateImg(objBundle);

startLoader();
imageHero.onload = function () {
    afterLoad();
};