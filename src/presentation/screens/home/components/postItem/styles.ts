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
    height: 160,
    backgroundColor: '#000',
  },
  actionContainer: {
    position: 'absolute',
    bottom: 80,
    right: 20,
  },
  labelShowMore: {
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
  },
});
