import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlayImage: {
    width: '100%',
    height: '100%',
  },
  contentShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
  },
  contentContainer: {
    width: Dimensions.get('window').width,
    height: 140,
    backgroundColor: '#000',
  },
  actionContainer: {
    position: 'absolute',
    bottom: Dimensions.get('window').height / 3,
    right: 0,
  },
});
