import './configs/ui_foundation';
import './configs/ui_components';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import App from './App.tsx';

LogBox.ignoreLogs(['Require']);

enableFreeze();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
