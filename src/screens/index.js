import { Navigation } from 'react-native-navigation'

import LoginScreen from '../containers/LoginScreen'
import ReportsScreen from '../containers/ReportsScreen'
import ConfigScreen from '../containers/ConfigScreen'

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider)
    Navigation.registerComponent('ConfigScreen', () => ConfigScreen, store, Provider)
    Navigation.registerComponent('ReportsScreen', () => ReportsScreen, store, Provider)
}
