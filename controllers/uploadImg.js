const fs = require('fs');

module.exports =  async function (ctx){
    const file = ctx.request.body.files.file;    // 获取上传文件
    console.log(ctx.request.body.files);
    const reader = fs.createReadStream(file.path);    // 创建可读流
    const ext = file.name.split('.').pop();        // 获取上传文件扩展名
    const upStream = fs.createWriteStream('./src/img/std.jpg');        // 创建可写流
    reader.pipe(upStream);    // 可读流通过管道写入可写流
    console.log('success')
    return ctx.body = '上传成功';
}
