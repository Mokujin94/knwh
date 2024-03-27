require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const http = require("http");
const mailer = require("./nodemailer");


const PORT = process.env.PORT || 5000;

const app = express();





// app.use(cors(corsOptions));
app.use(cors('*'));
app.use(express.json());

app.post('/send', (req, res) => {
    try {
        const { name, number, email, rate } = req.body;
        // console.log(code);
        const message = {
            to: "mokujinn94@gmail.com",
            subject: "Заявка KW",
            html: `Имя - ${name} <br/> Телефон - ${number} <br/> Почта - ${email} <br/> Интересующий тариф - ${rate}`,
        };
        mailer(message);
        return res.status(200).json({ message: "Заявка отправлена!" });
    } catch (error) {
        res.status(404).json({ message: error })
        console.log(error)
    }
})




const httpServer = http.createServer(app);


const start = async () => {
    try {
        httpServer.listen(PORT, () =>
            console.log(`сервер стартанул на порте ${PORT}`)
        );
    } catch (e) {
        console.log(e);
    }
};

start();
