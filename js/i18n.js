
function createPanel(trans, wrapper){
	var newPanel = document.createElement('div');
	newPanel.className = "portifolio";
	
	//Builds title bar
	if(trans.Url != "")
	{
		addToInner(newPanel, "<h3><a href=\""+ trans.Url +"\">"+ trans.Project +"</a></h3>");
	}
	else
	{
		addToInner(newPanel, "<h3><a href=\"#\">"+ trans.Project +"</a></h3>");
	}
	//Builds list of origins
	if(trans.Origin != []){
	var originStrings = "";
	trans.Origin.forEach(function(e){
		originStrings += "<a href=\""+ e.site +"\">"+ e.name +"</a>, "
	});
	originStrings = originStrings.slice(0, -2);
	addToInner(newPanel, "<h4>"+originStrings+"</h4>"); //loop for Origins
	}
	//Add image
	addToInner(newPanel, "<img src="+trans.Image+" width=\"250\" height=\"250\">");
	

	addToInner(newPanel, "<p>"+trans.Year+"</p>");
	addToInner(newPanel, "<br>");

	addToInner(newPanel, "<p>"+trans.ShortDescription.pt_br+"</p>");

	wrapper.appendChild(newPanel);
}
