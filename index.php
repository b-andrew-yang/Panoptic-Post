<!DOCTYPE html>
<html>
<head>	
	<title>Panoptic Post</title>
	<meta name="author" content="Andrew Yang">
	<meta name="author" content="Kibae Kim">
	<meta http-equiv="content-language" content="en-us">

	<link rel="stylesheet" href="./resources/css/style.css" type="text/css">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

	<script src="./p5/p5.min.js"></script>
	<script src="./p5/addons/p5.dom.min.js"></script>
	<script src="./resources/scripts/sketch.js"></script> 
</head>

<body>
	<h2 id="intro-banner">Welcome to Panoptic Post</h2>

	<!-- The video for when the page first loads -->
	<video autoplay muted loop id="homeVideo">
		<source src="./images/World.mp4" type="video/mp4">
	</video>

	<header role="banner" id="PP-header">
		<div class="container">
			<div class="topnav">
				<a href="#home" id="home-button">Panoptic Post</a>
				<form action="/loginpage.php">
					<button type="button" id="login-button">
						<i class="material-icons">account_box</i>
					</button>
				</form>
				<form action="./php/search_action.php" method="get">
					<input type="text" name="search">
					<input type="submit">
				</form>	
			</div>
		</div>
		<div class="container">
			<div class="subject-nav">
				<a href="#world">World</a>
				<a href="#us">U.S.</a>
				<a href="#politics">Politics</a>
				<a href="#business" onclick="populateBox('business')">Business</a>
				<a href="#science" onclick="populateBox('science')">Science</a>
				<a href="#sports" onclick="populateBox('sports')">Sports</a>
				<a href="#travel">Travel</a>
				<button type="button" id="login-button">Login/Register</button>
			</div>
		</div>
	</header>

	<div class="box">
		<div class="row header">
			<p>
				<b>Top Stories</b>
			</p>
		</div>
		<div class="row content" id="content-box">
			<a href="#start-news" onclick="populateBox('trending')" id="story-button">See Today's Top Stories</a>
		</div>
		<div class="row footer">
			<p>
				<b>Powered by News API</b>
			</p>
		</div>
	</div>

</body>
</html>