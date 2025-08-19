import multer from "multer";
import path from "node:path";

// Upload directory
const uploadDir = path.join(__dirname, "../../uploads");

// Configure storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});

// Export multer instance
export const upload = multer({ storage });
