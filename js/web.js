
function createPanel(web, wrapper){
	var newPanel = document.createElement('div');
	newPanel.className = "portifolio";
	
	//Builds title bar
	if(web.Url != "")
	{
		addToInner(newPanel, "<h3><a href=\""+ web.Url +"\">"+ web.Project +"</a></h3>");
	}
	else
	{
		addToInner(newPanel, "<h3><a href=\"#\">"+ web.Project +"</a></h3>");
	}
	//Builds list of origins
	if(web.Origin != []){
		let originStrings = "";
		web.Origin.forEach(function(e){
			originStrings += "<a href=\""+ e.site +"\">"+ e.name +"</a>, "
		});
		originStrings = originStrings.slice(0, -2);
		addToInner(newPanel, "<h4>"+originStrings+"</h4>"); //loop for Origins
	}
	//Add image
	addToInner(newPanel, "<img src="+web.Image+" width=\"250\" height=\"250\">");
	
	//Builds list of roles
	var rolesString = "";
	let translatedArray = web.Roles[lang];
 	translatedArray.forEach(function(e){
		rolesString += e + ", ";
	});
	rolesString = rolesString.slice(0, -2);
	if (translatedArray.length > 1){
		if (lang == "en_us")
		{
			addToInner(newPanel, "<p><b>Roles: </b>"+ rolesString + "</p>");
		}
		else
		{
			addToInner(newPanel, "<p><b>Papéis: </b>"+ rolesString + "</p>" )
		}
	}
	else
	{
		if (lang == "en_us")
		{
			addToInner(newPanel, "<p><b>Role: </b>"+ rolesString + "</p>");
		}
		else
		{
			addToInner(newPanel, "<p><b>Papel: </b>"+ rolesString + "</p>")
		}
	}

	addToInner(newPanel, "<p>"+web.Year+"</p>");
	addToInner(newPanel, "<br>");

	addToInner(newPanel, "<p>"+web.ShortDescription[lang]+"</p>");
	if(web.Technologies != [])
	{
		let techStrings = "";
		techStrings += "<p>";
		web.Technologies.forEach(function(e){
			techStrings += e +", ";

		});
		techStrings = techStrings.slice(0, -1);
		techStrings += "</p>";
		addToInner(newPanel, "<h4>"+techStrings+"</h4>");
	}

	wrapper.appendChild(newPanel);
}
