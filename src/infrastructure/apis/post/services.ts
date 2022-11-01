import { logError } from '@infrastructure/logger/logger_service';
import { getFuncName } from '@infrastructure/utils/function_utils';
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

export async function getPosts(
  pagable: CursorPaginationQuery
): Promise<PostInfoDTO[] | undefined> {
  return firestore()
    .collection<PostInfoDTO>(ApiCollectionTypes.POSTS)
    .orderBy('createdAt', 'desc')
    .limitToLast(pagable.pageSize)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    })
    .catch((err) => {
      logError(err.toString(), getFuncName());
      return undefined;
    });
}
