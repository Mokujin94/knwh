const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport(
//     {
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//             user: "knowwhere.all@gmail.com",
//             pass: "dlyswyxyropuyzdu",
//         },

//     },
//     {
//         from: "knwh <ka@knwh.ru>",
//     }
// );

const transporter = nodemailer.createTransport(
    {
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
            user: "hello@knwh.ru",
            pass: "emcrgfoqeuejjxbi",
        },

    },
    {
        from: "knwh <hello@knwh.ru>",
    }
);


const mailer = (message) => {
    return transporter.sendMail(message);
};

module.exports = mailer;
