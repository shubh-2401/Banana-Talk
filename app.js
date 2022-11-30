var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


// URL of the server where our translation is done.
var serverURL = "https://api.funtranslations.com/translate/minion.json?";


// Function which creates a URL including our input text using the serverURL
function getTranslationURL(input)
{
    return serverURL +"text="+ input;
}

function errorHandling()
{
    console.log("error occured",error)
    alert("Something is wrong with the server ! Please try again later.")
}
function clickHandler()
{
    var inputText=txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;        // output
    })
    .catch(errorHandling)
};
btnTranslate.addEventListener("click",clickHandler);

