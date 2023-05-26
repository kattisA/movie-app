# Movie Search app

Movie search app retrieving information from OMBD API. The application is developed for learning purposes. 
During this project I learned more about:
* Using API:s and more specifically the OMDB API
* More understanding about fetching data and rendering it in React
* React application in general
* React hooks
* Local storage for desktop applications
* Bootstrap
* Website accessibility

## Visit 

[The site is live](https://kattisa.github.io/movie-app/) at Github pages.

## Usage
Type a movie title in the search bar. If you want to add a movie to your favourites movies do so by clicking on the heart icon.
The app will only store your favourite movies locally.

## Description

A React app using the [OMDB API](https://www.omdbapi.com/) displaying movies after search. CSS Framework is Bootstrap.

You can only add a movie once in the favourites list, so no duplicates.  The fetch code has error handling 
to avoid any bad experience for the user.

Some movies will not have a poster or fields like description and rating. Try to search for "Ironman" and see how the cards looks like. 
I  made a placeholder picture with Canva if a poster is missing.

I have used the Bootstrap utility CSS classes as much as possible to learn more and to keep the site more cohesive and responsive.

## Accessibility and design
I added values for accessibility improvement using the [WAVE evaluation tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh). 
The colors are inspected for their contrast ratio to provide a nice experience. I have created a simple design 
using mostly Bootstrap CSS classes.

## Getting Started

After cloning the project run npm install. To start the project type npm start in the console and to stop ctrl + C.

### Dependencies

* Node and npm
* React
* Bootstrap

### Installing

Use npm install. You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Executing program

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
```
npm start
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
```
npm run build
```

## Authors

This repository is written by and belongs to Katarina Lejonlid.

## Acknowledgments

Here are some helpful links for developing the movie search app.
* Awesome movie app tutorial from Chris Blakey [React movie app tutorial](https://www.freecodecamp.org/news/react-movie-app-tutorial/)
* [Chris Blakey repository](https://github.com/chrisblakely01/react-movie-app/blob/main/src/components/MovieList.js)
* [OMDB API site](https://www.omdbapi.com/)
* [Bootstrap Docs](https://getbootstrap.com/docs/4.0)
* [Canva](https://www.canva.com/sv_se/)
* [Contrast Ration](https://www.siegemedia.com/contrast-ratio)
