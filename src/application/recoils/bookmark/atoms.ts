import { atom } from 'recoil';
import { RecoilStateKeys } from '../recoil_constants';
import { persistAtomEffect } from '../utils';
import { type BookmarkState, defaultBookmarkState } from './types';

export const bookmarkState = atom<BookmarkState>({
  key: RecoilStateKeys.BOOKMARK,
  default: defaultBookmarkState,
  effects: [persistAtomEffect<BookmarkState>(RecoilStateKeys.BOOKMARK)],
});
