import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { fromIni } from '@aws-sdk/credential-providers'
import { HttpRequest } from '@smithy/protocol-http'
import { getSignedUrl, S3RequestPresigner } from '@aws-sdk/s3-request-presigner'
import { parseUrl } from '@smithy/url-parser'
import { formatUrl } from '@aws-sdk/util-format-url'
import { Hash } from '@smithy/hash-node'

const createPresignedUrlWithoutClient = async ({ region, bucket, key }) => {
  const url = parseUrl(`https://${bucket}.s3.${region}.amazonaws.com/${key}`)
  const presigner = new S3RequestPresigner({
    credentials: fromIni(),
    region,
    sha256: Hash.bind(null, 'sha256'),
  })

  const signedUrlObject = await presigner.presign(new HttpRequest(url))
  return formatUrl(signedUrlObject)
}

const createPresignedUrlWithClient = ({ region, bucket, key }) => {
  const client = new S3Client({
    region,
    credentials: {
      accessKeyId: 'AKIA6GBMGFAQ6QEVIU7L',
      secretAccessKey: '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',
    },
  })
  const command = new GetObjectCommand({ Bucket: bucket, Key: key })
  return getSignedUrl(client, command, { expiresIn: 3600 })
}

export async function generateExpirableUrl(region: string, bucket: string, key: string) {
  //   const REGION = 'us-east-1'
  //   const BUCKET = 'example_bucket'
  //   const KEY = 'example_file.jpg'

  try {
    // const noClientUrl = await createPresignedUrlWithoutClient({
    //   region: region,
    //   bucket: bucket,
    //   key: key,
    // })

    const clientUrl = await createPresignedUrlWithClient({
      region: region,
      bucket: bucket,
      key: key,
    })

    return clientUrl
  } catch (err) {
    console.error(err)
  }
}
