var listened = new webkitSpeechRecognition;

function start() {
    listened.start();
}

listened.onresult = function(event) {
    console.log(event);
    output = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = output;
}