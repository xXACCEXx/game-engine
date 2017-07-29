var gulp = require('gulp');
var browserify = require('gulp-browserify');

function getConfig(name) {
	delete require.cache[require.resolve('./package.json')];
	return require('./package.json')[name];
}

gulp.task('browserify', function () {
	return gulp.src(['./src/index.js'])
		.pipe(browserify())
		.pipe(gulp.dest('./public/js/'));
})

gulp.task('clone-imgs', function () {
	return gulp.src(getConfig('assets').imgs)
		.pipe(gulp.dest('./public/imgs/'));
})

gulp.task('watch', function () {
	gulp.watch('./src/**/*.js', ['browserify']);
	gulp.watch('./src/imgs/*', ['clone-imgs']);
})