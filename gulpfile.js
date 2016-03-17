/* jshint esnext:true */

var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// SERVER
gulp.task('clean', function(){
    return del('dist');
});

gulp.task('build:server', function () {
	var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject));
	return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'));
});

// CLIENT
/*
  jsNPMDependencies, sometimes order matters here! so be careful!
*/
var jsNPMDependencies = [
    'es6-shim/es6-shim.min.js',
    'es6-shim/es6-shim.map',
    'systemjs/dist/system-polyfills.js',
    'systemjs/dist/system-polyfills.js.map',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js',
    'angular2-jwt/angular2-jwt.js',
    'angular2-jwt/angular2-jwt.js.map',
    'angular2/typings/browser.d.ts',
    'angular2/typings/es6-collections/es6-collections.d.ts',
    'angular2/typings/es6-promise/es6-promise.d.ts'
] ;

gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file); });
    
    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'));
     
    //Let's copy our index into dist   
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('dist'));
    return [copyJsNPMDependencies, copyIndex];
});

gulp.task('build:app', function(){
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject));
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'));
});

gulp.task('build:static', function(){
    var templates = gulp.src(['client/app/components/templates/*'], {
            base: 'client/app'
        }).pipe(gulp.dest('dist/app'));
    var assets = gulp.src(['client/app/assets/**/*'], {
            base: 'client/app'
        }).pipe(gulp.dest('dist/app'));
    return [templates, assets];
});

gulp.task('build:modules', function(){
    return gulp.src(['node_modules/**/*'])
        .pipe(gulp.dest('dist/node_modules'));
});

gulp.task('build', function(callback){
    runSequence('clean', 'build:server', 'build:index', 'build:static', 'build:modules', 'build:app', callback);
});

gulp.task('default', ['build']);


