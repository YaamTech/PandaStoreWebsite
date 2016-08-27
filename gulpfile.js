/*
*	Program to manage preprocess tasks
*/
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify   = require('reactify');

var config = {
  html:{
    src: 'app/index.html',
    dest: 'build/'
  },
  reactjs: {
		src: 'app/js/react/*.js',
		dest: 'build/js',
		watch: ['app/js/react/*.js']
  },
  js: {
		src: 'app/js/*.js',
		dest: 'build/js'
  },
  image: {
		src: 'app/img/**/*',
		dest: 'build/img/'
	},
  css:{
    src: 'app/css/**/*',
		dest: 'build/css/'
  }
};

gulp.task('default',['reactjs','js', 'css', 'image', 'html']);

gulp.task('image', function() {
	return gulp.src(config.image.src)
		.pipe(gulp.dest(config.image.dest));
});

gulp.task('css', function() {
	return gulp.src(config.css.src)
		.pipe(gulp.dest(config.css.dest));
});

gulp.task('js', function() {
	return gulp.src(config.js.src)
		.pipe(gulp.dest(config.js.dest));
});

gulp.task('html', function() {
	return gulp.src(config.html.src)
		.pipe(gulp.dest(config.html.dest));
});

gulp.task('reactjs', function(){

    return gulp.src(config.reactjs.src)
        .pipe(browserify({
            transform: ['reactify']
        }))
        .pipe(gulp.dest(config.reactjs.dest));
});
