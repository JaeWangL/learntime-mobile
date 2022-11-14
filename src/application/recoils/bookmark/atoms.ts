import { atom } from 'recoil';
import { RecoilStateKeys } from '../recoil_constants';
import { persistAtomEffect } from '../utils';
import { type BookmarkState, defaultBookmarkState } from './types';
import { customReplacer, customReviver } from './utils';

export const bookmarkState = atom<BookmarkState>({
  key: RecoilStateKeys.BOOKMARK,
  default: defaultBookmarkState,
  effects: [
    persistAtomEffect<BookmarkState>(RecoilStateKeys.BOOKMARK, {
      reviver: customReviver,
      replacer: customReplacer,
    }),
  ],
});
