var generateInfoJson = require('./generateInfoJson');
var gr = function(template_id,user_id,name,gender,birthday,city,position,tel,email,skill,hobby,edu,exp){
        generateInfoJson(template_id,user_id,name,gender,birthday,city,position,tel,email,skill,hobby,edu,exp);
        sass2css_resume();
        sass2css_iconfont();
        json2jade();
        do_copy();
        //deploy();
        // generatePdf('http://localhost:9001');
        console.log('index.html has generated in dir dist!');
}

//过程：先将各种函数写出来，再进行组合；
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const jade = require('gulp-jade')
const copy = require('gulp-copy')
const rimrafPromise = require('rimraf-promise')
const ghPages = require('gulp-gh-pages')
const fs = require('fs')
const connect = require('gulp-connect')



var sass2css_resume = function(){
    gulp
    .src('src/scss/resume.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload());
    console.log('resume.css has been generated!');

}

var sass2css_iconfont = function(){
    gulp
    .src('src/scss/iconfont.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('dist/iconfont/'))
    .pipe(connect.reload());
    console.log('iconfont.css has been generated!');
}

var json2jade = function(){
    
  const info = JSON.parse(fs.readFileSync('info.json', 'utf-8'))
  const locals = highlight(info)
  gulp
    .src('./src/jade/index.jade')
    .pipe(
      jade({
        locals
      })
    )
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
    console.log('json has been changed to jade!');
    // fs.unlink('info.json',function(err) {
    //   if (err) throw err;
    //   console.log('info.json删除成功');
    // });
    console.log('info.json has been deleted!')
}

function highlight(locals) {
    var locals = JSON.stringify(locals)
    const re = /`(.+?)`/g
    locals = locals.replace(re, '<strong>$1</strong>')
    return JSON.parse(locals)
}
function src2dist(dir) {
    return gulp.src(`./src/${dir}/*.*`).pipe(gulp.dest(`./dist/${dir}/`))
}
var do_copy = function(){
    src2dist('iconfont');
    src2dist('img');
    console.log('iconfont and img have been copied to dist!');
}
module.exports = gr;