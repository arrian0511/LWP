/// <binding AfterBuild='copy:views, copy:styles' />
var	gulp = require('gulp'),
	gp_clean = require('gulp-clean'),
	gp_concat = require('gulp-concat'),
	gp_less = require('gulp-less'),
	gp_sourcemaps = require('gulp-sourcemaps'),
	gp_typescript = require('gulp-typescript'),
	gp_uglify = require('gulp-uglify');

var srcPaths = {
	app: [
		'Application/**/*.ts'
	],
	lib: [
		'node_modules/@angular/**',
		'node_modules/rxjs/**',
		'node_modules/core-js/**',
		'node_modules/zone.js/**',
		'node_modules/reflect-metadata/**',
		'node_modules/systemjs/dist/**',
		'node_modules/typescript/**',
		'node_modules/ng2-bootstrap/**',
		'node_modules/bootstrap/**',
		'node_modules/bootflat/**',
		'node_modules/jquery/**',
		'node_modules/ng2-charts/**',
		'node_modules/ng2-sidebar/**',
		'node_modules/chart.js/**',
		'node_modules/moment/**',
		'node_modules/angular2-fontawesome/**',
		'node_modules/font-awesome/**',
		'node_modules/web-animations-js/**'
	],
	contents: [
		'Contents/**'
	],
	views: [
		'Application/views/**'
	],
}

var desPaths = {
	app: 'wwwroot/app/',
	lib: 'wwwroot/lib/',
	contents: 'wwwroot/contents/',
	views: 'wwwroot/views/',
}

// Delete wwwroot/app contents
gulp.task('clean:app', function () {
	return gulp.src(desPaths.app + "*", { read: false })
	.pipe(gp_clean({ force: true }));
});

// Compile, minify and create sourcemaps all TypeScript files 
// and place them to wwwroot/app, together with their js.map files.
gulp.task('build:app', ['clean:app'], function () {
	return gulp.src(srcPaths.app)
				.pipe(gp_sourcemaps.init())
				.pipe(gp_typescript(require('./tsconfig.json').compilerOptions))
				.pipe(gp_sourcemaps.write('.', {
					includeContent: false,
					sourceRoot: '../../Application'
				}))
				.pipe(gulp.dest(desPaths.app));
});

// Delete wwwroot/lib contents
gulp.task('clean:lib', function () {
	return gulp.src(desPaths.lib + "*", { read: false })
		.pipe(gp_clean({ force: true }));
});

// Copy node_modules contents
gulp.task('copy:lib', ['clean:lib'], function () {
	return gulp.src(srcPaths.lib, { base: 'node_modules'})
		//.pipe(gp_uglify({ mangle: false }))
		.pipe(gulp.dest(desPaths.lib));
});

// Delete views contents
gulp.task('clean:views', function () {
	return gulp.src(desPaths.views + "*", { read: false })
		.pipe(gp_clean({ force: true }));
});

// Copy views contens
gulp.task('copy:views', ['clean:views'], function () {
	return gulp.src(srcPaths.views)
		.pipe(gulp.dest(desPaths.views));
});

// Delete Contents contents
gulp.task('clean:contents', function () {
	return gulp.src(desPaths.contents + "*", { read: false })
		.pipe(gp_clean({ force: true }));
});

// Compile Less contents
gulp.task('copy:contents', ['clean:contents'], function () {
	/// Compile Less Files and Move to CSS Folder
	gulp.src(srcPaths.contents + '/less/application/*.less')
		.pipe(gp_sourcemaps.init())
		.pipe(gp_less())
		.pipe(gp_sourcemaps.write('.'))
		.pipe(gulp.dest(desPaths.contents))

	/// Copy CSS Directly
	gulp.src(srcPaths.contents + '/css/**')
		.pipe(gulp.dest(desPaths.contents));

	/// Copy Images Directly
	gulp.src(srcPaths.contents + '/img/**')
		.pipe(gulp.dest(desPaths.contents));

	/// Copy JS Directly
	return gulp.src(srcPaths.contents + '/js/**')
				.pipe(gulp.dest(desPaths.contents));
});

// Default
gulp.task('default', ['copy:lib', 'build:app', 'copy:views', 'copy:contents']);

// Compile All Including Views and Style
gulp.task('compile:all', ['build:app', 'copy:contents', 'copy:views' ]);

// Copy Display Only
gulp.task('copydisplay', ['copy:views', 'copy:contents']);
