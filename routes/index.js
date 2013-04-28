
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'iBalance' });
};


exports.about = function(req, res){
  res.render('about', { title: 'About' });
};

exports.technology = function(req, res){
  res.render('technology', { title: 'Technology' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact' });
};

exports.jobs = function(req, res){
  res.render('jobs', { title: 'Jobs' });
};


exports.coworking = function(req, res){
  res.render('coworking', { title: 'coworking' });
};