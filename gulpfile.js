var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    rename          = require('gulp-rename'),
    cssnano         = require('gulp-cssnano'),
    del             = require('del'),
    autoprefixer    = require('gulp-autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
        .pipe(sourcemaps.write('../css', {addComment: true}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/bootstrap/dist/js/bootstrap.js',
        'app/libs/owl.carousel/dist/owl.carousel.js',
        'app/libs/plyr/dist/plyr.js',
        'app/libs/photobox/photobox/jquery.photobox.js',
        'app/libs/jquery.form-styler/dist/jquery.formstyler.js',
        'app/libs/bootstrap-select/dist/js/bootstrap-select.js',
        'app/libs/moment/min/moment.min.js',
        'app/libs/bootstrap-daterangepicker/daterangepicker.js',
        'app/libs/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
        'app/libs/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js',
        'app/libs/gsap/src/uncompressed/TweenMax.js',
        'app/libs/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
        'app/libs/scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js',
        'app/libs/jquery-textext/src/js/textext.core.js',
        'app/libs/jquery-textext/src/js/textext.plugin.tags.js',
        'app/libs/jquery-textext/src/js/textext.plugin.autocomplete.js',
        'app/libs/ion.rangeSlider/js/ion.rangeSlider.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('glyphicon-bootstrap', function() {
    return gulp.src('app/libs/bootstrap/dist/fonts/**/*')
        .pipe(gulp.dest('app/fonts'));
});

// ----------------------Дефолтный таск gulp --------------------------------

gulp.task('default', ['watch']);