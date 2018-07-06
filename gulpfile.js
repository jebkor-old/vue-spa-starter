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


gulp.task('css', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');

  return gulp
    .src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport(),
      precss(),
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('default', ['css']);