const Movie = require('../models/movie');

function newMovie(req, res) {
    res.render("movies/new");
}

function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove whitespace next to commas
    req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    if (req.body.cast) req.body.cast = req.body.cast.split(',');
    const movie = new Movie(req.body);
    movie.save(function(err) {
      // one way to handle errors
      if (err) return res.render('movies/new');
      console.log(movie);
      // for now, redirect right back to new.ejs
      res.redirect('/movies/index');
    });
}

function index(req, res) {
    Movie.find({}, function(err, apple) {
        // res.send(movies);
        res.render('movies/index', {apple});
    })
    // res.send("list of movies");
    // res.render('movies/index');
}

module.exports = {
    new: newMovie,
    create,
    index
};

