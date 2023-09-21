import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
    //1.read the token
    const token = req.headers['authorization'];
    console.log(token);
    //2.if no token return the error
    if (!token) {
        return res.status(401).send("Unauthorized and token is not received");
    }

    //3.check if token is valid
    try {
        const payload = jwt.verify(token, 'UgV6wPwkwAeQQi7iEjaBbplYh54hAwaX');
        req.userID = payload.userID;
        console.log(payload);
    } catch (err) {
        return res.status(401).send("Unauthorized");
    }
    next();
}

export default jwtAuth;