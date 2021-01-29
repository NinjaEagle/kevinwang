// eslint-disable-next-line import/prefer-default-export
import restroomfinder from "../images/restroomfinder.gif";
import restaurantjourney from "../images/restaurantjourney.gif";
import rightshub from "../images/rightshub.gif";
import hackernewsclone from "../images/hackernewsclone.png";
import React from "react";
import Projects from "../Pages/Projects";

class Data extends React.Component {
	render() {
		const projects = [
			{
				name: "HackerNews Clone",
				info:
					"This site lets users post interesting articles as well as upvoting/commenting on other posts similar to HackerNews",
				technologies: "Built with React (Router, Hooks, Context), Firebase, HTML, CSS, Bootstrap",
				img: hackernewsclone,
				githubFrontEnd: "https://github.com/bbdavidbb/hackernewsclone",
				video: "",
				live: "https://michigan-hackernewsclone.netlify.app/",
				react: true,
			},
			{
				name: "RightsHub",
				info:
					"Our goal is to educate and inform the public about incidents of death from police in their area via data visualizations and educate them about their rights",
				technologies: "Built with React (Router, Hooks), Node.js, Leaflet, HTML, CSS, Bootstrap",
				img: rightshub,
				githubFrontEnd: "https://github.com/hackforblacklivesmatter-5-1/rightshub",
				video: "",
				live: "https://rightshub.netlify.app/",
				react: true,
			},
			{
				name: "NYC Restroom Locator",
				info:
					"A website that allows a user to view and filter restrooms on the map to get information so they can be added to the list to visit later",
				technologies:
					"Built with React (Router, Hooks), Ruby on Rails, PostgreSQL, Heroku, Bootstrap, CSS",
				img: restroomfinder,
				githubFrontEnd: "https://github.com/NinjaEagle/nyc-restroom-locator-frontend",
				githubBackEnd: "https://github.com/NinjaEagle/nyc-restroom-finder-backend",
				// video: "https://www.youtube.com/watch?v=7EaZ7jpVICQ&t=1s",
				live: "http://ninjaeagle.github.io/nyc-restroom-locator-frontend",
				react: true,
				rails: true,
			},
			{
				name: "Restaurant Journey",
				info:
					" A click-through game that allows a user to select restaurants in each borough with a goal to get through all five boroughs without getting sick.",
				technologies:
					"Built with React (Router), Ruby on Rails, PostgreSQL, Heroku, Bootstrap, CSS.",
				img: restaurantjourney,
				githubFrontEnd: "https://github.com/NinjaEagle/restaurant-journey-app-frontend",
				githubBackEnd: "https://github.com/Franchely/restaurant-journey-app-backend",
				video: "https://www.youtube.com/watch?v=jIzeiSOjo-s&t=2s",
				live: "https://ninjaeagle.github.io/restaurant-journey-app-frontend",
				react: true,
				rails: true,
			},

			// {
			// 	name: "Travel Advice",
			// 	info:
			// 		"Allows travelers to click on a destination on the sidebar and view climate, top attractions, and past traveler reviews.",
			// 	technologies: "Built with Vanilla JS, Ruby on Rails, PostgreSQL, CSS.",
			// 	img: "https://www.newsbtc.com/wp-content/uploads/2018/07/Singapore-Blockchain-700x400.jpg",
			// 	githubFrontEnd: "https://github.com/NinjaEagle/super-tripviews-api",
			// 	js: true,
			// 	rails: true,
			// },
		];
		return (
			<div>
				<Projects data={projects} />
			</div>
		);
	}
}
export default Data;
