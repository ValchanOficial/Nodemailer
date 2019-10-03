const nodemailer = require('nodemailer');

function sendEmail() {
    return new Promise((resolve, reject) => {
        try {

            // realiza conexão
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                secure: true, // true para 465, false para outras portas
                port: 465,
                auth: { // você deve criar uma conta gmail para autenticar
                    user: 'calopsita.mail@gmail.com', // login
                    pass: 'umacalopsitaesteveaqui' // senha
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // envia e-mail
            const info = transporter.sendMail({
                from: '"Calopsita 🐤" <calopsita.mail@gmail.com>', // remetente
                to: ['destinatario@dest.com.br', 'destinatario@dest.com.br'], // destinatários
                subject: 'Calopsita?!', // Assunto
                text: 'Uma calopsita esteve aqui', // Plain text body
                html: '<b>Uma calopsita esteve aqui</b>' // HTML body
            });
            resolve(info); // se tudo ok então
        } catch (error) {
            reject(error); // se der algum erro
        }
    });
}
// executando
sendEmail().then((info) => {
    console.log('Mensagem enviada!');
    console.log(info.envelope);
}).catch(error => {
    console.log('Erro: ' + error.message);
});