let data;
var url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f84cbefa09be416fad9c35bed0246247";


function setup() {
	createCanvas(200,200);
	loadJSON(url, gotData);
	// document.write("Goodbye world!<br>");
}

function gotData(data){
	// document.write("Starting to write JSON<br>");
	console.log(data);
	// document.write(data["articles"][0]["author"]);
}

function draw() {
  // put drawing code here
}

