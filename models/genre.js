const mongoose = require('mongoose');

// Genre Schema. Not required for the database, just for the application
const genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

// Add Genre
module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}
