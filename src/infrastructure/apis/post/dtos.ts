import type { FirestoreSetValueExcept } from '@infrastructure/types/firebase';
import type { PartialExcept } from '@infrastructure/types/utilities';
import type { LocationModel } from '../shared_models';
import type { PostProviderModel } from './models';

export type PostInfoDTO = {
  id: string;
  title: string;
  description: string;
  likes: number;
  bookmarks: number;
  photoUrls: string[];
  reservationUrl: string;
  provider: PostProviderModel;
  location: LocationModel;
  createdAt: Date;
  updatedAt: Date;
};
export type UpdatePostRequest = FirestoreSetValueExcept<
  PartialExcept<PostInfoDTO, 'id'>,
  'id'
>;
