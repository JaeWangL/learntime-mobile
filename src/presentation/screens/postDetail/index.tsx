import type { ScreenNames } from '@navigation/types';
import { type TabHomeScreenProps } from '@navigation/types';
import Appbar from '@presentation/components/infra/appbar';
import BaseLayout from '@presentation/layouts/base';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { ScrollView } from 'react-native';
import { AnimatedImage, Avatar, Text, View } from 'react-native-ui-lib';
import ActionBox from './containers/actionBox';

function PostDetailScreen({
  route,
  navigation,
}: TabHomeScreenProps<typeof ScreenNames.POST_DETAIL>): JSX.Element {
  const { post } = route.params;

  return (
    <BaseLayout useSafeArea={false}>
      <Appbar surface="transparent" accessoryLeft="back" />
      <ScrollView>
        <AnimatedImage source={{ uri: post.photoUrls[0] }} height={200} />
        <View row centerV>
          <Avatar size={36} source={{ uri: post.provider.profileUrl }} />
          <Text marginL-4>{post.provider.name}</Text>
        </View>
        <Text>{post.location.address_name}</Text>
        <Text>{post.title}</Text>
        <Text>{post.description}</Text>
      </ScrollView>
      <ActionBox post={post} />
    </BaseLayout>
  );
}

export default memo(PostDetailScreen, isEqual);
