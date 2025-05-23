import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.cookie("jwt", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true, // prevents XSS attacks cross-site scripting attacks
        sameSite: 'Strict', // prevents CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development", // set to true in production
    });
};

export default generateTokenAndSetCookie;