/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './src/Authentication/LoginScreen';
import BottomTab from './src/Nav/BottomTab';

AppRegistry.registerComponent(appName, () => App);
// console.disableYellowBox = true;
