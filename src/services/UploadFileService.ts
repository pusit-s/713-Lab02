import s3Client from "../awsConfig";
import { PutObjectAclCommand } from "@aws-sdk/client-s3";

export async function uploadFile(bucket: string, filePath: string, file: Express.Multer.File): Promise<string> {

    const params = {
        Bucket: bucket,
        Key: filePath,
        Body: file.buffer,
        ContentType: file.mimetype,
    };

    try {
        const data = await s3Client.send(new PutObjectAclCommand(params));
        console.log("Successfully uploaded file", data);
        const publicUrl = `https://jevhdzsjeoykeblpcyph.supabase.co/storage/v1/object/public/images/${filePath}`;
        console.log("Public URL", publicUrl);
        return publicUrl;
    } catch (error) {
        console.error("Error uploading file", error);
        throw error;
    }
}