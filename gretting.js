const 
    form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js_greetings");

const 
    USER_LS = "thisUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    // 이벤트의 위로 올라가는 속성의 기본동작을 막는다
    event.preventDefault();
    const thisValue = input.value;
    paintGreeting(thisValue);
    saveName(thisValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const thisUser = localStorage.getItem(USER_LS);
    if(thisUser === null){
        askForName();
    } else{
        // she is 
        paintGreeting(thisUser);
    }
}

function init() {
    loadName();
}
init(); 