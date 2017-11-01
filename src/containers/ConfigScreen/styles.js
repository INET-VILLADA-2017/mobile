import {StyleSheet} from 'react-native'
import {COLOR_BACKGROUND, COLOR_WHITE, PRIMARY_COLOR} from "../../styles/colors";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: COLOR_BACKGROUND
    },
    wrapper: {
        backgroundColor: COLOR_WHITE,
        borderRadius: 2,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '80%',
        marginLeft: '10%',
        padding: 20,
        elevation: 2,
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        borderWidth: 0,
        marginTop: 20
    },
    buttonText: {
        color: COLOR_WHITE
    }
})

export {styles as default}