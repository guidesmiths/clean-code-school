const data = require('./data.json');

/**
 * As a rule of thumb, if you feel the need to comment on something inside a method, you should take this code and put it in a new method. 
 * Even a single line can and should be split off into a separate method, if it requires explanations. 
 * And if the method has a descriptive name, nobody will need to look at the code to see what it does.
 */
const formatMovies = movies => {
    return movies.map(movie => {

        // John Carpenter's movies must have a plus 5 in the review because rotten tomatoes users are biased regarding this director
        let review = movie.director === 'John Carpenter' ? movie.rotten_tomatoes_review + 5 : movie.rotten_tomatoes_review;

        // Horror movies are R rated - Thriller movies are PG-13 rated - The order defines the hierarchy of the ratings
        let rating;
        if(movie.classifications.includes('horror')){
            rating = 'R';
        }
        else if(movie.classifications.includes('thriller')){
            rating = 'PG-13'
        }

        // box office data must the total amount of domestic plus international
        let box_office_domestic, box_office_international, box_office_worldwide;
        if (movie.box_office.domestic.startsWith('$')){
            box_office_domestic = parseInt(movie.box_office.domestic.replace(/[, $]/g, ''));
            box_office_international = parseInt(movie.box_office.international.replace(/[, $]/g, ''));
            box_office_worldwide = (box_office_domestic + box_office_international) + ' - $';
        }
        else if (movie.box_office.domestic.startsWith('€')){
            box_office_domestic = parseInt(movie.box_office.domestic.replace(/[, €]/g, ''));
            box_office_international = parseInt(movie.box_office.international.replace(/[, €]/g, ''));
            box_office_worldwide = (box_office_domestic + box_office_international) + ' - €';
        }

        return {
            title: movie.title,
            director: movie.director,
            release_year: movie.release_year,
            classifications: movie.classifications,
            rating,
            box_office: box_office_worldwide,
            review
        }   
    });
};


const formattedMovies = formatMovies(data);
console.log(JSON.stringify(formattedMovies, null, 2))