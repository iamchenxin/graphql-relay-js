/* eslint-env node */
/* eslint no-sync: 0*/
const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('flow', function () {
  return flowType('src', 'lib');
});

// ........functions .......
function flowType(src, dst) {
  const srcPath = [ src + '/**/*.js',
    '!' + src + '/**/__tests__/**', '!' + src + '/**/__mocks__/**' ];
  return gulp
    .src(srcPath)
    .pipe(rename({extname: '.js.flow'}))
    .pipe(gulp.dest(dst));
}
