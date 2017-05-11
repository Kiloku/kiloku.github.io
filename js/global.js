
var data;
var address = window.location.href;

var lang = "pt_br";
if(address.split('#')[1] == "en_us")
{
	lang = "en_us";
}

var wordList = [];
function start()
{
	loadJSON("./js/translate.json", function(response){
		wordList = JSON.parse(response);
		console.log(wordList);
	});
	loadJSON("./js/data.json", function(response){
		data = JSON.parse(response);
		console.log(data);
		translateAll();
		buildPage();
	});
}
ready(start());
function ready(buildPage) {
  if (document.readyState != 'loading'){
  	start();
  } 
  else 
  {
    document.addEventListener('DOMContentLoaded', buildPage);
  }
}

var portWrapper;
function buildPage(){
	console.log(lang);
	portWrapper = document.getElementById('port-wrapper');
	portWrapper.innerHTML = "";
	if(document.getElementById("start").getAttribute("data-page") == "main")
		{
			data.Games.forEach(function(e){
				if(createPanel)
				{
					createPanel(e, portWrapper);
				}
				else
				{
					setTimeout(buildPage, 100);
					console.log("re-running generator");
				}
			});
		}
		else if(document.getElementById("start").getAttribute("data-page") == "i18n")
		{
			data.i18n.forEach(function(e){
				if(createPanel)
				{
					createPanel(e, portWrapper);
				}
				else
				{
					setTimeout(buildPage, 100);
					console.log("re-running generator");
				}
			});
		}
		else if (document.getElementById("start").getAttribute("data-page") == "web")
		{
			data.web.forEach(function(e){
				if(createPanel)
				{
					createPanel(e, portWrapper);
				}
				else
				{
					setTimeout(buildPage, 100);
					console.log("re-running generator");
				}
			});
		}
	/*loadJSON("./js/data.json", function(response){
		
		//createPanel(data.Games[0], portWrapper);
	});*/
	//TODO: Ler cada jogo dinamicamente.
}
function createCV()
{
	var exp =  document.getElementById('expList');
	exp.innerHTML="";
	data.cv.Workplaces.forEach(function(e){
		addToInner(exp, "<li> <a href='" + e.url + "'>" + e.name + "</a>: " + e.job[lang] + "</li>");
		
	});
}

function setLangAndTranslate(l)
{
	lang = l;
	translateAll();
}

function translateAll(){
	buildPage();
	if(document.getElementById("start").getAttribute("data-page") != "i18n"){
		createCV();
	}
	setTimeout(function(){
		var toTranslate = document.querySelectorAll("[data-i18n]");
		toTranslate.forEach(function(e){
		translateElement(e);
	})
	},10); //This is hacky. Can I make an event that tells me when buildPage() is done?
	
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
 function parseJsonAsync(json)
 {

 }