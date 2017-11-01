import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../actions/auth'
import { Text, View } from 'react-native'
import t from 'tcomb-form-native'
import Button from 'apsl-react-native-button'
import styles from './styles'

const Schema = t.struct({
    username: t.String,
    password: t.String
})

const options = {
    fields: {
        username: {
            label: 'Usuario'
        },
        password: {
            password: true,
            secureTextEntry: true,
            label: 'Contraseña'
        }
    }
}

class LoginScreen extends Component {

    submit = () => {
        let value = this.refs.form.getValue()
        if (value) {
            this.props.login(value.username, value.password)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <t.form.Form ref={'form'}
                             type={Schema}
                             options={options}
                />
                <Button onPress={this.submit} textStyle={styles.buttonText} style={styles.button}>
                    {'Ingresar'}
                </Button>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(login, dispatch)
})

export default connect(() => ({}), mapDispatchToProps)(LoginScreen)