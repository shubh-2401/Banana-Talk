let input = document.getElementById("input");
let API_url = "https://api.funtranslations.com/translate/minion.json";
let output = document.getElementById("output");

let errorHandler = (error) => {
  console.log("Error Occured", error);
  alert("We are Facing some issues, Please try again after sometime");
};

//Calling Convert

function convert() {
  //Setting API URL

  let api_request_url = `${API_url}?text=${input.value}`;

  fetch(api_request_url)
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      output.value = translatedText;
    })
    .catch(errorHandler);
}