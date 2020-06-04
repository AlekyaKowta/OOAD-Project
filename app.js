const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const BodyParser = require("body-parser");
const Bcrypt = require("bcryptjs");
dotenv.config();
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extend: true }));
app.use(express.static('assets'));
const user = require('./models/user')


mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true
}, () => {
    console.log("db connection established");
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});



const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.render('index.ejs');
});





app.post("/login", async (request, response) => {
    try {
        var usr = await user.findOne({ email: request.body.email }).exec();
        if(!usr) {
            console.log("user not found/registered");
            //return response.status(400).send({ message: "The username does not exist" });
            response.render('signup.ejs');
        }
        if(!Bcrypt.compareSync(request.body.password, usr.password)) {
           //return response.status(400).send({ message: "The password is invalid" });
           console.log("invalid password");
           response.redirect('/');
        }
       // response.send({ message: "The username and password combination is correct!" });
        else
            {console.log('yay');
            response.render('mainpage.ejs');}
    } catch (error) {
        response.status(500).send(error);
    }
});





app.route('/signup')
    .get((req, res) => {
        res.render('signup.ejs');
    })
    .post(async (req, res) => {
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        const User = new user({
            email: req.body.email,
            password: req.body.password
        });
        console.log(req.body)
        try {
            await User.save();
            res.redirect('/mainpage'); // redirect to notes mainpg
        } catch (err) {
            console.log(err);
            res.redirect('/signup') // or signup
        }
    });







app.get('/mainpage', (req,res)=>{
    res.render('mainpage.ejs');
});

app.get('/payment', (req,res)=>{
    res.render('payment.ejs');
});

app.get('/select',(req,res)=>{
    res.render('select.ejs');

});







