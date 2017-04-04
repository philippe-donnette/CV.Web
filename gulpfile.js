var gulp = require("gulp");
var runSeq = require('run-sequence');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var karma = require('gulp-karma');
var install = require("gulp-install");
var replace = require('gulp-replace');

gulp.task('compile-app', function () { 
    runSeq('packages-install', 'src-clean', 'src-bower-css', 'src-lib-css', 
    'src-bower-js', 'src-bootstrap-less', 'src-site-less',
    'src-bootstrap-copy-fonts', 'src-fontawesome-copy-fonts',
    'src-devicons-copy-fonts', 'src-mfizz-copy-fonts',
    'dist-build', 'run-test');//, 'dist-bower-css');
});


gulp.task('packages-install', function () { 
    return gulp.src(['./bower.json', './package.json'])
        .pipe(install());    
}); 


gulp.task('src-bower-js', function () {
    return gulp.src([
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        './bower_components/angular-bootstrap/ui-bootstrap.js',
        './bower_components/angular-mocks/angular-mocks.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/angular-masonry/angular-masonry.js',
        './bower_components/jquery/dist/jquery.js',
        './bower_components/get-size/get-size.js',
        './bower_components/jquery-bridget/jquery-bridget.js',
        './bower_components/ev-emitter/ev-emitter.js',
        './bower_components/desandro-matches-selector/matches-selector.js',
        './bower_components/fizzy-ui-utils/utils.js',
        './bower_components/outlayer/item.js',
        './bower_components/outlayer/outlayer.js',
        './bower_components/masonry/masonry.js',
        './bower_components/imagesloaded/imagesloaded.js'
    ])
        .pipe(gulp.dest('./src/scripts'));
});

gulp.task('src-bower-css', function () {
    return gulp.src([
        './bower_components/fontawesome/css/font-awesome.css',
        './bower_components/devicons/css/devicons.css'
    ])
    .pipe(gulp.dest('./src/css'));
});

gulp.task('src-lib-css', function () {
    return gulp.src([
        './lib/font-mfizz-2.2/font-mfizz.css'
    ])
    .pipe(gulp.dest('./src/css'));
});

/*
gulp.task('dist-bower-css', function () {
    return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/fontawesome/css/font-awesome.css',
        './bower_components/dropzone/dist/dropzone.css',
        './bower_components/videogular-themes-default/videogular.css'
    ])
        .pipe(gulp.dest('./content/css'));
});
*/

gulp.task('src-fontawesome-copy-fonts', function() {
  return gulp.src('./bower_components/fontawesome/fonts/*')
    .pipe(gulp.dest('./src/fonts'));
});

gulp.task('src-bootstrap-copy-fonts', function() {
  return gulp.src('./bower_components/bootstrap/fonts/*')
    .pipe(gulp.dest('./src/fonts'));
});

gulp.task('src-devicons-copy-fonts', function() {
  return gulp.src('./bower_components/devicons/fonts/*')
    .pipe(gulp.dest('./src/fonts'));
});

gulp.task('src-mfizz-copy-fonts', function() {
  return gulp.src('./lib/font-mfizz-2.2/fonts/*')
    .pipe(gulp.dest('./src/fonts'));
});

gulp.task('bootstrap-copy-variables', function() {
  return gulp.src('./less/variables.less')
    .pipe(gulp.dest('./bower_components/bootstrap/less'));
});

gulp.task('src-bootstrap-less', ['bootstrap-copy-variables'], function() {
  return gulp.src('./bower_components/bootstrap/less/bootstrap.less')
    .pipe(less())
    //.pipe(minifyCSS())
    .pipe(gulp.dest('./src/css'));
});

gulp.task('src-site-less', function() {
  return gulp.src('./less/site.less')
    .pipe(less())
    //.pipe(minifyCSS())
    .pipe(gulp.dest('./src/css'));
});

gulp.task('dist-css-js-concat-min', function() {
  return gulp.src('./src/index.html')
    
    .pipe(htmlreplace({
        base: {
            src: '/',
            tpl: '<base href="%s">'
        }
    }))
    .pipe(usemin({
      cssbootstrap: [ minifyCSS(), 'concat', rev() ],
      csssite: [ minifyCSS(), 'concat', rev() ],
      fonts: [ minifyCSS(), 'concat', rev() ],
      //html: [],
      libjs: [ uglify({mangle: false}), rev() ],
      jsapp: [ uglify({mangle: false}), rev() ]
      //inlinejs: [],
      //inlinecss: []
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('dist-htaccess', function() {
  return gulp.src('./src/.htaccess')
    .pipe(gulp.dest('./dist'));
});

gulp.task('src-clean', function () {
    return gulp.src(['./src/scripts', './src/css'], { read: false })
        .pipe(clean());
});

gulp.task('dist-delete', function () {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});

gulp.task('dist-fonts', function () {
    return gulp.src(['./src/fonts/*'])
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('dist-images', function () {
    return gulp.src(['./src/images/**/*'])
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('dist-views', function () {
    return gulp.src(['./src/app/views/*'])
        .pipe(gulp.dest('./dist/app/views'));
});

gulp.task('dist-directives', function () {
    return gulp.src(['./src/app/directives/**/*.html'])
        .pipe(gulp.dest('./dist/app/directives'));
});

gulp.task('dist-build', function () { 
    runSeq('dist-delete', 'dist-fonts', 'dist-images', 'dist-views',
    'dist-css-js-concat-min', 'dist-directives', 'dist-htaccess',
    'dist-replace-apiUrl');
});

// gulp.task('dist-build', function () { 
//     runSeq('dist-delete', 'dist-fonts', 'dist-images', 'dist-views',
//     'dist-css-js-concat-min', 'dist-directives', 'dist-htaccess');
// });



//START REPLACE @@apiUrl in app.js
gulp.task('dist-replace-apiUrl', function () {
    return gulp.src(['./dist/app-*.js'])
    .pipe(replace('http://localhost:5000/', 'http://cvapi.donola.net/'))
    .pipe(gulp.dest('./dist')); 
});
//END REPLACE @@apiUrl in app.js 







gulp.task('run-test', function () {
       var testFiles = [
              //'tests/app/**/*Spec.js'
           ];    
       // Be sure to return the stream 
       return gulp.src(testFiles)
           .pipe(karma({
               configFile: 'src/karma.conf.js',
               action: 'watch'
          }))
          .on('error', function (err) {
              // Make sure failed tests cause gulp to exit non-zero 
              throw err;
        });
});