const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendOtpEmail = async (email, otp) => {

    await transporter.sendMail({
        from: `"SpeedTap Team" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "SpeedTap Email Verification",

        html: `
            <div style="font-family:Arial;padding:20px">

                <h2>Verify your Email</h2>

                <p>Your verification code is</p>

                <h1 style="letter-spacing:8px">
                    ${otp}
                </h1>

                <p>
                    This OTP will expire in <b>5 minutes</b>.
                </p>

                <p>
                    If you didn't request this, ignore this email.
                </p>

            </div>
        `
    });

};

module.exports = {
    sendOtpEmail
};