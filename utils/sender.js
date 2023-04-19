import nodemailer from "nodemailer";
import jwt from "./jwt.js";
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'qobiljonovmuxammadamin@gmail.com',
        pass: 'awumavsynoxdbzyg'
    }
});
export const sendConfirmationEmail = async (userEmail, confirmationCode) => {
    const mailOptions = {
        from: 'qobiljonovmuxamadamin@gmail.com',
        to: userEmail,
        subject: 'Please confirm your account',
        html: `<p> http://localhost:5000/pass/code/${confirmationCode}</p>`
    };
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + result.response);
        console.log(jwt.VERIFY(confirmationCode).payload);
    } catch (error) {
        console.log(error);
    }
};