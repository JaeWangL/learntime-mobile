import { bookmarkState } from '@application/recoils/bookmark/atoms';
import { defaultBookmarkState } from '@application/recoils/bookmark/types';
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

  const addBookmark = useCallback((params: AddBookmarkParams): void => {
    setBookmark((prev) => {
      return {
        postIds: [...prev.postIds, params.newPostId],
      };
    });
  }, []);

  const removeBookmark = useCallback((params: RemoveBookmarkParams): void => {
    setBookmark((prev) => {
      return {
        postIds: prev.postIds.filter((p) => p !== params.postId),
      };
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
