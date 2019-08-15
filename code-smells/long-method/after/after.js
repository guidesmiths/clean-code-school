const data = require('../data.json');

const calculateReview = require('./utils/review');
const calculateRating = require('./utils/rating');
const calculateTotalBoxOfficeRevenues = require('./utils/totalBoxOfficeRevenues');


const formatMovies = movies => {
    return movies.map(movie => {
        return {
            title: movie.title,
            director: movie.director,
            release_year: movie.release_year,
            classifications: movie.classifications,
            rating: calculateRating(movie.classifications),
            box_office: calculateTotalBoxOfficeRevenues(movie.box_office),
            review: calculateReview(movie.director, movie.rotten_tomatoes_review)
        }   
    });
};


const formattedMovies = formatMovies(data);
console.log(JSON.stringify(formattedMovies, null, 2))