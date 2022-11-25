// AppError, authConfig and JWT Import
const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    // Verification if Token exists
    if(!authHeader) {
        throw new AppError("JWT Token não informado", 401);
    }

    // If exists, put token on array position 1
    const [, token] = authHeader.split(" ");

    // Verification if Token is valid
    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);

        request.user = {
            id: Number(user_id),
        };

        return next();
    } catch {
        throw new AppError("JWT Token inválido", 401);
    }
}

module.exports = ensureAuthenticated;