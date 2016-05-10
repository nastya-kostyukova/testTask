/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/* global User */

module.exports = {
	findUser : function(req, res) {
    console.log("I'm here");

    var user = req.param('firstName');
    console.log(user);

    User.find({firstName : user}).exec(function(err, result) {
      if (err) {
        console.log('error');
        return res.negotiate(err);
      }
      return res.json({
          user : result,
          error: err
        });
    });
  },
  addUser : function(req, res) {

  }
};

