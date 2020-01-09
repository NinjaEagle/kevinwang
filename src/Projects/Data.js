// eslint-disable-next-line import/prefer-default-export
import restroomfinder from "../images/restroomfinder.gif";
import restaurantjourney from "../images/restaurantjourney.gif";
import React from "react";
import Projects from "../Pages/Projects";


class Data extends React.Component {
    
  render(){
    const projects = [
      {
        name: 'NYC Restroom Locator',
        info:
          'A website that allows a user to click on any restroom marker on the map to get information so it can be added to the visit list and review it. Built with React frontend and Rails backend.',
        img: restroomfinder,
        githubFrontEnd:
          'https://github.com/NinjaEagle/nyc-restroom-locator-frontend',
        githubBackEnd:
          'https://github.com/NinjaEagle/nyc-restroom-finder-backend',
        video: 'https://www.youtube.com/watch?v=7EaZ7jpVICQ&t=1s',
        live: 'http://ninjaeagle.github.io/nyc-restroom-locator-frontend',
        react: true,
        rails: true,
      },
      {
        name: 'Restaurant Journey',
        info:
          ' A click-through game that allows a user to select restaurants in each borough with a goal to get through all five boroughs without getting sick. Built with React frontend and Rails backend.',
        img: restaurantjourney,
        githubFrontEnd:
          'https://github.com/NinjaEagle/restaurant-journey-app-frontend',
        githubBackEnd:
          'https://github.com/Franchely/restaurant-journey-app-backend',
        video: 'https://www.youtube.com/watch?v=jIzeiSOjo-s&t=2s',
        live: 'https://ninjaeagle.github.io/restaurant-journey-app-frontend',
        react: true,
        rails: true,
      },
    
      {
        name: 'Travel Advice',
        info:
          'Allows travelers to click on a destination on the sidebar and view climate, top attractions, and past traveler reviews. Built with Vanilla JS and Ruby on Rails.',
        img:
          'https://www.newsbtc.com/wp-content/uploads/2018/07/Singapore-Blockchain-700x400.jpg',
        // eslint-disable-next-line quotes
        githubFrontEnd: "https://github.com/NinjaEagle/super-tripviews-api",
        js: true,
        rails: true,
      },
    ];
  return(
    <div>
      <Projects data={projects} />
    </div>
  )
  }
}
export default Data;