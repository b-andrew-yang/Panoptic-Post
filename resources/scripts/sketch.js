let globalData;
var url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-18&sortBy=publishedAt&apiKey=7c41bebdc9a54da1ad3041b9b5fde554";


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
	var author = globalData["articles"][0]["author"].toString();
	var source = globalData["articles"][0]["url"];
	var content = globalData["articles"][0]["content"];
	var title = globalData["articles"][0]["title"];

	var output = title.concat("<br>", author, "<br>", source, "<br>", content, "<br>");
	// document.getElementById("demo").innerHTML = output;
	document.getElementById("title").innerHTML = title;
	document.getElementById("author").innerHTML = author;
	document.getElementById("content").innerHTML = "hello";
	document.getElementById("source").innerHTML = source;
}

function draw() {
	// put drawing code here
}

