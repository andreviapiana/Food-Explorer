// FS, Path and UploadConfig Import
const fs = require('fs');
const path = require('path');
const uploadConfig = require('../configs/upload');

class DiskStorage {
    async saveFile(file){
        await fs.promises.rename(
            // Initial position file
            path.resolve(uploadConfig.TMP_FOLDER, file),
            // Final position file
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        );

        return file;
    }

    async deleteFile(file){
        // Getting file address
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try {
            // If exists
            await fs.promises.stat(filePath);
        } catch {
            // Stopping
            return;
        }

        // Deleting
        await fs.promises.unlink(filePath);
    }
}

module.exports = DiskStorage;
