const fs = require('fs');
const path = require('path');
const gulp = require('gulp');

module.exports = function(user_id,date,name,sex,city,position,tel,email,skills,experience,language,education){
    //gulp.src('./src/info.json').pipe(gulp.dest('./dist/'))
    const info = JSON.parse(fs.readFileSync('./src/info.json', 'utf-8'));

    info.header.title.name = name;
    info.header.contacts.date = date;
    info.header.contacts.sex = sex;
    info.header.contacts.city = city;
    info.header.title.job = position;
    info.header.contacts.phone = tel;
    info.header.contacts.mail = email;
    info.skills = skills;
    info.experience = experience;
    info.skills = skills;
    info.language = language;
    info.education = education;

    var t = JSON.stringify(info);
    fs.writeFileSync('info.json',t)
    console.log('info.json has been generated !')
} 