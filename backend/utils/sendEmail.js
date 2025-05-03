const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, htmlContent) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // your Gmail
                pass: process.env.EMAIL_PASS  // app password from Gmail
            }
        });

        const mailOptions = {
            from: `"BMX Support" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html: htmlContent
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    } catch (err) {
        console.error('Failed to send email:', err.message);
    }
};

module.exports = sendEmail;
