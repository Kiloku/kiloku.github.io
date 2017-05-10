
ready(buildPage());
function ready(buildPage) {
  if (document.readyState != 'loading'){
    buildPage();
  } else {
    document.addEventListener('DOMContentLoaded', buildPage);
  }
}

var data = {};
var portWrapper;
var lang = "pt_br";
var wordList = [];
function buildPage(){
	portWrapper = document.getElementById('port-wrapper');
	portWrapper.innerHTML = "";
	data = {};
	loadJSON("./js/translate.json", function(response){
		wordList = JSON.parse(response);
		console.log(wordList);
		translateAll();
	});
	loadJSON("./js/data.json", function(response){
		data = JSON.parse(response);
		console.log(data);
		var counter = 0;
		if(document.getElementById("start").getAttribute("data-page") == "main")
		{
			data.Games.forEach(function(e){
				createPanel(e, portWrapper);
			});
		}
		else if(document.getElementById("start").getAttribute("data-page") == "i18n")
		{
			data.i18n.forEach(function(e){
				createPanel(e, portWrapper);
			});
		}
		else if (document.getElementById("start").getAttribute("data-page") == "web")
		{
			data.web.forEach(function(e){
				createPanel(e, portWrapper);
			});
		}
		//createPanel(data.Games[0], portWrapper);
	});
	//TODO: Ler cada jogo dinamicamente.
}

function translateAll(){
	var toTranslate = document.querySelectorAll("[data-i18n]");
	toTranslate.forEach(function(e){
		translateElement(e);
	})
}

function translateElement(element){
	var tString = element.getAttribute("data-i18n");
	element.childNodes[0].nodeValue = getTranslatedString(tString);
}

function getTranslatedString(tag){
	result = getCurrentLangList()[tag];
	return result;
}

function getCurrentLangList()
{
	return wordList[lang];
}

function addToInner(element, html){
	var temp = document.createElement('div');
	temp.innerHTML = html;
	var htmlObject = temp.firstChild;
	element.appendChild(htmlObject);
}

 function loadJSON(address, callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', address, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }