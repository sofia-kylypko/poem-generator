// import Typewriter from 'typewriter-effect';

const displayResponse = (response) => {
    console.log(response);
    new Typewriter("#response", {
        autoStart: true,
        delay: 5,
        cursor: ""
    }).typeString(response.data.answer + '<br> SheCodes AI')
        // ⛔ do NOT call .pauseFor() or .deleteAll()
        .start();;
}
const generatePoem = (event) => {
    event.preventDefault();

    document.getElementById("response").innerHTML = "Generating, please wait...";

    let instructions = document.querySelector("#user_instructions").value;

    let key = "dc4fa97dd0aa64407o93bea76f4taaab";
    let context = "answer should be maximum 3 paragraphs long, well structured and be readable and fully followed to what was asked in prompt. if no topic was given just ask to provide them";
    let prompt = `generate a short poem on a ${instructions}  topic`;
    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    console.log("generating");

    axios.get(url).then(displayResponse);
}

let poemForm = document.querySelector("#inputForm");
poemForm.addEventListener("submit", generatePoem);