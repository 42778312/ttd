export type VideoData = {
  id: string;
  title: string;
  author: string;
  cover: string;
  downloadUrl: string;
  duration?: number;
};

export type ResolveResponse = VideoData;

export type ApiError = {
  error: string;
};
