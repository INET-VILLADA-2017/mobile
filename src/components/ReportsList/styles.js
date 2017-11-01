import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    list: {
      height: '85%'
    },
    listItem : {
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        backgroundColor: '#fafafa',
        elevation: 3,
        borderRadius: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstItem: {
        marginTop: 20,
    },
})

export { styles as default }