var gulp = require("gulp");
var webpack = require("webpack");

gulp.task("scripts", ["modernizr"], function (callback) {
   webpack(require("../../webpack.config"), function (err, stats) {
      if(err){
         console.log(err.toString());
      }
      console.log(stats.toString());
       callback();
   });
});