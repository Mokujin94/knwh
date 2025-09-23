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

app.post('/send', async (req, res) => {
    try {
        const { name, number, email, rate, mailTo, activeRate } = req.body;
        let newMailTo = mailTo;
        if (newMailTo === '') {
            newMailTo = "ka@knwh.ru"
        }

        let newRate = rate
        if (!newRate.length) {
            newRate = activeRate
        }

        function getCurrentTimeFormatted() {
            // Получаем текущее время
            const now = new Date();

            // Корректируем время на +3 часа
            now.setHours(now.getHours() + 3);

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
            html: `Имя - ${name} <br/> Телефон - ${number} <br/> Почта - ${email} <br/> Интересующий тариф - ${newRate}`,
        };

        await mailer(message)
            .then((result) => { res.status(200).json({ mess: "Заявка отправлена!", res: result }) })
            .catch((err) => { res.status(400).json({ mess: "Ошибка отправки заявки!", error: err }) })

    } catch (error) {
        res.status(400).json({ mess: error })
        console.error(error)
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
