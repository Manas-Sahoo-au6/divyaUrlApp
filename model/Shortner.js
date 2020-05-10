const mongoose = require('mongoose');
const shortId = require('shortid');
const schema = mongoose.Schema
const UrlShortnerSchema = new schema({
    full:{
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        default:shortId.generate
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    }
})

const UrlShortner = mongoose.model('urlShortner', UrlShortnerSchema)

module.exports = UrlShortner