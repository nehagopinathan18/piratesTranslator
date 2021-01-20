var btnTranslate = document.querySelector("#btn-trans");
// console.log(btnTranslate);
var txtArea = document.querySelector("#txtarea");
//console.log(txtArea);
var divOutput = document.querySelector("#output");
// /console.log(divOutput);

var serverURL = "https://api.funtranslations.com/translate/pirate.json"
// console.log(serverURL);
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
};

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
};

function clickHandler(){
    var inputText = txtarea.value; // taking input
    // console.log("clicked");
    console.log("input", txtArea.value);
    
    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            divOutput.innerText = translatedText; // output
           })
           .catch(errorHandler)
    
};


btnTranslate.addEventListener("click", clickHandler); 