import jwt from "jsonwebtoken";

const validateToken = async (req, res, next) => {
    try {
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                   return res.status(401).send("User is not authorized");
                }
                req.user = decoded.user;
                next();
            });
            if (!token) {
                return res.status(401).send("User is not authorized or token is missing ")
            }
        }
    } catch (error) {
        res.status(420).send(error);
    }
}

export default validateToken