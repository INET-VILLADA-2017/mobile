import { Navigation } from 'react-native-navigation'
import configureStore from './store'
import { registerScreens } from './screens'
import { getNurseries, getParams, configGet } from './actions/data'
import { Provider } from 'react-redux'
import watch from 'redux-watch'
import { appInitialized } from './actions/nav'
import {
    LOGIN_SCREEN,
    MAIN_SCREEN
} from './constants/screenNames'
import {
    PRIMARY_COLOR,
    DARKER_PRIMARY,
    COLOR_WHITE
} from './styles/colors'

const store = configureStore()

registerScreens(store, Provider)

const defaultNavigatorStyle = {
    statusBarColor: DARKER_PRIMARY,
    navBarTextColor: COLOR_WHITE,
    navBarBackgroundColor: PRIMARY_COLOR,
    navBarTextFontSize: 17,
    navBarTextFontBold: true,
    //topBarElevationShadowEnabled: false,
    navBarTitleTextCentered: true,
}

export default class App {

    constructor(){
        let w = watch(store.getState, 'nav.root')
        store.subscribe(w((newVal, oldVal, path) => {
            this.renderApp(newVal)
        }))
        store.dispatch(appInitialized())
    }

    renderApp(root){
        switch(root) {
            case LOGIN_SCREEN:
                // render login screen
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'LoginScreen',
                        title: 'Login',
                        navigatorStyle: {
                            navBarHidden: true,
                        },
                    },
                })
                return

            case MAIN_SCREEN:
                store.dispatch(getNurseries())
                store.dispatch(getParams())
                store.dispatch(configGet())
                Navigation.startTabBasedApp({
                    tabs: [
                        {
                            screen: 'ReportsScreen',
                            icon: require('./images/reports.png'),
                            title: 'Reportes',
                            navigatorStyle: defaultNavigatorStyle,
                        },
                        {
                            screen: 'ConfigScreen',
                            icon: require('./images/config.png'),
                            title: 'Configuracion',
                            navigatorStyle: defaultNavigatorStyle,
                        },
                    ],
                    appStyle: {
                        tabBarSelectedButtonColor: DARKER_PRIMARY,
                    }
                })
                return

            default:
                // this should never happen, though.
                console.error('Unknown app root');
        }
    }

}
