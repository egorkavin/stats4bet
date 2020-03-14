const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sassCompile', function() {
	return gulp
		.src('./scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer([ 'last 10 versions' ], { cascade: false }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
	gulp.watch('./scss/**/*.scss', gulp.series('sassCompile'));
});
