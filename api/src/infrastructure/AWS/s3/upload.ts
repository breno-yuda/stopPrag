import * as AWS from 'aws-sdk';
import * as fs from 'fs';

async function uploadToS3(document: PDFKit.PDFDocument, fileName: string) {
    const s3 = new AWS.S3({
        // Configure your AWS credentials and region here
        accessKeyId: 'AKIA6GBMGFAQ6QEVIU7L',
        secretAccessKey: 'e5hyE0GenmykeBEL6g5D23VjEuEcreXZLThGopq8',
        region: 'sa-east-1',
    });

    const params = {
        Bucket: 'stop-prag-pdf',
        Key: 'teste2.pdf',
        Body: document,
        contentType: 'application/pdf'
    };

    await s3.upload(params).promise();

    console.log(`s3 uploadded`)

    // Optionally, you can delete the local file after uploading
    // fs.unlinkSync(filePath);
}

export { uploadToS3 }