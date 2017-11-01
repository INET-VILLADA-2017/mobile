import React, { Component } from 'react'
import { View, Picker } from 'react-native'
import { connect } from 'react-redux'
import ReportsList from '../../components/ReportsList'
import styles from './styles'

class ReportsScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parameter: 'Temperatura',
        }
    }

    data = () => this.props.samples.filter(e => e.param.name === this.state.parameter)

    render() {
        return (
            <View style={styles.container}>
                <ReportsList data={this.data()}/>
                <Picker
                    selectedValue={this.state.parameter}
                    onValueChange={(itemValue, itemIndex) => this.setState({parameter: itemValue})}>
                    {this.props.parameters.map((e) => <Picker.Item key={e.id} label={e.name} value={e.name} />)}
                </Picker>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    samples: state.data.samples,
    parameters: state.data.parameters
})

export default connect(mapStateToProps)(ReportsScreen)
