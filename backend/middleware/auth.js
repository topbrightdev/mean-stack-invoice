const jwt = require('jsonwebtoken');
const config = require('config');

// @lets write our middleware function
// @Next is nothing but a callback when we are done

module.exports = (req, res, next) => {

    //Get token from header
    const token = req.header('x-auth-token');

    // Check if not token ,401 - not authorized
    if (!token) {
        return res.status(401).json({ msg: 'No Token ,Authorization Denied' });
    }

    // @verify Token
    try {
        const secret = config.get('jwtSecret');
        const decoded = jwt.verify(token, secret);

    // @matching
        req.user = decoded.user;
        next();

    //console.log('Verified Successfully');

    } catch (err) {
        res.status(401).json({ msg: 'Token is not Valid' })
    }



}