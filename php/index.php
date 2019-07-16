<script src="../p5/p5.min.js"></script>
<script src="../p5/addons/p5.dom.min.js"></script> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>

<script type = "text/javascript">
	var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";
	var authors = [];

	function setup(){
		loadJSON(url, gotData);
	}

	function gotData(data){
		console.log(data.articles.length);
		console.log(data);
		for (var i = 0; i < data.articles.length; i++) {
			let author;
			if(data.articles[i].author == null){
				author = "";
			}else{
				author = data.articles[i].author;
			}
			authors.push(author); 
		}
		console.log(authors);
		$.post("./index.php", data.articles[0]);
	}

	function getAuthors(){
		$.post("index.php", authors);
	}
</script>

<?php
	$host = 'localhost';
	$user = 'root';
	$password = '';
	$dbname = 'Panoptic-Post';

	//	Set DSN
	$dsn = 'mysql:host='. $host. ';dbname='. $dbname;

	//	Create a PDO instance
	$pdo = new PDO($dsn, $user, $password); 
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
	$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

	$url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d0061d2a21f43efab81299a242f0c68";
	//  Initiate curl
	$ch = curl_init();
	// Will return the response, if false it print the response
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// Set the url
	curl_setopt($ch, CURLOPT_URL,$url);
	// Execute
	$result=curl_exec($ch);
	// Closing
	curl_close($ch);

	$json = json_decode($result, true);
	$articles = $json["articles"];

	// Clearing Table 'trending' so there are no duplicates
	$stmt = $pdo->prepare("DELETE FROM trending WHERE 1");
	$stmt->execute();

	foreach($articles as $article){
		$author; $description; $publishedAt; $source; $title; $url; $urlToImage;

		if ($article["author"] != null){
			$author = $article["author"];
		}else{
			$author = "";
		}

		if ($article["description"] != null){
			$description = $article["description"];
		}else{
			$description = "";
		}

		if ($article["publishedAt"] != null){
			$publishedAt = $article["publishedAt"];
		}else{
			$publishedAt = "";
		}

		if ($article["source"]["name"] != null){
			$source = $article["source"]["name"];
		}else{
			$source = "";
		}

		if ($article["title"] != null){
			$title = $article["title"];
		}else{
			$title = "";
		}

		if ($article["url"] != null){
			$url = $article["url"];
		}else{
			$url = "";
		}

		if ($article["urlToImage"] != null){
			$urlToImage = $article["urlToImage"];
		}else{
			$urlToImage = "";
		}

		$sql = "INSERT INTO trending(author, description, publishedAt, source, title, url, urlToImage) VALUES(:author, :description, :publishedAt, :source, :title, :url, :urlToImage)";
		$stmt = $pdo->prepare($sql);
		$stmt -> execute(["author" => $author, "description" => $description, "publishedAt" => $publishedAt, "source" => $source, "title" => $title, "url" => $url, "urlToImage" => $urlToImage]);
		echo "Post Added". "<br>";
	}