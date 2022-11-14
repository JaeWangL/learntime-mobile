export type BookmarkState = {
  postIds: Set<string>;
};

export const defaultBookmarkState: BookmarkState = {
  postIds: new Set<string>([]),
};
