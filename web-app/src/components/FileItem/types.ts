export type FileProps = {
  id: number;
  clientName: string;
  link: string;
  date: string;
};

export interface FileItem {
  file: FileProps;
}
