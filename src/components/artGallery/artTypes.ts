export interface Art {
  type: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fileId: string;
  tags: string[];
  AITags: string[] | null;
  versionInfo: {
    id: string;
    name: string;
  };
  embeddedMetadata: {
    ModifyDate: string;
    XResolution: number;
    YResolution: number;
    DateCreated: string;
    DateTimeCreated: string;
  };
  customCoordinates: null;
  customMetadata: {
    title?: string;
  };
  isPrivateFile: false;
  url: string;
  thumbnail: string;
  fileType: string;
  filePath: string;
  height: number;
  width: number;
  size: number;
  hasAlpha: boolean;
  mime: string;
}
