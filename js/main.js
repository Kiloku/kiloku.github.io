function createPanel(game, wrapper){
	var newPanel = document.createElement('div');
	newPanel.className = "portifolio";
	
	//Builds title bar
	if(game.Url != "")
	{
		addToInner(newPanel, "<h3><a href=\""+ game.Url +"\">"+ game.Title +"</a></h3>");
	}
	else
	{
		addToInner(newPanel, "<h3><a href=\"#\">"+ game.Title +"</a></h3>");
	}
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
	let translatedRoles = game.Roles[lang];
	if (translatedRoles){
	 	translatedRoles.forEach(function(e){
			rolesString += e + ", ";
		});
 	}
	rolesString = rolesString.slice(0, -2);
	if (translatedRoles && translatedRoles.length > 1){
		if (lang == "en_us")
		{
			addToInner(newPanel, "<p><b>Roles: "+ rolesString + "</b></p>");
		}
		else
		{
			addToInner(newPanel, "<p><b>Papéis: "+ rolesString + "</b></p>" )
		}
	}
	else
	{
		if (lang == "en_us")
		{
			addToInner(newPanel, "<p><b>Role: "+ rolesString + "</b></p>");
		}
		else
		{
			addToInner(newPanel, "<p><b>Papel: "+ rolesString + "</b></p>")
		}
	}
	addToInner(newPanel, "<p>"+game.Year+"</p>");
	addToInner(newPanel, "<br>");


	addToInner(newPanel, "<p>"+game.ShortDescription[lang]+"</p>");
	if(game.Play){
		addToInner(newPanel, "<br>");
		addToInner(newPanel, "<a href=\""+game.Play+"\" data-i18n=\"games.playNow\"> Jogue Aqui </a>");
	}
	if(game.Watch){
		addToInner(newPanel, "<br>");
		addToInner(newPanel, "<a href=\""+game.Watch+"\" data-i18n=\"games.watchNow\"> Assista ao vídeo </a>")
	}

	wrapper.appendChild(newPanel);
}
