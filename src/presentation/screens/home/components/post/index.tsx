import ImageOverlay from '@infrastructure/components/imageOverlay';
import { type PostInfoDTO } from '@infrastructure/dtos/post_dtos';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Shadow } from 'react-native-shadow-2';
import { Text, View } from 'react-native-ui-lib';
import { styles } from './styles';

type PostProps = {
  data: PostInfoDTO;
};

function Post(props: PostProps): JSX.Element {
  const { data } = props;

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
        <View style={styles.contentContainer}>
          <Text white>dasd</Text>
        </View>
      </Shadow>
      <View style={styles.actionContainer}>
        <Text white>Heart</Text>
        <Text white>Heart</Text>
        <Text white>Heart</Text>
      </View>
    </ImageOverlay>
  );
}

export default memo(Post, isEqual);
