/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/* global User */

PDFDocument = require('pdfkit');
blobStream  = require('blob-stream');
const fs = require('fs');


module.exports = {
	findUser : function(req, res) {
    console.log("I'm here");

    var userName = req.param('firstName');
    console.log(userName);

    User.find({firstName : userName}).exec(function(err, result) {
      if (err) {
        console.log('error');
        return res.negotiate(err);
      }
      var user = result[0];

      var PDFDocument, doc;

      PDFDocument = require('pdfkit');

      doc = new PDFDocument;

      doc.pipe(fs.createWriteStream('output.pdf'));

      doc.fontSize(25).text('firstName: '+ user.firstName, 100, 100);
      doc.fontSize(25).text('lastName: '+ user.lastName, 100, 200);
      doc.image(user.image, 100, 400, {
        width: 100
      }).text('Image', 100, 400);

      doc.end();


        var bitmap = fs.readFileSync('output.pdf');
        // convert binary data to base64 encoded string
        var pdfBinary = new Buffer(bitmap).toString('base64');


      User.update({id: user.id}, {pdf: pdfBinary}).exec(function(err, res) {
        if (err) {
          console.log('error ' + err);
          return res.negotiate(err);
        }
        console.log('updated pdf');
      });
      return res.json({
          user : result,
          error: err
        });
    });



  },
  addUser : function(req, res) {

  }
};

