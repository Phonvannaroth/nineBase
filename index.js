/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {setCustomText} from 'react-native-global-props';
import {fontNormal} from './functions/customFont'

const customTextProps = {
  style:{
    ...fontNormal,
    color:"#333",
  }
};
  setCustomText(customTextProps);
AppRegistry.registerComponent(appName, () => App);
