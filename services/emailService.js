const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// GMAIL OPT SEND EMAIL FUNCTION

// const sendOtpEmail = async (email, otp) => {

//     await transporter.sendMail({
//         from: `"SpeedTap Team" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: "SpeedTap Email Verification",

//         html: `
//             <div style="font-family:Arial;padding:20px">

//                 <h2>Verify your Email</h2>

//                 <p>Your verification code is</p>

//                 <h1 style="letter-spacing:8px">
//                     ${otp}
//                 </h1>

//                 <p>
//                     This OTP will expire in <b>5 minutes</b>.
//                 </p>

//                 <p>
//                     If you didn't request this, ignore this email.
//                 </p>

//             </div>
//         `
//     });

// };







// RESEND EMAIL SERVICE FUNCTION

const sendOtpEmail = async (email, otp) => {
    console.log("RESEND EMAIL SERVICE FUNCTION");
    try {
        const apiKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.EMAIL_FROM;

        if (!apiKey || !fromEmail) {
            throw new Error("Resend environment variables missing");
        }

        const response = await fetch(
            "https://api.resend.com/emails",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    from: fromEmail,
                    to: [email],
                    subject: "SpeedTap Email Verification",
                    html: `
                        <div style="font-family:Arial;padding:20px">
                            <h2>Verify your Email</h2>

                            <p>Your verification code is</p>

                            <h1 style="letter-spacing:8px">
                                ${otp}
                            </h1>

                            <p>
                                This OTP will expire in
                                <b>5 minutes</b>.
                            </p>

                            <p>
                                If you didn't request this,
                                ignore this email.
                            </p>
                        </div>
                    `
                })
            }
        );

        const result = await response.json();

        if (!response.ok) {
            console.error("RESEND ERROR:", result);
            throw new Error(result.message || "Email sending failed");
        }

        console.log("EMAIL SENT SUCCESSFULLY:", result.id);

        return result;

    } catch (error) {
        console.error("EMAIL ERROR:", error.message);
        throw error;
    }
};




module.exports = {
    sendOtpEmail
};