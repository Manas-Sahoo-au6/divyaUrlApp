const express = require('express');
require('./db')
const session = require('express-session');
const userNormalRoute = require('./route/normalRoute/userNormalRoutes');
const apiNormalRoute = require('./route/apiRoute/userApiRoutes');
const urlRoutes = require('./route/apiRoute/urlRoutes')

const hbs = require('hbs');
const path = require('path')
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(express.urlencoded({extended:false}))

app.use(session({
    secret:"JustSecret",
    name:"AppSession",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*5,
        httpOnly:true,
        secure:false,
        sameSite:"strict"
    }
}))


app.use(userNormalRoute);
app.use(apiNormalRoute);
app.use(urlRoutes);

var port = process.env.port || 8080
app.listen(port, ()=>console.log('Server is up at port 8080'))