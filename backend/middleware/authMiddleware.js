const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    jwt.verify(token, 'sumit', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = authMiddleware;
