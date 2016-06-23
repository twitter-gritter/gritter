module.exports = {
  login: function(req,res,next){
    res.direct('/');
    res.send("Logged in");
  }
};
