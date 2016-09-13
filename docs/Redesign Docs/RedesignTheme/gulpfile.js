var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
  bootstrap_dir: './bower_components/bootstrap-sass',
  public_dir: './public',
  scss_dir: './css/',
  scss_main: './css/app.scss',
};

gulp.task('css', function() {
  return gulp.src(config.scss_main)
  .pipe(sass({
    includePaths: [config.bootstrap_dir + '/assets/stylesheets'],
  }))
  .pipe(gulp.dest(config.public_dir + '/css'));
});

gulp.task('fonts', function() {
  return gulp.src(config.bootstrap_dir + '/assets/fonts/**/*')
  .pipe(gulp.dest(config.public_dir + '/fonts'));
});

gulp.task('default', ['css', 'fonts']);

gulp.task('watch', function() {
  gulp.watch(config.scss_dir + '*.scss', ['css', 'fonts']);
});
