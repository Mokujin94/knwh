const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
    {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "knowwhere.all@gmail.com",
            pass: "dlyswyxyropuyzdu",
        },
    },
    {
        from: "knwh <ka@knwh.ru>",
    }
);

const mailer = (message) => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err);
        console.log("Email sent: ", info);
    });
};

module.exports = mailer;
