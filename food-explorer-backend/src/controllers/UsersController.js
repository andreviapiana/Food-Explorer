// Hash, App Error and SQLite Connection Import
const { hash, compare } = require('bcryptjs');

const AppError = require('../utils/AppError');

const sqliteConnection = require('../database/sqlite');

class UsersController {
    async create(request, response) {
        // Capturing Body Parameters
        const { name, email, password } = request.body;

        // Connection with Database
        const database = await sqliteConnection();
        const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

        // Verifications
        if(checkUserExists) {
            throw new AppError('Erro: Este e-mail já está em uso!');
        }

        if(name.length < 3) {
            throw new AppError('Erro: Digite um nome válido!');
        }

        if(!email.includes("@", ".") || !email.includes(".")) {
            throw new AppError('Erro: Digite um email válido!');
        }

        if(password.length < 6) {
            throw new AppError('Erro: A senha deve ter pelo menos 6 dígitos!');
        }
        
        // Password Cryptography
        const hashedPassword = await hash(password, 8);

        // Inserting the infos into the database
        await database.run(
            'INSERT INTO users (name, email, password ) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        );

        return response.status(201).json();
    }

    async update(request, response) {
        // Capturing Body Parameters and ID Parameters
        const {name, email, password, old_password } = request.body;
        const user_id = request.user.id

        // Connection with Database
        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

        // Verifications
        if (!user) {
            throw new AppError("Usuário não encontrado");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso.");
        }

        user.name = name;
        user.email = email;

        if (password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha");
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                throw new AppError("A senha antiga não confere.");
            }

            user.password = await hash(password, 8);
        }

        // Inserting the infos into the database
        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME("now")
            WHERE id = ?`,
            [user.name, user.email, user.password, user_id]
        );

        return response.status(201).json();
    }
}

module.exports = UsersController;