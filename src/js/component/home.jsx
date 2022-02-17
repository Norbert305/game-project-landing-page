import React from "react";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div classNameName="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
							<a className="nav-link" href="#">
								Games of the year
							</a>
							<a className="nav-link" href="#">
								Future Games
							</a>
							<a className="nav-link" href="#">
								About Us
							</a>
							<a className="nav-link" href="#">
								Please Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
			<div classNameName="game1">
				<section>
					<article>
						<p>
							Want to receive the latest news on games!!! Please
							sign up now!!! You will enjoy the awsome content
							provided to you!! The best games from the past,
							present and future are here
							nooooowwwwwwwwwwwww!!!!!!!!!!
						</p>
						<button
							type="button"
							className="btn btn-primary btn-lg">
							Sign Up
						</button>
						<p>If already a member please login!!!</p>
						<button
							type="button"
							className="btn btn-primary btn-lg">
							Login
						</button>
					</article>
				</section>
			</div>
			<h2
				className="gamesOfYear"
				id="gamesOfYear"
				style={{ color: "wheat" }}>
				Games Of The Year
			</h2>
			<div
				id="carouselExampleControls"
				class="carousel slide"
				data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							src="https://images.immediate.co.uk/production/volatile/sites/3/2021/09/spider-man-2-2023-4255476.png"
							className="d-block w-100"
							alt="spider"
						/>
					</div>
					<div class="carousel-item">
						<img
							src="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/kratos-god-of-war-.jpg"
							className="d-block w-100"
							alt="god-of-war"
						/>
					</div>
					<div class="carousel-item">
						<img
							src="https://media.gq-magazine.co.uk/photos/5d13ae679fa6014038839ef1/master/pass/red-dead-redemption-03-22oct18_b.jpg"
							className="d-block w-100"
							alt="red-dead"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<h2
				className="gamesOfYear"
				id="gamesOfYear"
				style={{ color: "wheat" }}>
				Future Games!!!
			</h2>
			<div className="future-games big-card">
				<div className="row g-0">
					<div className="overflow col-md-6 card">
						<h1>Batman Gotham Nights!!!</h1>
						<p>Comming out this year!!!</p>
					</div>
					<div className="overflow col-md-6">
						<img
							src="https://images.pushsquare.com/2d620a81eab25/gotham-knights-ps5-playstation-5.large.jpg"
							className="bat-girl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
