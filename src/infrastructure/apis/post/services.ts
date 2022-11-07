import { logError } from '@infrastructure/logger/logger_service';
import { getErrorMessage } from '@infrastructure/utils/error_utils';
import { getFuncName } from '@infrastructure/utils/function_utils';
import firestore, {
  type FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
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

export async function deletePostByIdAsync(id: string): Promise<boolean> {
  try {
    await firestore()
      .collection<PostInfoDTO>(ApiCollectionTypes.POSTS)
      .doc(id)
      .delete();

    return true;
  } catch (err) {
    logError(getErrorMessage(err), getFuncName());
  }

  return false;
}

export async function updatePostAsync(
  request: UpdatePostRequest
): Promise<boolean> {
  try {
    await firestore()
      .collection<PostInfoDTO>(ApiCollectionTypes.POSTS)
      .doc(request.id)
      .update(request);

    return false;
  } catch (err) {
    logError(getErrorMessage(err), getFuncName());
  }

  return false;
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
    .catch((err: Error) => {
      logError(err.toString(), getFuncName());
      return undefined;
    });
}

export async function getPostsByIds(
  ids: string[],
  pagable: CursorPaginationQuery
): Promise<PostInfoDTO[] | undefined> {
  return firestore()
    .collection<PostInfoDTO>(ApiCollectionTypes.POSTS)
    .where('id', 'in', ids)
    .orderBy('createdAt', 'desc')
    .limitToLast(pagable.pageSize)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    })
    .catch((err: Error) => {
      logError(err.toString(), getFuncName());
      return undefined;
    });
}
