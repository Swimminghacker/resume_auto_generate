/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')


//用户生成简历
router.get('/resume', controllers.resume)
//下载简历
router.get('/pdf', controllers.download)

//上传图片
router.post('/uploadImg',controllers.uploadImg)


module.exports = router
