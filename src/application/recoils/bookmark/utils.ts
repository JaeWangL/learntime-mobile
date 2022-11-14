import { type BookmarkState } from './types';

// NOTE: for getting/setting 'Set' data
// 'Set' data is not compatible with JSON.parse/JSON.stringfy

export const customReviver = (key: string, value: any): BookmarkState => {
  // eslint-disable-next-line no-prototype-builtins
  return typeof value === 'object' && value.hasOwnProperty('postIds')
    ? {
        ...value,
        postIds: new Set(value.postIds),
      }
    : value;
};

export const customReplacer = (key: string, value: BookmarkState): any => {
  return value.postIds instanceof Set
    ? {
        ...value,
        postIds: Array.from(value.postIds),
      }
    : value;
};
