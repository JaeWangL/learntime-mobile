import { useUpdatePost } from '@application/hooks/apis/post/update_post';
import { bookmarkState } from '@application/recoils/bookmark/atoms';
import { defaultBookmarkState } from '@application/recoils/bookmark/types';
import firestore from '@react-native-firebase/firestore';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import type { AddBookmarkParams, RemoveBookmarkParams } from './types';

type BookmarkType = {
  addBookmark: (params: AddBookmarkParams) => void;
  removeBookmark: (params: RemoveBookmarkParams) => void;
  resetBookmark: () => void;
};

export function useBookmark(): BookmarkType {
  const setBookmark = useSetRecoilState(bookmarkState);
  const { mutate } = useUpdatePost();

  const addBookmark = useCallback((params: AddBookmarkParams): void => {
    setBookmark((prev) => {
      return {
        postIds: [...prev.postIds, params.newPostId],
      };
    });
    mutate({
      id: params.newPostId,
      bookmarks: firestore.FieldValue.increment(1),
    });
  }, []);

  const removeBookmark = useCallback((params: RemoveBookmarkParams): void => {
    setBookmark((prev) => {
      return {
        postIds: prev.postIds.filter((p) => p !== params.postId),
      };
    });
    mutate({
      id: params.postId,
      bookmarks: firestore.FieldValue.increment(-1),
    });
  }, []);

  const resetBookmark = useCallback((): void => {
    setBookmark(defaultBookmarkState);
  }, []);

  return {
    addBookmark,
    removeBookmark,
    resetBookmark,
  };
}
