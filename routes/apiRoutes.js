var db = require("../models");
var passport = require("../config/passport");

var mysql = require("mysql");

var connection =require("../connection");

module.exports = function(app) {

app.get("/api/states"), fucntion(req, res){
  connection.query("SELECT * FROM States", function(err,data){
    if(err) throw err;
  res.json(data);
  })
}
app.get("/api/counties/:id", function(req,res){
  var state=req.params.id;
   connection.query("SELECT * FROM Counties where statename = ?",state,function(err,data){
     if(err) throw err;
     res.json(data);
   })
},

app.get("/api/properties/:id", function(req, res){
  var county= res.params.id;
  connection.query("SELECT * FROM properies where countyname= ?", county, function(err,data){
    if(err)  throw err;
    res.json(data)
  })
})



// app.post("/")

  // If the user has valid login credentials, send them to the members page. Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
  }),

  // Route for signing up a user.
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    })
      .then(function() {
        res.redirect(307, "/");
      })
      .catch(function(err) {
        console.log(err)
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  })


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
     // if the user is succesfully logged in , all of the user information would be given 
     //as the user object.
      res.json({
        email: req.user.email,
        id: req.user.id,
        password:req.user.password,
        username: req.user.username,
        movie_one:req.user.movie_one,
        movie_two:req.user.movie_two,
        movie_three:req.user.movie_three,
        actor_one:req.user.actor_one,
        actor_two:req.user.actor_two,
        actor_three:req.user.actor_three,
        director_one:req.user.director_one,
        director_two:req.user.director_two,
        director_three:req.user.director_three,
        genre_one:req.user.genre_one,
        genre_two:req.user.genre_two,
        genre_three:req.user.genre_three
      });
    }
  });

  //getting the information from the stored results for movie search
  app.get("/api/movieSearchInfo/:id",function(req,res){
    var id=req.params.id;
   connection.query("SELECT * FROM SearchMovieData WHERE username=?",id,function(err,data){
     if(err) throw err;
     res.json(data);
   })
})

  //getting the information from the stored results for buddy search
  app.get("/api/buddySearchInfo/:id",function(req,res){
    var id=req.params.id;
   connection.query("SELECT * FROM SearchBuddyData WHERE username=?",id,function(err,data){
     if(err) throw err;
     res.json(data);
    })
  })

   

  app.post("/api/search/:id",function(req,res){
    var id=req.params.id;
    var numberofMovies=req.body.numberMovies;

    //moviesearch called from a imported function
    console.log(numberofMovies);
    movieSearch.movieSearch(id,numberofMovies);

    //buddy search is called from a imported function
    buddySearch.buddySearch(id);

    
})


  //putting the submitted information from userpage into the database 
  app.put("/api/submitUserInformation/:id", function(req, res){
    var id = req.params.id;
    console.log(id)
    db.User.update(
      {movie_one: req.body.movie_one,
        movie_two:req.body.movie_two,
        movie_three:req.body.movie_three,
        actor_one:req.body.actor_one,
        actor_two:req.body.actor_two,
        actor_three:req.body.actor_three,
        director_one:req.body.director_one,
        director_two:req.body.director_two,
        director_three:req.body.director_three,
        genre_one:req.body.genre_one,
        genre_two:req.body.genre_two,
        genre_three:req.body.genre_three},
      {where: {
        username:id
      }}
      )
    .then(function(data) {
      res.json(data);})

    })

  //deletes the stored search information to open it up on the next search
  app.delete("/api/deleteSearch/:id",function(req,res){
  connection.query("DELETE FROM SearchBuddyData WHERE username = ?",req.params.id,function(err,result){
  if(err) throw err;
         // console.log("deleted")
         
  connection.query("DELETE FROM SearchMovieData WHERE username =?",req.params.id,function(err,result){
  if(err) throw err;
  // console.log("2deleted");
  res.json(result);
        })
      })
    })


//manually updates the user information used without logout and login
app.post("/api/relogin", function(req, res){
    req.session.passport.user = req.body;
    console.log("yayay");
    res.redirect("/members");

  }
)

}
 
 





 
   
     
   
