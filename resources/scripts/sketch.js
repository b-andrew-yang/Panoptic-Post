let globalData;
var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";

function setup() {
	createCanvas(200,200);
	loadJSON(url, gotData);
	// document.write("Goodbye world!<br>");
}

function gotData(data){
	// document.write("Starting to write JSON<br>");
	globalData = data;
	console.log(data);
	// document.write(data["articles"][0]["author"]);
}

function populateBox() {
	// document.getElementById("demo").innerHTML = globalData["articles"][0]["author"];
	/*var author = globalData["articles"][0]["author"];
	var source = globalData["articles"][0]["url"].toString();
	var content = globalData["articles"][0]["content"];
	var title = globalData["articles"][0]["title"];
	var image = globalData["articles"][0]["urlToImage"];

	var output = title.concat("<br>", author, "<br>", source, "<br>", content, "<br>");
	// document.getElementById("demo").innerHTML = output;
	document.getElementById("title").innerHTML = title;
	document.getElementById("author").innerHTML = author;
	document.getElementById("content").innerHTML = content;
	document.getElementById("source").innerHTML = source;
	document.getElementById("image").src = image;*/

	var numArticles = 10;

	for(i = 1; i< numArticles; i++){
		var newLine = document.createElement("BR");
		var titleNode = document.createElement("P");
		titleNode.innerHTML = globalData["articles"][i]["title"];
		titleNode.style.fontFamily = "Arial";
		titleNode.style.color = "black";
		titleNode.style.fontWeight = "bold";
		titleNode.style.fontSize = "20px";

		var authorNode = document.createElement("P");
		authorNode.innerHTML = globalData["articles"][i]["author"];
		authorNode.style.fontFamily = "Arial";
		authorNode.style.color = "black";
		authorNode.style.fontSize = "15px";

		var contentNode = document.createElement("P");
		contentNode.innerHTML = globalData["articles"][i]["content"];
		contentNode.style.fontFamily = "Arial";
		contentNode.style.color = "black";
		contentNode.style.fontSize = "18px";

		var sourceNode = document.createElement("A");
		var urlText = globalData["articles"][i]["url"];
		sourceNode.innerHTML = urlText;
		sourceNode.href = urlText;
		sourceNode.style.fontFamily = "Arial";
		sourceNode.style.color = "blue";
		sourceNode.style.fontSize = "18px";

		var imageNode = document.createElement("IMG");
		imageNode.src = globalData["articles"][i]["urlToImage"];
		imageNode.style.width = "30%";
		imageNode.style.height = "30%";

		document.getElementById("content-box").appendChild(titleNode);
		document.getElementById("content-box").appendChild(authorNode);
		document.getElementById("content-box").appendChild(contentNode);
		document.getElementById("content-box").appendChild(sourceNode);
		document.getElementById("content-box").appendChild(newLine);
		document.getElementById("content-box").appendChild(imageNode);
	}

	var button = document.getElementById("story-button").style.display = "none";
	var video = document.getElementById("homeVideo").style.display = "none";
	var homeBanner = document.getElementById("intro-banner").style.display = "none";
}

function draw() {
	// put drawing code here
}

