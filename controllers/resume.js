var grh = require('../pdf_generate/generateResumeHtml');
var gp = require('../pdf_generate/generatePdf');

module.exports = async(ctx,next)=>{
  var template_id = ctx.query.template_id;
  var user_id = ctx.query.user_id;
  var name = ctx.query.name;
  var gender = ctx.query.gender;
  var birthday = ctx.query.birthday;
  var city = ctx.query.city;
  var position = ctx.query.position;
  var tel = ctx.query.tel;
  var email = ctx.query.email;
  var skill = ctx.query.skill;
  var hobby = ctx.query.hobby;
  var edu = ctx.query.edu;
  var exp = ctx.query.exp;
  console.log(name)
  grh(template_id,user_id,name,gender,birthday,city,position,tel,email,skill,hobby,edu,exp);
  gp();
};