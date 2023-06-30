const nodemailer = require('nodemailer')

const cred = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'dummy_mail@gmail.com',
        pass: 'dummy_password'
    }
});

const mailInfo = {
    from: 'dummy_mail@gmail.com',
    to: 'dummy_receiver@gmail.com',
    subject: 'Testing mail',
    text: 'Email Body'
};

cred.sendMail(
    mailInfo, (err, info)=>{
        if(err){
            console.log("Something went wrong : " + err)
        }else{
            console.log("Email sent : " + info.response)
        }
    }
)