var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
 
//run command "gulp sass" to compile, prefix and minimize Sass files. The final CSS will be storaged in 'CSS' folder.
gulp.task('sass', function () {
    return gulp.src('./sass/styles.scss')
    .pipe(autoprefixer())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

//run command "gulp watch" to run sass command every time a change is saved on any Sass file 
gulp.task('watch', function () {
    gulp.watch('./sass/*.scss', gulp.series('sass'));
});