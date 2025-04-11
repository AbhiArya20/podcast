// import multer from "multer";
// import multerS3 from "multer-s3";
// import { v6 as uuid } from "uuid";
// import fileExtension from "file-extension";
// import mime from "mime-types";

// const videoSize = 1024 * 1024 * 200; // 200mb
// const imageSize = 1024 * 1024 * 8; // 8mb

// const allowedImage = ["image/png", "image/jpeg"];
// const allowedDocument = ["application/pdf"];
// const allowedVideo = ["video/mp4"];

// const imageError = "Limited file types allowed - only .png, .jpeg";
// const documentError = "Limited file types allowed - only .pdf";
// const videoError = "Limited file types allowed - only .mp4";

// const fileTypeObj = {
//   image: "image",
//   document: "document",
//   video: "video",
// };

// class UploadFiles {
//   public static multer(fileType, isVideo = false) {
//     return multer({
//       fileFilter: (req, file, cb) => {
//         let { mimetype, fieldname, originalname } = file;
//         if (mimetype === "application/octet-stream") {
//           mimetype = mime.lookup(originalname);
//         }
//         if (fileType[fieldname] === fileTypeObj.image) {
//           if (allowedImage.includes(mimetype)) {
//             cb(null, true);
//           } else {
//             cb(new multer.MulterError(imageError));
//           }
//         } else if (fileType[fieldname] === fileTypeObj.document) {
//           if (allowedDocument.includes(mimetype)) {
//             cb(null, true);
//           } else {
//             cb(new multer.MulterError(documentError));
//           }
//         } else if (fileType[fieldname] === fileTypeObj.video) {
//           if (allowedVideo.includes(mimetype)) {
//             cb(null, true);
//           } else {
//             cb(new multer.MulterError(videoError));
//           }
//         }
//       },
//       limits: {
//         fileSize: isVideo ? videoSize : imageSize,
//       },
//       storage: multerS3({
//         s3: s3Client,
//         bucket: "edudoor-jobseeker",
//         acl: "public-read",
//         metadata: function (req, file, cb) {
//           cb(null, { fieldName: file.fieldname });
//         },
//         key: function (req, file, cb) {
//           const { fieldname, originalname } = file;
//           const extension = fileExtension(originalname);
//           cb(
//             null,
//             `${fieldname}/${req._id}/${Date.now().toString()}-${uuidv4()}.${extension}`
//           );
//         },
//       }),
//     });
//   }
// }

// const uploadFiles = new UploadFiles();
// export { uploadFiles, fileTypeObj };

// const adminUploadConfig = {
//   fileType: {
//     profileImg: fileTypeObj.image,
//     idProof: fileTypeObj.image,
//   },

//   fields: [
//     { name: "profileImg", maxCount: 1 },
//     { name: "idProof", maxCount: 1 },
//   ],
// };

// const adminUploadMiddleware = UploadFiles.multer(
//   adminUploadConfig.fileType
// ).fields(adminUploadConfig.fields);

// export { adminUploadMiddleware };
