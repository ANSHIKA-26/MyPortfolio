const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

//dotenv configuration
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname,'./client/build')))




//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoute'));


app.get('*',(function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


//listen
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);   
})

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// Replace with your email details
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider
  auth: {
    user: 'arora.anshika.26@gmail.com', // Your email
    pass: 'Gmail_Anshi26' // Your email password
  }
});

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: 'arora.anshika.26@gmail.com', // Your email
    subject: `Message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error'); // Or render an error page
    } else {
      console.log('Email sent: ' + info.response);
      res.send('sent'); // Or render a success page
    }
  });
});
