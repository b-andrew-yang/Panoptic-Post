let globalData;
var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";

window.onload = function() {
	setup();
	myFunction();
}

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

function myFunction() {
	// document.getElementById("demo").innerHTML = globalData["articles"][0]["author"];
	var author = globalData["articles"][0]["author"];
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
	document.getElementById("image").src = image;
}

function draw() {
	// put drawing code here
}

