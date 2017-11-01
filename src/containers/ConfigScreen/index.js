import React, { Component } from 'react'
import { View, Picker } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrent, setConfig } from "../../actions/data"
import t from 'tcomb-form-native'
import Button from 'apsl-react-native-button'
import styles from './styles'

const Schema = t.struct({
    spray: t.String,
    shadow: t.String,
    watering_period_1: t.String,
    watering_period_2: t.String,
})

const options = {
    fields: {
        spray: {
            label: 'Volumen de rociado'
        },
        shadow: {
            label: 'Grado de sombra'
        },
        watering_period_1: {
            label: 'Periodo de regado 1'
        },
        watering_period_2: {
            label: 'Periodo de regado 2'
        },
    }
}

class ConfigScreen extends Component {

    submit = () => {
        let value = this.refs.form.getValue()
        if (value) {
            this.props.setConfig(value)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <t.form.Form ref={'form'} type={Schema} options={options} />
                    <Button onPress={this.submit} textStyle={styles.buttonText} style={styles.button}>
                        {'Enviar'}
                    </Button>
                </View>
                <Picker
                    selectedValue={this.props.current}
                    onValueChange={(itemValue, itemIndex) => this.props.setCurrent(itemValue)}>
                    {this.props.nurseries.map((e) => <Picker.Item key={e.id} label={e.business_name} value={e.id} />)}
                </Picker>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    nurseries: state.data.nurseries,
    current: state.data.current
})

const mapDispatchToProps = dispatch => ({
    setCurrent: bindActionCreators(setCurrent, dispatch),
    setConfig: bindActionCreators(setConfig, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigScreen)
