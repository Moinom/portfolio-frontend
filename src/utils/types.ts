export interface Art {
  tags: string[];
  title?: string;
  height: number;
  width: number;
  url: string;
}

export interface Code {
  tags: string[];
  title?: string;
  description?: string;
  language?: string;
  prod?: string;
  github?: string;
  height: number;
  width: number;
  url: string;
}
