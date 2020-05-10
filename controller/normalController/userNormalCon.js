
controller={};

controller.landing = function(req, res){
    res.render('dashboard', {
        title:'register',
        layout:'index'

    })
}

controller.register= function(req, res){
    res.render('register', {
        title:'register',
        layout:'index'

    })

}
controller.login = function(req, res){
    res.render('login', {
        title:"Login page",
        layout:"index"
    })
}

module.exports= controller;