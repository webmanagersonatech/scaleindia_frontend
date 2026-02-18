export interface IShortThumbnailFormats {
  thumbnail?: { url: string };
  small?: { url: string };
  medium?: { url: string };
  large?: { url: string };
}

export interface IShortThumbnail {
  id: number;
  name: string;
  url: string;
  formats: IShortThumbnailFormats;
}

export interface IShort {
  id: number;
  title: string;
  youtubeId: string;
  isActive: boolean;
  order?: number;
  thumbnail?: IShortThumbnail[]; // <-- add this
}


export interface IShortsResponse {
  data: IShort[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
