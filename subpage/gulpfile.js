const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  rename = require('gulp-rename'),
	  cssnano = require('gulp-cssnano');
	  
gulp.task('sass',()=>{
	gulp.src('./sass/*.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./css'));
})
gulp.task('default',()=>{
	gulp.watch('./sass/*.scss',['sass']);
})
