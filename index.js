/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ModuleA from './App';
import {name as appName} from './app.json';

export default AppRegistry.registerComponent(appName, () => ModuleA);
// export default ModuleA