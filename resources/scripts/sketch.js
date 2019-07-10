let globalData;
let url;

// DEFAULT_URL is the trending page
const DEFAULT_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";

function setup() {

//	Setting default url to trending
	if (url == null){
		url = DEFAULT_URL;
	}

//	Debug messages
	console.log("Entered setup");
	console.log(url);

//	Load JSON from url and then call gotData()
	loadJSON(url, gotData);
}

//	Updates globalData to the data received on loadJSON() call
function gotData(data){
	globalData = data;
	console.log(data);

	populateBox2();
}

function populateBox(category){
	console.log("In populateBox() " + category);
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

	updateGlobalData(url);
	url = temp_url;
	//setup();
}

function populateBox2(){

	console.log(globalData);
	var num_articles = 10;
	var articles = [];


	// Creating an array of article objects
	for(i=0; i<num_articles; i++){
		var article = {
			title: globalData["articles"][i]["title"],
			author: globalData["articles"][i]["author"],
			content: globalData["articles"][i]["content"],
			url: globalData["articles"][i]["url"],
			img: globalData["articles"][i]["urlToImage"]
		};
		articles.push(article);
	}
	outputArticles(articles);
}


function outputArticles(articles){

	articles.forEach(function(article){
		var div = document.createElement("DIV");
		div.className = 'col-md-4 col-lg-4 col-xl-4 row content';

		var titleNode = document.createElement("P");
		titleNode.setAttribute('id', 'title');
		titleNode.innerHTML = article.title + "<br>";
		//document.getElementById("content-box").appendChild(titleNode);
		div.appendChild(titleNode);
		
		var authorNode = document.createElement("P");
		authorNode.setAttribute('id', 'author');
		authorNode.innerHTML = article.author;
		//document.getElementById("content-box").appendChild(authorNode);
		div.appendChild(authorNode);

		var contentNode = document.createElement("P");
		contentNode.setAttribute('id', 'content');
		contentNode.innerHTML = article.content;
		//document.getElementById("content-box").appendChild(contentNode);
		div.appendChild(contentNode);

		var urlNode = document.createElement("A");
		urlNode.setAttribute('id', 'url');
		urlNode.innerHTML = article.url + "<br>";
		urlNode.href = article.url;
		//document.getElementById("content-box").appendChild(urlNode);
		div.appendChild(urlNode);


		if(article.img != null){
			var imgNode = document.createElement("IMG");
			imgNode.setAttribute('id', 'img');
			imgNode.src = article.img;
			//document.getElementById("content-box").appendChild(imgNode);
			div.appendChild(imgNode);
		}
		document.getElementById("content-box").appendChild(div);
	})
	var button = document.getElementById("story-button").style.display = "none";
	var video = document.getElementById("homeVideo").style.display = "none";
	var homeBanner = document.getElementById("intro-banner").style.display = "none";
}

//	doSearch(search_query) returns the url JSON data of articles that contain the words in search_query
//	@params : 
//		search_query : string 
//	@returns :
//		url : string
function doSearch(search_query){
	console.log("search query is: " + search_query);
	var texts = search_query.split(" ");
	var temp_url = "https://newsapi.org/v2/everything?apiKey=9d0061d2a21f43efab81299a242f0c68";

	temp_url+="&q="

	for (i = 0; i < texts.length; i++)
		temp_url += "+" + texts[i];

	return temp_url;
}

//	updateGlobalData(url) sets globalData to the new URL
//	@params :
//		url : string
function updateGlobalData(url){
	console.log(url);
	loadJSON(url, gotData);
}

function removeAllChildren(element){
	var child = element.lastElementChild;
	while(child){
		element.removeChild(child);
		child = element.lastElementChild;
	}
} 