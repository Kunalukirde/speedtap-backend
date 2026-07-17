require("dotenv").config();

const bcrypt = require("bcrypt");

const { connectDB } = require("./config/dbconfig"); // <-- change path if needed

const Admin = require("./models/Admin");

(async () => {

    try {

        await connectDB();

        const exists = await Admin.findOne({
            email: "admin@speedtap.online"
        });

        if (exists) {

            console.log("Admin already exists.");

            process.exit();

        }

        const hash = await bcrypt.hash("admin123", 10);

        await Admin.create({

            name: "Super Admin",

            email: "admin@speedtap.online",

            passwordHash: hash,

            role: "SUPER_ADMIN"

        });

        console.log("✅ Admin Created Successfully");

        process.exit();

    } catch (err) {

        console.log(err);

        process.exit(1);

    }

})();