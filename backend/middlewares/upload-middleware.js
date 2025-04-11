const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");
const fileExtension = require("file-extension");
const s3Client = require("../aws_config");

const allowedImage = ["image/png", "image/jpeg"];
const imageError = "Limited file types allowed - only .png, .jpeg";

const multerObj = multer({
	fileFilter: (req, file, cb) => {
		let { mimetype } = file;
		if (allowedImage.includes(mimetype)) {
			cb(null, true);
		} else {
			cb(new multer.MulterError(imageError));
		}
	},
	limits: {
		fileSize: 1024 * 1024 * 8, // 8mb
	},
	storage: multerS3({
		s3: s3Client,
		bucket: "edudoor-jobseeker",
		acl: "public-read",
		metadata: function (req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function (req, file, cb) {
			const { fieldname, originalname } = file;
			const extension = fileExtension(originalname);
			cb(null, `profile/${req.id}/${Date.now().toString()}-${uuidv4()}.${extension}`);
		},
	}),
});

module.exports = multerObj;
