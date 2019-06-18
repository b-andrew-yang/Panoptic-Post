<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Panoptic Post</title>
	<meta name="author" content="Andrew Yang">
	<meta name="author" content="Kibae Kim">
	<meta http-equiv="content-language" conent="en-us"/>

	<link rel="stylesheet" href="./resources/css/style.css" type="text/css" >
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" >

	<script src="./p5/p5.min.js"></script>
	<script src="./p5/addons/p5.dom.min.js"></script>
	<!-- script src="./resources/scripts/sketch.js"></script> --> 
</head>

<body>
	<header role="banner" id="PP-header">
		<div class="container">
			<div class="topnav">
				<a href="#home" id="home-button">Panoptic Post</a>
				<!--<a href="#login" id="login-button">Login/Register</a>-->
				<!--<a href="#register">Register</a>-->
				<!--<div class="search-container">
					<form action="/actionpage.php">
						<input type="text" placeholder="Search..." name="search" id="search-bar">
						<button type="submit" id="search-button"><i class="material-icons">search</i></button>
					</form>-->
				<form action="/loginpage.php">
					<button type="button" id="login-button"><i class="material-icons">account_box</i></button>
				</form>
				<form action="/php/search_action.php">
					<input type="text" name="search">
				</form>	
			</div>
		</div>     
		<div class="container">
			<div class="subject-nav">
				<a href="#world">World</a>
				<a href="#us">U.S.</a>
				<a href="#politics">Politics</a>
				<a href="#business">Business</a>
				<a href="#science">Science</a>
				<a href="#sports">Sports</a>
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
		<div class="row content">
			<p>
				<b>Stories go here...</b>
				<br />
				<br />
				<br />
				<br />
				<br />
			</p>
		</div>
		<div class="row footer">
			<p>
				<b>Powered by Google News API</b>
			</p>
		</div>
	</div>
</body>
</html>