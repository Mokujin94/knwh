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
        const { name, number, email, rate, mailTo } = req.body;
        let newMailTo = mailTo;
        if (newMailTo === '') {
            newMailTo = "ka@knwh.ru"
        }

        function getCurrentTimeFormatted() {
            // Получаем текущее время
            const now = new Date();

            // Форматируем день, месяц, год, часы и минуты
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
            const year = now.getFullYear();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');

            // Объединяем в строку нужного формата
            const formattedTime = `${day}.${month}.${year} ${hours}:${minutes}`;
            return formattedTime;
        }

        const formattedTime = getCurrentTimeFormatted();
        const message = {
            to: newMailTo,
            subject: "Заявка KW " + formattedTime,
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
