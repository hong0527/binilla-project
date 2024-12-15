const loginForm = document.querySelector("#login-form");
const input = document.querySelector("#login-form input");
const h1 = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";

function handleSubmit(info){
    info.preventDefault();
    localStorage.setItem("username",input.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    h1Innertext();
}

function h1Innertext(){
    const username = localStorage.getItem("username");

    h1.innerText = `${username}  반가워! `;
    h1.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleSubmit);

}
else{
    h1Innertext();
}

