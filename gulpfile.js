'use strict';
const gulp = require('gulp');
const webpack = require('webpack');
const del = require('del');
let $gulpload = require('gulp-load-plugins')({ lazy: true });

const ROOT_SERVER_SRC_DIR = 'src/server/';
const ROOT_CLIENT_SRC_DIR = 'src/client/';
const ROOT_SERVER_TARGET_DIR = 'dist/server/';
const ROOT_CLIENT_TARGET_DIR = 'dist/client/';

var outDir = 'dist/';

gulp.task('clean', (done) => {
    var dist = './dist';
    return clean(dist, done);
});

gulp.task('serverJs', () => {
    return gulp.src(ROOT_SERVER_SRC_DIR + '**/*.js')
        .pipe($gulpload.babel({ 'presets': ['es2015'] }))
        .pipe($gulpload.uglify())
        .pipe($gulpload.sourcemaps.write())
        .pipe(gulp.dest(ROOT_SERVER_TARGET_DIR));
});

gulp.task('clientJs', () => {
    return gulp.src(ROOT_CLIENT_SRC_DIR + '**/*.js')
        .pipe($gulpload.babel({ 'presets': ['es2015'] }))
        .pipe($gulpload.uglify())
        .pipe($gulpload.sourcemaps.write())
        .pipe(gulp.dest(ROOT_CLIENT_TARGET_DIR));
});

gulp.task('styles', () => {
    return gulp.src(ROOT_CLIENT_SRC_DIR + 'styles/**/*.scss')
        .pipe($gulpload.sass({
            includePaths : ['./node_modules/bootstrap-sass/assets/stylesheets/']    
        }))
        .pipe($gulpload.sourcemaps.write())
        .pipe(gulp.dest(ROOT_CLIENT_TARGET_DIR + 'styles/'));
});

gulp.task('views', () => {
    return gulp.src(ROOT_CLIENT_SRC_DIR + '**/*.html')
        .pipe(gulp.dest(ROOT_CLIENT_TARGET_DIR));
});


gulp.task('webpack', () => {
    return gulp.src(ROOT_CLIENT_SRC_DIR + 'app/app.module.js')
        //.pipe($gulpload.babel({ 'presets': ['es2015'] }))
        //.pipe(gulp.dest(ROOT_CLIENT_TARGET_DIR + 'app/'))
        .pipe($gulpload.webpack(require('./webpack.config.js')))
        //.pipe($gulpload.webpack())
        .pipe(gulp.dest(ROOT_CLIENT_TARGET_DIR + 'app/'));
});

gulp.task('inject', ['serverJs', 'views', 'styles', 'webpack'], () => {
    let target = gulp.src(ROOT_CLIENT_SRC_DIR + 'index.html')
    let jsFiles = gulp.src([ROOT_CLIENT_TARGET_DIR + 'app/vendor.js', ROOT_CLIENT_TARGET_DIR + 'app/bundle.js'], { read: false });
    let cssFiles = gulp.src([ROOT_CLIENT_TARGET_DIR + 'styles/**.css'], { read: false });
    return target.pipe($gulpload.inject(jsFiles, { relative: false, ignorePath : '/dist/client/' } ))
        .pipe($gulpload.inject(cssFiles, { relative: false, ignorePath : '/dist/client/' } ))
        .pipe(gulp.dest(ROOT_CLIENT_TARGET_DIR));
});

function clean(path, done) {
    del(path, done);
}

gulp.task('watch', () => {
    return gulp.watch('./src/**/*.*', ['inject'])
});

gulp.task('default', ['inject']);

