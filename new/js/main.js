
ready(fn());
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var data = {};
var portWrapper;


function fn(){
	portWrapper = document.getElementById('port-wrapper');
	data = {};
	loadJSON(function(response){
		console.log(response);
		data = JSON.parse(response);
		console.log(data);
		data.Games.forEach(function(e){
			createPanel(e, portWrapper);
		});
		//createPanel(data.Games[0], portWrapper);
	});
	//TODO: Ler cada jogo dinamicamente.
}

function createPanel(game, wrapper){
	var newPanel = document.createElement('div');
	newPanel.className = "portifolio";
	
	//Builds title bar
	addToInner(newPanel, "<h3><a href=\""+ game.Url +"\">"+ game.Title +"</a></h3>");

	//Builds list of origins
	var originStrings = "";
	game.Origin.forEach(function(e){
		originStrings += "<a href=\""+ e.site +"\">"+ e.name +"</a>, "
	});
	originStrings = originStrings.slice(0, -2);
	addToInner(newPanel, "<h4>"+originStrings+"</h4>"); //loop for Origins
	
	//Add image
	addToInner(newPanel, "<img src="+game.Image+" width=\"250\" height=\"250\">");
	
	//Builds list of roles
	var rolesString = "";
	game.Roles.forEach(function(e){
		rolesString += e + ", ";
	});
	rolesString = rolesString.slice(0, -2);
	addToInner(newPanel, "<p><b>Role: "+ rolesString + "</b></p>");

	addToInner(newPanel, "<p>"+game.Year+"</p>");
	addToInner(newPanel, "<br>");

	addToInner(newPanel, "<p>"+game.ShortDescription+"</p>");

	wrapper.appendChild(newPanel);
}

function addToInner(element, html){
	var temp = document.createElement('div');
	temp.innerHTML = html;
	var htmlObject = temp.firstChild;
	element.appendChild(htmlObject);
}

 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', './js/data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }