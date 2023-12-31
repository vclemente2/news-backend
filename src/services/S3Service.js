const { s3 } = require("../config/s3Config");
const { ApiError } = require("../errors/ApiError");

class S3Service {
  static create = async (multerFileObject, newsId) => {
    const image = await s3
      .upload({
        Bucket: process.env.S3_BUCKET,
        Key: `images/${newsId}/${multerFileObject.originalname}`,
        Body: multerFileObject.buffer,
        ContentType: multerFileObject.mimetype
      })
      .promise();

    if (!image.Location) throw new ApiError(500);

    return {
      url: image.Location,
      path: image.Key
    };
  };

  static destroy = async (path) => {
    await s3
      .deleteObject({
        Bucket: process.env.S3_BUCKET,
        Key: path
      })
      .promise();
  };
}

module.exports = { S3Service };
