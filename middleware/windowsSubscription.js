const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Subscription = require("../models/Subscription");

const verifyWindowsSubscription = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token missing"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.userId;

        //-------------------------------------------------
        // Find user
        //-------------------------------------------------

        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        //-------------------------------------------------
        // FREE users cannot use Windows App
        //-------------------------------------------------

        if (!user.subscription.isActive) {

            return res.status(403).json({
                success: false,
                message: "You are not a subscribed member."
            });

        }

        //-------------------------------------------------
        // Subscription expired
        //-------------------------------------------------

        if (
            user.subscription.expiryDate &&
            new Date(user.subscription.expiryDate) < new Date()
        ) {

            user.subscription.plan = "FREE";
            user.subscription.isActive = false;

            await user.save();

            return res.status(403).json({
                success: false,
                message: "Your subscription has expired."
            });

        }

        //-------------------------------------------------
        // Check latest subscription record
        //-------------------------------------------------

        const subscription = await Subscription.findOne({
            userId: decoded.userId,
            paymentStatus: "APPROVED",
            status: "ACTIVE"
        }).sort({ createdAt: -1 });

        if (!subscription) {

            return res.status(403).json({
                success: false,
                message: "Subscription not found."
            });

        }

        req.user = user;
        req.subscription = subscription;

        next();

    }
    catch (err) {

        return res.status(401).json({
            success: false,
            message: err.message
        });

    }

}

module.exports = verifyWindowsSubscription;