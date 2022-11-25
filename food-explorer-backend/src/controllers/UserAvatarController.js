// Knex, App Error and Disk Storage Import
const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
    async update(request, response) {
        // Capturing ID Parameters and image filename
        const user_id = request.user.id;
        const avatarFilename = request.file.filename;

        // Instantiating diskStorage
        const diskStorage = new DiskStorage();

        // Getting the user data through the informed ID
        const user = await knex("users")
            .where({ id: user_id }).first();

            // Verifications
            if (!user) {
                throw new AppError("Somente usuários autenticados podem mudar o avatar", 401)
            }

            // Deleting the old image if a new image is uploaded and saving the new image
            if (user.avatar) {
                await diskStorage.deleteFile(user.avatar);
            }

            const filename = await diskStorage.saveFile(avatarFilename);
            user.avatar = filename;

            await knex("users").update(user).where({ id: user_id });

            return response.status(201).json(user);
    }
}

module.exports = UserAvatarController;