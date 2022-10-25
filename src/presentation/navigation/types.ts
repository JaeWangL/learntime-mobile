import type { PostInfoDTO } from '@infrastructure/apis/post/dtos';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum ScreenNames {
  ROOT = 'Root',
  TAB_ROOT = 'TabRoot',

  TAB_HOME = 'TabHome',
  TAB_PROFILE = 'TabProfile',

  HOME = 'Home',
  POST_DETAIL = 'PostDetail',
  PROFILE = 'Profile',
}
export type ScreenType = typeof ScreenNames[keyof typeof ScreenNames];

export const tabInvisibleScreens: string[] = [ScreenNames.POST_DETAIL];

export type RootStackParamList = {
  [ScreenNames.TAB_ROOT]: undefined;
};

export type TabRootParamList = {
  [ScreenNames.TAB_HOME]: undefined;
  [ScreenNames.TAB_PROFILE]: undefined;
};

export type TabHomeParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.POST_DETAIL]: { post: PostInfoDTO };
};
export type TabHomeScreenProps<T extends keyof TabHomeParamList> =
  NativeStackScreenProps<TabHomeParamList, T>;

export type TabProfileParamList = {
  [ScreenNames.PROFILE]: undefined;
};
export type TabProfilScreenProps<T extends keyof TabProfileParamList> =
  NativeStackScreenProps<TabProfileParamList, T>;
