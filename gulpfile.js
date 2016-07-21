var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('mytask', function() {
	return	gulp.src('app/**/*.sass')
	.pipe(sass())
	..pipe(dest('dist/'));
});
