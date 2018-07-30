const gulp = require("gulp");
const replace = require("gulp-replace");
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
  const sass = require("gulp-sass");
  const ap = require("gulp-autoprefixer");

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

gulp.task("sw", () => {
  
  const pkg = require("./package.json");
  
  return gulp
    .src("./src/js/sw.js")
    .pipe(replace('{%VERSION%}', pkg.version))
    .pipe(gulp.dest("./"));
});

gulp.task('default', ['css', 'sw']);