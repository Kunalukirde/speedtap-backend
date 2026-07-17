const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

const JWT_SECRET =
process.env.JWT_SECRET;

const JWT_ISSUER =
process.env.JWT_ISSUER || "speedtap";

module.exports =
async (req, res, next) => {

    try {

        const auth =
        req.headers.authorization;

        if (
            !auth ||
            !auth.startsWith("Bearer ")
        ) {

            return res.status(401).json({

                success: false,

                message: "Unauthorized"

            });

        }

        const token =
        auth.split(" ")[1];

        const decoded =
        jwt.verify(

            token,

            JWT_SECRET,

            {

                issuer: JWT_ISSUER

            }

        );

        const admin =
        await Admin.findById(
            decoded.adminId
        );

        if (
            !admin ||
            !admin.isActive
        ) {

            return res.status(401).json({

                success: false,

                message: "Unauthorized"

            });

        }

        req.admin = {

            adminId: admin._id,

            name: admin.name,

            email: admin.email,

            role: admin.role

        };

        next();

    }

    catch {

        return res.status(401).json({

            success: false,

            message: "Invalid Token"

        });

    }

};