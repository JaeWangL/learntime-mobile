import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import { ApiCollectionTypes } from '../constants';
import type { CursorPaginationQuery } from '../pagination_models';
import type { PostInfoDTO, UpdatePostRequest } from './dtos';

export async function createPostAsync(
  request: PostInfoDTO
): Promise<FirebaseFirestoreTypes.DocumentReference<PostInfoDTO>> {
  return firestore()
    .collection<PostInfoDTO>(ApiCollectionTypes.POSTS)
    .add(request);
}

export async function deletePostByIdAsync(id: string): Promise<void> {
  await firestore()
    .collection<PostInfoDTO>(ApiCollectionTypes.POSTS)
    .doc(id)
    .delete();
}

export async function updatePostByIdAsync(
  id: string,
  request: UpdatePostRequest
): Promise<void> {
  await firestore()
    .collection<PostInfoDTO>(ApiCollectionTypes.POSTS)
    .doc(id)
    .update(request);
}

export function getPosts(
  pagable: CursorPaginationQuery
): Promise<FirebaseFirestoreTypes.QuerySnapshot<PostInfoDTO>> {
  return firestore()
    .collection<PostInfoDTO>(ApiCollectionTypes.POSTS)
    .startAt(pagable.lastId)
    .orderBy('createdAt', 'desc')
    .limit(pagable.pageSize)
    .get();
}
