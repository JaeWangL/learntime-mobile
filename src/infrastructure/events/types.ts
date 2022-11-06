export enum ApplicationEventTypes {
  BOOKMARK_TOGGLED = 'bookmarkToggled',
}
export type ApplicationEventType =
  typeof ApplicationEventTypes[keyof typeof ApplicationEventTypes];
