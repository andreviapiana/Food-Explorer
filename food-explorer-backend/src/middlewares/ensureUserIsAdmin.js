// AppError and Knex Import
const knex = require('../database/knex');
const AppError = require('../utils/AppError');

async function ensureUserIsAdmin(request, response, next) {
    // Capturing ID Parameters
    const user_id = request.user.id;

    // Getting the user data through the informed ID
    const user = await knex("users").where({id: user_id}).first();

    // Verification if user is Admin
    if (!user.isAdmin) {
        throw new AppError("Access Denied: Unauthorized User", 401)
    }

    next();
}

module.exports = ensureUserIsAdmin;