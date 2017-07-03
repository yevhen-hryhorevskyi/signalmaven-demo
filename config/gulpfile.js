var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gulpSequence = require('gulp-sequence'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-ruby-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    notify = require("gulp-notify"),
    inject = require('gulp-inject'),
    webpack = require('gulp-webpack');

var buildUtils = require('./buildUtils');

var ROOT_DIR = './../src',
    ROOT_SASS_DIR = ROOT_DIR + '/__sass',
    ROOT_ASSETS_DIR = ROOT_DIR + '/__assets';

var ROOT_TARGET_DIR = "./../bin",
    ROOT_INDEX_HTML_PATH = "./..",
    ASSETS_TARGET_DIR = ROOT_TARGET_DIR + "/assets";

var isDev = false,
    pathTransformer = buildUtils.rootBuildPathInjectTransformer;

// Delete all files in target
gulp.task('clean', function () {
    return gulp.src(ROOT_TARGET_DIR, {read: false}).pipe(clean({force: true}));
});

gulp.task('set-dev-configs', function () {
    isDev = true;
    pathTransformer = buildUtils.rootDevPathInjectTransformer;
    ROOT_TARGET_DIR = './../target';
    ROOT_INDEX_HTML_PATH = ROOT_TARGET_DIR;
    ASSETS_TARGET_DIR = ROOT_TARGET_DIR + "/assets";
});

gulp.task('deploy-assets', function () {
    gulp.src(ROOT_ASSETS_DIR + "/**.*", {base: ROOT_ASSETS_DIR})
        .pipe(gulp.dest(ASSETS_TARGET_DIR));
});

// Styles
gulp.task('build-styles', function () {
    return sass(ROOT_SASS_DIR + '/all-styles.scss', {style: 'expanded', sourcemap: isDev})
        .pipe(gulpif(isDev, rename({basename: 'app'})))
        .pipe(gulpif(!isDev, rename({basename: 'app-' + buildUtils.hashCode(new Date())})))
        .pipe(gulpif(isDev, sourcemaps.write('./maps')))
        .pipe(gulpif(!isDev, cssnano({zindex: false})))
        .pipe(gulp.dest(ROOT_TARGET_DIR))
        .pipe(notify({message: 'Styles task complete'}));
});

gulp.task('build-js', function () {
    return gulp.src(ROOT_DIR + '/main.js')
        .pipe(webpack(require('./webpack.prod.config.js')))
        .pipe(gulp.dest(ROOT_TARGET_DIR))
        .pipe(notify({message: 'JS are built'}));
});

var injectResources = function () {
    return gulp.src(ROOT_DIR + '/*html.tmpl')
        .pipe(inject(gulp.src(ROOT_TARGET_DIR + '/app*.css', {read: false}), {
            name: 'app',
            transform: pathTransformer
        }))
        .pipe(inject(gulp.src(ROOT_TARGET_DIR + '/app*.js', {read: false}), {
            name: 'app',
            transform: pathTransformer
        }))
        .pipe(rename({basename: 'index', extname: '.html'}))
        .pipe(gulp.dest(ROOT_INDEX_HTML_PATH));
}

gulp.task('inject-resources', injectResources);

// Watchers...
gulp.task('watch-handler', function () {
    gulp.watch(ROOT_DIR + '/*.html.tmpl', ['inject-resources']);
    gulp.watch(ROOT_DIR + '/**/*.scss', ['build-styles']);

    return gulp.src(ROOT_DIR + '/main.js')
        .pipe(webpack(require('./webpack.dev.config.js')))
        .pipe(gulp.dest(ROOT_TARGET_DIR))
        .pipe(notify(injectResources))
        .pipe(notify({message: 'JS are built'}));
});

gulp.task('build', gulpSequence('clean', 'deploy-assets', 'build-styles', 'build-js', 'inject-resources'));
gulp.task('watch', gulpSequence('set-dev-configs', 'clean', 'deploy-assets', 'build-styles', 'watch-handler'));
