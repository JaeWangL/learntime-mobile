import Feather from '@expo/vector-icons/Feather';
import { type PostInfoDTO } from '@infrastructure/apis/post/dtos';
import ImageOverlay from '@infrastructure/components/imageOverlay';
import { navigate } from '@navigation/helpers';
import { ScreenNames } from '@navigation/types';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { Shadow } from 'react-native-shadow-2';
import { Avatar, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { styles } from './styles';

type PostItemProps = {
  data: PostInfoDTO;
};

function PostItem(props: PostItemProps): JSX.Element {
  const { data } = props;

  const onMorePress = useCallback((): void => {
    navigate(ScreenNames.POST_DETAIL, { post: data });
  }, []);

  return (
    <ImageOverlay
      style={styles.overlayImage}
      source={{ uri: data.photoUrls[0] }}
    >
      <Shadow
        containerStyle={styles.contentShadow}
        distance={100}
        startColor="#000"
        offset={[0, -20]}
      >
        <View style={styles.contentContainer} paddingH-20 paddingB-20 spread>
          <View>
            <View row centerV>
              <Avatar size={36} source={{ uri: data.provider.profileUrl }} />
              <Text white marginL-4>
                {data.provider.name}
              </Text>
            </View>
            <Text white>{data.title}</Text>
            <Text white>{data.location.addressName}</Text>
          </View>
          <TouchableOpacity onPress={onMorePress}>
            <Text white style={styles.labelShowMore}>
              Show More
            </Text>
          </TouchableOpacity>
        </View>
      </Shadow>
      <View style={styles.actionContainer}>
        <Feather name="heart" size={32} color="#fff" />
        <Text white marginB-16 marginT-4 center>
          {data.likes}
        </Text>
        <Feather name="bookmark" size={32} color="#fff" />
        <Text white marginB-16 marginT-4 center>
          {data.bookmarks}
        </Text>
      </View>
    </ImageOverlay>
  );
}

export default memo(PostItem, isEqual);
