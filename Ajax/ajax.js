var url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";
var ourData;

function main(){
	//var obj = getJSON("trending");
	console.log(ourData);
}

// returns JSON object
function getJSON(category){
	console.log("In getJSON()");
	let temp_url;
	if (category == "trending")
		temp_url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";
	else if (	category == "business" || category == "science" || 
				category == "sports" || category == "entertainment" || 
				category == "general" || category == "health" || 
				category == "technology"){
		temp_url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68&category=" + category;	
	}
	else{
		temp_url = doSearch(category);
	}

	const elem = document.querySelector('#content-box');
	// if(elem.childNodes.length != 0){
	// 	removeAllChildren(elem);
	// }

	//updateGlobalData(url);
	url = temp_url;
	
	// var ourData;
	var ourRequest = new XMLHttpRequest();
	
	ourRequest.open('GET', url);
	
	ourRequest.onload = function(){
		console.log(ourRequest.responseText);
		ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData["articles"]);
	};
	
	ourRequest.send();
	console.log("before return");
}