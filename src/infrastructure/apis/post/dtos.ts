import type { LocationModel } from '../shared_models';
import type { PostProviderModel } from './models';

export type PostInfoDTO = {
  id: string;
  title: string;
  likes: number;
  photoUrls: string[];
  provider: PostProviderModel;
  location: LocationModel;
};
