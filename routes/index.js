var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  var randnum = Math.random();
  if(randnum > 0.5){
  	res.render("index",projects);
  }else{
  	res.render("index_alternate", projects);
  }
  // Here you should implement your random landing page rendering functionality
};