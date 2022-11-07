import { useUpdatePost } from '@application/hooks/apis/post/update_post';
import { bookmarkState } from '@application/recoils/bookmark/atoms';
import { defaultBookmarkState } from '@application/recoils/bookmark/types';
import Emitter from '@infrastructure/events/emitter';
import { ApplicationEventTypes } from '@infrastructure/events/types';
import firestore from '@react-native-firebase/firestore';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import type { AddBookmarkParams, RemoveBookmarkParams } from './types';

type BookmarkType = {
  isBookmarked: (postId: string) => boolean;
  addBookmark: (params: AddBookmarkParams) => void;
  removeBookmark: (params: RemoveBookmarkParams) => void;
  toggleBookmark: (params: AddBookmarkParams) => void;
  resetBookmark: () => void;
};

export function useBookmark(): BookmarkType {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const { mutate } = useUpdatePost();

  const isBookmarked = useCallback(
    (postId: string): boolean => {
      return bookmark.postIds.has(postId);
    },
    [bookmark.postIds]
  );

  const addBookmark = useCallback((params: AddBookmarkParams): void => {
    setBookmark((prev) => {
      return {
        postIds: prev.postIds.add(params.newPostId),
      };
    });
    mutate({
      id: params.newPostId,
      bookmarks: firestore.FieldValue.increment(1),
    });
  }, []);

  const removeBookmark = useCallback((params: RemoveBookmarkParams): void => {
    setBookmark((prev) => {
      prev.postIds.delete(params.postId);
      return {
        postIds: prev.postIds,
      };
    });
    mutate({
      id: params.postId,
      bookmarks: firestore.FieldValue.increment(-1),
    });
  }, []);

  const toggleBookmark = useCallback((params: AddBookmarkParams): void => {
    if (isBookmarked(params.newPostId)) {
      removeBookmark({ postId: params.newPostId });
    } else {
      addBookmark({ newPostId: params.newPostId });
    }
    Emitter.emit(ApplicationEventTypes.BOOKMARK_TOGGLED, '');
  }, []);

  const resetBookmark = useCallback((): void => {
    setBookmark(defaultBookmarkState);
  }, []);

  return {
    isBookmarked,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    resetBookmark,
  };
}
