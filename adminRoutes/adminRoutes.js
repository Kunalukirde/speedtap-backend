const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const router = express.Router();
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
const usersController = require('../adminController/usersController');
const subscriptionController = require('../adminController/subscriptionController');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ISSUER = process.env.JWT_ISSUER || "speedtap";



router.post("/auth/login", async (req, res) => {

    try {

        const { email, password } = req.body;
        // console.log(req.body);

        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message: "Email and Password are required."

            });

        }

        const admin = await Admin.findOne({ email });

        if (!admin) {

            return res.status(401).json({

                success: false,

                message: "Invalid credentials."

            });

        }

        if (!admin.isActive) {

            return res.status(403).json({

                success: false,

                message: "Admin account disabled."

            });

        }

        const match = await bcrypt.compare(
            password,
            admin.passwordHash
        );

        if (!match) {

            return res.status(401).json({

                success: false,

                message: "Invalid credentials."

            });

        }

        const token = jwt.sign({

            adminId: admin._id,

            email: admin.email,

            role: admin.role

        },

        JWT_SECRET,

        {

            expiresIn: "7d",

            issuer: JWT_ISSUER

        });

        return res.json({

            success: true,

            token,

            admin: {

                id: admin._id,

                name: admin.name,

                email: admin.email,

                role: admin.role

            }

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

});


router.use('/users', usersController);
router.use('/subscription', subscriptionController);










module.exports = router;