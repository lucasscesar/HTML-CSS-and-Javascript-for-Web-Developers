(function (window){

	var speakWord = "Hello";

	var helloSpeaker = {
		speak: function (name) {
					return console.log(speakWord + " " + name);
				}
	} 

	window.helloSpeaker = helloSpeaker;

})(window);

