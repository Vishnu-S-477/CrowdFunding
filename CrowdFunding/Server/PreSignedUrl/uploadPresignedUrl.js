import AWS from "aws-sdk";

const s3 = new AWS.S3({
  endpoint: "http://localhost:9000",
  accessKeyId: "minioadmin",
  secretAccessKey: "minioadmin",
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

export const generatePresignedUrl = (filename, filetype) => {
  const params = {
    Bucket: "bucket1",
    Key: filename,
    ContentType: filetype,
    Expires: 60,
  };

  return new Promise((resolve, reject) => {
    s3.getSignedUrl("putObject", params, (err, url) => {
      if (err) return reject(err);
      resolve(url);
    });
  });
};
