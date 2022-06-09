/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Tarefas from './Tarefas'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Tarefas);
