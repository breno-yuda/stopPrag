import { ReadStream } from "fs-capacitor";

export interface FileUpload {
  createReadStream(): ReadStream;
  filename: string;
  mimetype: string;
  encoding: string;
}