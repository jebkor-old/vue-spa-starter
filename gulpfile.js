const gulp = require("gulp");
const sass = require("gulp-sass");
const ap = require("gulp-autoprefixer");
const concat = require("gulp-concat");

gulp.task("vendor", function() {
  gulp.src([
      "node_modules/vuetify/dist/vuetify.min.css"
  ], {
      base: "node_modules/"
  })
  .pipe(concat("vendor.css"))
  .pipe(gulp.dest("./dist/styles"))
});