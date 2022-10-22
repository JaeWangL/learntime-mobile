import type { LocationModel } from './shared_models';

export type PostInfoDTO = {
  id: string;
  title: string;
  likes: number;
  photoUrls: string[];
  location: LocationModel;
};
