export enum ScreenNames {
  ROOT = 'Root',
  TAB_ROOT = 'TabRoot',

  TAB_HOME = 'TabHome',
  TAB_PROFILE = 'TabProfile',

  HOME = 'Home',
  POST_DETAIL = 'PostDetail',
  PROFILE = 'Profile',
}

export type RootStackParamList = {
  [ScreenNames.TAB_ROOT]: undefined;
};

export type TabRootParamList = {
  [ScreenNames.TAB_HOME]: undefined;
  [ScreenNames.TAB_PROFILE]: undefined;
};

export type TabHomeParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.POST_DETAIL]: undefined;
};

export type TabProfileParamList = {
  [ScreenNames.PROFILE]: undefined;
};
