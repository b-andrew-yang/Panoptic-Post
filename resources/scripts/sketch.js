let globalData;
var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";

function setup() {
	createCanvas(200,200);
	loadJSON(url, gotData);
}

function gotData(data){
	globalData = data;
	console.log(data);
}



function populateBox(category){

	let url;
	if (category == "trending")
		url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";
	else
		url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68" + "&category=" + category;	
	updateGlobalData(url);

	const elem = document.querySelector('#content-box');
	if(elem.childNodes.length != 0){
		removeAllChildren(elem);
	}

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
		var titleNode = document.createElement("P");
		titleNode.setAttribute('id', 'title');
		titleNode.innerHTML = article.title + "<br>";
		document.getElementById("content-box").appendChild(titleNode);
		
		var authorNode = document.createElement("P");
		authorNode.setAttribute('id', 'author');
		authorNode.innerHTML = article.author;
		document.getElementById("content-box").appendChild(authorNode);

		var contentNode = document.createElement("P");
		contentNode.setAttribute('id', 'content');
		contentNode.innerHTML = article.content;
		document.getElementById("content-box").appendChild(contentNode);

		var urlNode = document.createElement("A");
		urlNode.setAttribute('id', 'url');
		urlNode.innerHTML = article.url + "<br>";
		urlNode.href = article.url;
		document.getElementById("content-box").appendChild(urlNode);


		if(article.img != null){
			var imgNode = document.createElement("IMG");
			imgNode.setAttribute('id', 'img');
			imgNode.src = article.img;
			document.getElementById("content-box").appendChild(imgNode);
		}
		
	})
	var button = document.getElementById("story-button").style.display = "none";
	var video = document.getElementById("homeVideo").style.display = "none";
	var homeBanner = document.getElementById("intro-banner").style.display = "none";
}

// function populateBox(category) {
// 	let url;
// 	if (category == "trending"){
// 		url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";
// 	}else{
// 		url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68" + "&category=" + category;
// 	}
// 	updateGlobalData(url);
// 	var numArticles = 10;

// 	for(i = 0; i< numArticles; i++){
// 		var newLine = document.createElement("BR");
// 		newLine.setAttribute('id', "newLine");
// 		var titleNode = document.createElement("P");
// 		titleNode.setAttribute('id', 'tileNode');
// 		titleNode.innerHTML = globalData["articles"][i]["title"];
// 		titleNode.style.fontFamily = "Arial";
// 		titleNode.style.color = "black";
// 		titleNode.style.fontWeight = "bold";
// 		titleNode.style.fontSize = "20px";

// 		var authorNode = document.createElement("P");
// 		authorNode.innerHTML = globalData["articles"][i]["author"];
// 		authorNode.style.fontFamily = "Arial";
// 		authorNode.style.color = "black";
// 		authorNode.style.fontSize = "15px";

// 		var contentNode = document.createElement("P");
// 		contentNode.innerHTML = globalData["articles"][i]["content"];
// 		contentNode.style.fontFamily = "Arial";
// 		contentNode.style.color = "black";
// 		contentNode.style.fontSize = "18px";

// 		var sourceNode = document.createElement("A");
// 		var urlText = globalData["articles"][i]["url"];
// 		sourceNode.innerHTML = urlText;
// 		sourceNode.href = urlText;
// 		sourceNode.style.fontFamily = "Arial";
// 		sourceNode.style.color = "blue";
// 		sourceNode.style.fontSize = "18px";

// 		var imageNode = document.createElement("IMG");
// 		imageNode.src = globalData["articles"][i]["urlToImage"];
// 		imageNode.style.width = "30%";
// 		imageNode.style.height = "30%";

// 		document.getElementById("content-box").appendChild(titleNode);
// 		document.getElementById("content-box").appendChild(authorNode);
// 		document.getElementById("content-box").appendChild(contentNode);
// 		document.getElementById("content-box").appendChild(sourceNode);
// 		document.getElementById("content-box").appendChild(newLine);
// 		document.getElementById("content-box").appendChild(imageNode);
// 	}

// 	var button = document.getElementById("story-button").style.display = "none";
// 	var video = document.getElementById("homeVideo").style.display = "none";
// 	var homeBanner = document.getElementById("intro-banner").style.display = "none";
// }

function draw() {
	// put drawing code here
}

//	doSearch(search_query) returns the url JSON data of articles that contain the words in search_query
//	@params : 
//		search_query : string 
//	@returns :
//		url : string
function doSearch(search_query){
	var texts = search_query.split(" ");
	var url = "https://newsapi.org/v2/everything?apiKey=9d0061d2a21f43efab81299a242f0c68";

	url+="&q="

	for (i = 0; i < texts.length; i++)
		url += "+" + texts[i];

	updateGlobalData(url);
	populateBox();
}

//	updateGlobalData(url) sets globalData to the new URL
//	@params :
//		url : string
function updateGlobalData(url){
	loadJSON(url, gotData);
}

// removeAllChildren(elementID) removes all children of 
// element "element" from the document
// element can be fed to this function using 
//  	var element = document.querySelector(elementID);
function removeAllChildren(element){
	var child = element.lastElementChild;
	while(child){
		element.removeChild(child);
		child = element.lastElementChild;
	}
} 



