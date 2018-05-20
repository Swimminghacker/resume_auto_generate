const fs = require('fs');
const path = require('path');

module.exports = function(ctx,next) {
    // 实现文件下载 
    var fileName = ctx.query.fileName;
    console.log(fileName);
    var filePath = path.join('./',fileName);
    // var filePath = path.join(__dirname, fileName);
    console.log(filePath);
    var stats = fs.statSync(filePath); 
    if(stats.isFile()){
      ctx.set({
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename='+fileName,
        'Content-Length': stats.size
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      ctx.end(404);
    }
  }