import { Client } from "minio";

const minioClient = new Client({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: "minioadmin",
  secretKey: "minioadmin",
});

export const getObjectUrl = async (objectName) => {
  const bucketName = "bucket1";
  try {
    const url = await minioClient.presignedGetObject(
      bucketName,
      objectName,
      24 * 60 * 60
    );
    return url;
  } catch (err) {
    console.error("Error generating URL:", err);
    return "error in URL generation";
  }
};
