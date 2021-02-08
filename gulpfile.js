var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('sass', function () {
    return gulp.src('./sass/styles.scss')
    .pipe(autoprefixer())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/*.scss', gulp.series('sass'));
});