import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="game1">
				<section>
					<article>
						<p>
							Want to receive the latest news on games!!! Please
							sign up now!!! You will enjoy the awsome content
							provided to you!! The best games from the past,
							present and future are here
							nooooowwwwwwwwwwwww!!!!!!!!!!
						</p>
						{/* create html forms for sign up and login followed by scroll images and hr line deviders. use road bros as example.  */}
					</article>
				</section>
			</div>
		</div>
	);
};

export default Home;
