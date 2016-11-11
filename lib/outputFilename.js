// Returns the filename of the report that should
// be saved to disk.
var logger = require('./logger');
var fs = require('fs');
var path = require('path');
module.exports = function(opts, testRun) {
  var basename = path.basename(opts.reportFilename, '.html');
  var dirname = path.dirname(opts.reportFilename);

  var filename = basename + ((opts.uniqueFilename) ? Date.now() : '') + '.html';
  if(opts.environment){

    dirname += '/' + opts.environment;

    if (!fs.existsSync(dirname)){

      fs.mkdirSync(dirname);
    }

    if(opts.target && opts.site){

      dirname += '/' + opts.target;

      if (!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
      }

      dirname += '/' + opts.site + '/';

      if (!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
      }

    }else{
      dirname += '/';
    }
  }else{
    if(opts.target && opts.site){

      dirname += '/' + opts.target;

      if (!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
      }

      dirname += '/' + opts.site + '/';

      if (!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
      }

    }
  }

  var outputPath = path.join(opts.reportsDirectory, dirname, filename);
  return outputPath;

};
