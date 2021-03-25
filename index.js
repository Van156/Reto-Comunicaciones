/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {startApp} from './src/navigation/Navigation';
import {LogBox} from 'react-native';

Navigation.events().registerAppLaunchedListener(() => startApp());
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
