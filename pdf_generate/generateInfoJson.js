const fs = require('fs');
const path = require('path');
const gulp = require('gulp');

module.exports = function(template_id,user_id,name,gender,birthday,city,position,tel,email,skill,hobby,edu,exp){
    //gulp.src('./src/info.json').pipe(gulp.dest('./dist/'))
    const info = JSON.parse(fs.readFileSync('./src/info.json', 'utf-8'));
    info.header.title.name = name;
    info.header.title.job = position;
    info.header.contacts.phone = tel;
    info.header.contacts.mail = email;
    var t = JSON.stringify(info);
    fs.writeFileSync('info.json',t)
    console.log('info.json has been generated !')
} 