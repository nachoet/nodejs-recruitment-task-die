const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    Title: String,
    Released: Date,
    Genres: String,
    Director: String

})

mongoose.model('movies', movieSchema)

module.exports = movieSchema