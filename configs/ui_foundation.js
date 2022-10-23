import { Colors, Typography } from 'react-native-ui-lib';
import { colors } from '../src/presentation/styles/colors.ts';

Colors.loadColors(colors);

Typography.loadTypographies({
  heading: { fontSize: 36, fontWeight: '600' },
  subheading: { fontSize: 28, fontWeight: '500' },
  body: { fontSize: 18, fontWeight: '400' },
});
