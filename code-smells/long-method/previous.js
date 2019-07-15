const data = require('./data.json');

const formatMovies = movies => {
    return movies.map(({
        title,
        director,
        release_year,
        classifications,
        box_office,
        rotten_tomatoes_review
    }) => ({
            title,
            director,
            release_year,
            classifications,
            box_office,
            review: rotten_tomatoes_review
    }));
};


const formattedMovies = formatMovies(data);
console.log(JSON.stringify(formattedMovies, null, 2))