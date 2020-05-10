const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://urlShortner:Checkuser@123@cluster0-lgq7f.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(function(){
    console.log('Database is connected successfully')
})
.catch(function(err){
    console.log(err)
})