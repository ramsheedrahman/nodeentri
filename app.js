var express=require('express')
var app=express()
var path=require('path')
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log(req.query)
})
app.post('/signup',urlencodedParser,(req,res)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ramsheedkk06@gmail.com',
          pass: 'ahyetfzwdgpgxcmc'
        }
      });
      
      var mailDetails = {
        from: 'ramsheed@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'Congratulations,your registration compleated successfully',
        html:'<h1>Congratulations ,'+req.body.name+'</h1> <br><h2>your registration compleated successfully</h2>'
      };
      
      transporter.sendMail(mailDetails, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    console.log(req.body)
})
app.listen(3001,()=>{
    console.log('srver connected')
})