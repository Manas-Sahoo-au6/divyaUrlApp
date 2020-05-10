const User = require('../../model/User');
const bcrypt = require('bcryptjs');
controller={};


controller.postRegister = function(req, res){
    bcrypt.hash(req.body.password, 10).then(function(hashedPassword){
        const createObj = {
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword
        }
        const result = new User({...createObj})
        result.save().then(function(docs){
            req.session.user=docs
            console.log(docs)
            res.redirect('/urlShortner')
        })
        .catch(function(err){
            console.log(err.message)
            res.status(500).send('Server error')
    })
    
})
.catch(function(err){
    console.log(err.message)
    res.status(500).send('Server error')

})
}

controller.postLogin= function(req, res){
    User.findOne({email:req.body.email}).then(function(docs){
        if(!docs){
            res.send('Invalid credentials')
        }
        else{
            bcrypt.compare(req.body.password, docs.password).then(function(isMatched){
                if(isMatched){
                    req.session.user= docs
                    console.log(req.session)
                    res.redirect('/urlShortner')
                }
                else{
                    res.send('Invalid credentials')
                }

            }).catch(function(err){
                console.log(err.message)
                res.status(500).send('Server error')
            })
        }
    })
    .catch(function(err){
        console.log(err.message)
        res.status(500).send('Server error')
    })
}

module.exports = controller;