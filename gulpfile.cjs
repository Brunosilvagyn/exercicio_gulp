const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');

function compilaSass() {
  return src('src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .on('error', sass.logError)
    .pipe(dest('dist/css'));
}

function comprimeImagens() {
  return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'));
}

function comprimeJS() {
  return src('src/js/**/*.js')
    .pipe(terser())
    .pipe(dest('dist/js'));
}

exports.default = series(compilaSass, comprimeImagens, comprimeJS);

