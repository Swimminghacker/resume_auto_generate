const fs = require('fs');
const path = require('path');
const send = require('koa-send');

module.exports = async function (ctx) {
  var fileName = ctx.query.fileName;
  ctx.attachment(fileName);
  await send(ctx, fileName);
  fs.unlink(fileName,function(err) {
    if (err) throw err;
    console.log(fileName + '删除成功')
  });
}
