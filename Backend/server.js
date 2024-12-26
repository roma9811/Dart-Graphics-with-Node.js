const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const server = express();
const port = 6005;

server.use(cors({
    origin: "*",
    methods: "POST",
}));
server.use(express.json({ limit: "25mb" }));
server.use(express.urlencoded({ limit: "25mb" }));


const EMAIL_USER = "makhsoianiroma@gmail.com";
const EMAIL_PASS = "kcjummshvrknuyet"; 

const sendEmail = (email, firstname, lastname, number) => {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'makhsoianiroma@gmail.com', 
                pass: 'kcjummshvrknuyet'
            }
        });

        const mail_configs = {
            from: 'makhsoianiroma@gmail.com', 
            to: email, 
            subject: 'Новый запрос с сайта',
            text: `Imię: ${firstname} ${lastname}\nNumer telefonu: ${number}\nEmail: ${email}`,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.error("Błąd podczas wysyłania emaila:", error); 
                return reject({ message: "Wystąpił błąd podczas wysyłania emaila." });
            }
            console.log("Email został wysłany pomyślnie:", info.response); 
            return resolve({ message: "Wiadomość została wysłana pomyślnie." });
        });
    });
};

server.post("/send-email", (req, res) => {
    const { email, firstName, lastName, number } = req.body;

    if (!email || !firstName || !lastName || !number) {
        return res.status(400).send("Brak wymaganych pól.");
    }

    sendEmail(email, firstName, lastName, number)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});

server.listen(port, () => {
    console.log(`Nodemailer is listening at http://localhost:${port}`);
});
