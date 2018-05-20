const connect = require('gulp-connect');
const puppeteer = require('puppeteer');
const fs = require('fs');


let port =  9001;
var deploy = function(){
    connect.server({
        root: './dist',
        livereload: true,
        port
      });
    console.log(`resume can be watched on :http://localhost:${port}`)
}
var generatePDF = async function() {
  const url = 'http://localhost:9001';
  const browser = await puppeteer.launch({ headless: true ,args: ['--no-sandbox', '--disable-setuid-sandbox']})
  const page = await browser.newPage()
  await page.setViewport({
    width: 1440,
    height: 900
  });
  await page.goto(url)
  await page.pdf({
    path: './swm.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  })
  console.log('PDF生成在主目录中了')
  browser.close()
  deleteall('./dist');
  console.log('./dist文件已删除！')
  
  connect.serverClose();
  console.log('内置网页已关闭！')
  //process.exit(0)
}

function deleteall(path) {  
  var files = [];  
  if(fs.existsSync(path)) {  
      files = fs.readdirSync(path);  
      files.forEach(function(file, index) {  
          var curPath = path + "/" + file;  
          if(fs.statSync(curPath).isDirectory()) { // recurse  
              deleteall(curPath);  
          } else { // delete file  
              fs.unlinkSync(curPath);
          }  
      });  
      fs.rmdirSync(path);  
  }  
};  

var gp = function(){
    console.log('deploying ....');
    deploy();
    console.log('pdf generating ...')
    generatePDF();
}
module.exports = gp;