var grh = require('../pdf_generate/generateResumeHtml');
var gp = require('../pdf_generate/generatePdf');

module.exports = (ctx,next)=>{
  const req = ctx.query;
  var user_id = ctx.query.user_id;
  // var user_id = req.user_id;
  var date = req.date;
  var name = req.name;
  var sex = req.sex;
  var city = req.city;
  var position = req.position;
  var tel = req.tel;
  var email = req.email;
  var skills = JSON.parse(req.skills)
  var experience = JSON.parse(req.experience)
  var language = JSON.parse(req.language);
  var education = JSON.parse(req.education)
  console.log(experience)
  
  grh(user_id,date,name,sex,city,position,tel,email,skills,experience,language,education);
  gp(user_id);
  ctx.response.body = {
    'ImgPath':user_id + '.png',
    'PdfPath':user_id + '.pdf'
  }
};