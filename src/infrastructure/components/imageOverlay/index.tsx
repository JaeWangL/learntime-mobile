import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import {
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

export type ImageOverlayProps = {
  source: ImageSourcePropType;
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  overlayColor?: string;
};

function ImageOverlay(props: ImageOverlayProps): JSX.Element {
  const { children, source, overlayColor, style } = props;

  return (
    <ImageBackground source={source} style={style}>
      <View
        style={[StyleSheet.absoluteFill, { backgroundColor: overlayColor }]}
      />
      {children}
    </ImageBackground>
  );
}

ImageOverlay.defaultProps = {
  overlayColor: 'rgba(0, 0, 0, 0.45)',
} as ImageOverlayProps;

export default memo(ImageOverlay, isEqual);
