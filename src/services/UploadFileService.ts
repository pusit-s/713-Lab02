import s3Client from "../awsConfig";
import { PutObjectAclCommand } from "@aws-sdk/client-s3";

export async function uploadFile(bucket: string, filePath: string, file: Express.Multer.File): Promise<void> {

    const params = {
        Bucket: bucket,
        Key: filePath,
        Body: file.buffer,
        ContentType: file.mimetype,
    };

    try {
        const data = await s3Client.send(new PutObjectAclCommand(params));
        console.log("Successfully uploaded file", data);
    } catch (error) {
        console.error("Error uploading file", error);
        throw error;
    }
}