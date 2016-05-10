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
const util = require('util');

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
      doc.image(user.image, 100, 350, {
        width: 100
      }).text('Image', 100, 400);

      doc.end();

      try {
        var bitmap = fs.readFileSync('output.pdf');
        
        //TO DO: add promise and run this after file is updated
        fs.open('output.pdf', 'r', function(status, fd) {
          if (status) {
            console.log(status.message);
            return;
          }
          var buffer = new Buffer(8192);
          fs.read(fd, buffer, 0, 8192, 0, function(err, num) {
            console.log(num);
            console.log(buffer.toString('utf8', 0, num));

            User.update({id: user.id}, {pdf: buffer.toString('utf8', 0, num)}).exec(function(err, res) {
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
        });

        /*console.log(util.inspect(bitmap, false, null));
        console.log('-----------');
        console.log(util.inspect(pdfBinary, false, null));*/

      } catch (e) {
        console.log(e);
        // Here you get the error when the file was not found,
        // but you also get any other error
      }


    });



  },
  addUser : function(req, res) {

  }
};

