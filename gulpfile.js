var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

function getConfig(name) {
	delete require.cache[require.resolve('./package.json')];
	return require('./package.json')[name];
}

gulp.task('browserify', function () {
	return gulp.src(['./src/*.js'])
		.pipe(browserify())
		.pipe(gulp.dest('./public/js/'));
})

gulp.task('clone-imgs', function () {
	return gulp.src(getConfig('assets').imgs)
		.pipe(gulp.dest('./public/imgs/'));
})

gulp.task('clone-css', function () {
	return gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/css/'));
})

gulp.task('watch', function () {
	gulp.watch('./src/**/*.js', ['browserify']);
	gulp.watch('./src/imgs/*', ['clone-imgs']);
	gulp.watch('./src/scss/**/*', ['clone-css']);
})

gulp.task('default', ['clone-imgs', 'clone-css', 'browserify'])