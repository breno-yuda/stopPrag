import * as AWS from 'aws-sdk'
import { generateExpirableUrl } from './download'

async function uploadToS3(document: PDFKit.PDFDocument, fileName: string) {
  console.log('aqui entrou')
  const s3 = new AWS.S3({
    // Configure your AWS credentials and region here
    accessKeyId: 'AKIA6GBMGFAQ6QEVIU7L',
    secretAccessKey: 'e5hyE0GenmykeBEL6g5D23VjEuEcreXZLThGopq8',
    region: 'sa-east-1',
  })

  const params = {
    Bucket: 'stop-prag-pdf',
    Key: fileName,
    Body: document,
    contentType: 'application/pdf',
  }

  await s3
    .upload(params)
    .promise()
    .then(() => {
      console.log(`s3 uploadded`)
      // return generateExpirableUrl('sa-east-1', params.Bucket, params.Key)
    })
    .catch((error) => {
      console.log(error)
    })
}

export { uploadToS3 }
