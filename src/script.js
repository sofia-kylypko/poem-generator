// import Typewriter from 'typewriter-effect';

const generatePoem = (event) => {
    event.preventDefault();

    let text = "hello";

    new Typewriter("#response", {
        strings : [text],
        autoStart : true,
        delay : 5,
        cursor : ""
    });
}

let poemForm = document.querySelector("#inputForm");
poemForm.addEventListener("submit", generatePoem);