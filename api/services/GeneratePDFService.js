/* global User */

PDFDocument = require('pdfkit');
blobStream  = require('blob-stream');
const fs = require('fs');

module.exports= {
  generatePDFByFirstName: function(userName) {
    return new Promise(function(resolve, reject) {
      User.find({firstName : userName}).exec(function(err, result) {
        var isGenerated = false;

        if (err) {
          console.log('Error : '+ err);
          return response.negotiate(err);
        } else {
          if (!result.length) {
            return false;
          } else {
            //generate document for each found the user
            result.forEach(function (user, index) {
              isGenerated = false;
              var PDFDocument, doc;
              PDFDocument = require('pdfkit');
              doc = new PDFDocument;

              var stream = doc.pipe(fs.createWriteStream('output.pdf', {
                flags: 'w',
                defaultEncoding: 'binary',
                fd: null,
                autoClose: true
              }));

              var writeStream = fs.createWriteStream('test.html');

              doc.fontSize(25).text('firstName: ' + user.firstName, 100, 100);
              doc.fontSize(25).text('lastName: ' + user.lastName, 100, 200);
              doc.image(user.image, 100, 250, {
                width: 400,
              }).text('Image', 100, 400);

              doc.end();

              stream.on('finish', function () {
                try {
                  var stats = fs.statSync("output.pdf");
                  var fileSizeInBytes = stats["size"];
                  fs.open('output.pdf', 'r', function (status, fd) {
                    if (status) {
                      console.log('Error : ' + status.message);
                      return;
                    }
                    var buffer = new Buffer(fileSizeInBytes);
                    fs.read(fd, buffer, 0, fileSizeInBytes, 0, function (err, num) {
                      isGenerated = true;
                      User.update({id: user.id}, {pdf: buffer}).exec(function (err, res) {
                        if (err) {
                          console.log('Error : ' + +err);
                          return res.negotiate(err);
                        } else
                           isGenerated = true;

                          return  resolve(isGenerated);
                      });

                    });
                  });


                } catch (e) {
                  console.log(e);
                }
              });
            })
          }
        }
      });
    });
  }
};
