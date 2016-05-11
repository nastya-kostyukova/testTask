/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



const fs = require('fs');

module.exports = {
	findUser : function(request, response) {
    var userName = request.param('firstName');

    var result = GeneratePDFService.generatePDFByFirstName(userName).then(function(results) {
      console.log(results);
      return response.json({
        result: results
      });
    });

  }
};

