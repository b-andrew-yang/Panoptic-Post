let globalData;
var url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f84cbefa09be416fad9c35bed0246247";


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
	var source = globalData["articles"][0]["source"]["name"];
	var content = globalData["articles"][0]["content"];
	var title = globalData["articles"][0]["title"];

	var output = title.concat("<br>", author, "<br>", source, "<br>", content, "<br>");
	document.getElementById("demo").innerHTML = output;
}

function draw() {
	// put drawing code here
}

