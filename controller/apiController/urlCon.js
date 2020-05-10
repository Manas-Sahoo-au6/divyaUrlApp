const ShortUrl = require('../../model/Shortner')
controller = {}


controller.check = async(req, res)=>{
    const result = await ShortUrl.find()
    res.render('url', {
        shortUrl:result,
        title:'register',
        layout:'index'
    })
}

controller.shortner = async(req, res)=>{
    await ShortUrl.create({full:req.body.fullUrl})
    res.redirect('/urlShortner')
}

controller.getShortWork = async(req, res)=>{
    console.log(req.params.short)
    const getShortUrl = await ShortUrl.findOne({short:req.params.short})
    console.log(getShortUrl)
    if(getShortUrl == null) return res.sendStatus(404)

    getShortUrl.clicks++
    getShortUrl.save()

    return res.redirect(getShortUrl.full)
}
    
    



module.exports = controller