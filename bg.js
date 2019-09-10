const wrap_bg = document.querySelector(".wrap_bg");
 
const IMG_NUMBER = 5;

function handleImgLoad(){
    console.log("finished loading");
}

/*
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    wrap_bg.prepend(image);
}
*/

function paintImage(imgNumber){
    wrap_bg.classList.add(`bg${imgNumber + 1}`);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER );
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();