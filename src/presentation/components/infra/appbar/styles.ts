import { ZIndexes } from '@application/styles/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: ZIndexes.APP_BAR,
  },
});
