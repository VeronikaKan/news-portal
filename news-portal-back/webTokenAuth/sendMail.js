const nodemailer = require("nodemailer");

async function main(req, res) {
    try {
        const{ email, password} = req.body
  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // user: process.env.user,
        // pass: process.env.pass,
        user:'ggnewskg@gmail.com',
        pass:'kjxg vvlw foju cwug',
      },
    tls:{
        rejectUnauthorized:false
    }
  });
  const info = await transporter.sendMail({
    from: '"News-portal KG" <ggnewskg@gmail.com>', // sender address
    to: `${email}`, // list of receivers 
    subject: "Восстановление пароля на новостном портале News-portal", // Subject line
    text:
    `if forget password`, // plain text body
    html:
     `<h1><b>GG NEWS<b><h1/>
     <h5>Здравствуйте,
    для восстановления доступа на News-portal, введите этот код-пароль для входа:<h5/>
    <h5> ${password} <h5/>
<h6> Если вы считаете, что данное сообщение отправлено вам ошибочно,
    просто проигнорируйте его. <h6/>
    <h6>Мы отправили это письмо, потому что вы или кто-то другой указал этот адрес на Новостном портале News-portal<h6/>`, // html body
  });
  res.status(200).json({message:`message successfully sended to: ${email}`})
}
  catch(e) {console.log(e); }
}

module.exports = {
    main
}