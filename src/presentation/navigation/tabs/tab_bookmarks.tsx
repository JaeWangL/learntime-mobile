import BookmarksScreen from '@presentation/screens/bookmarks';
import PostDetailScreen from '@presentation/screens/postDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { type TabBookmarksParamList, ScreenNames } from '../types';

const Stack = createNativeStackNavigator<TabBookmarksParamList>();

function TabBookmarks(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name={ScreenNames.BOOKMARKS} component={BookmarksScreen} />
      <Stack.Screen
        name={ScreenNames.POST_DETAIL}
        component={PostDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default memo(TabBookmarks, isEqual);
