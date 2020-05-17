const nodemailer = require('nodemailer');

//nodemailer configuration
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      user: process.env.EMAIL_SENDER,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken:process.env.ACCESS_TOKEN
  }
});

exports.sendContact = async (req,res) =>{
  //exit if message received is empty
  if(Object.keys(req.body).length === 0){
    return  res.status(400).json({msg:'empty request'});
  }

  //getting message info
  const {
    subject,
    name,
    email,
    message
  } = req.body;




  try{
    //using nodemailer to send email
    await transporter.sendMail({
      from:process.env.EMAIL_SENDER,
      to: process.env.SEND_TO,
      subject: `Message from Yuchak Immigration: ${subject}`,
      html: `<h1>From ${name}, Email: ${email} </h1>
      <p>${message}</p>`
  });

    res.status(200).json({msg:'Email sent!'});
  } catch (err){

   res.status(500).json({msg:'Server error'});
  }
}
