import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'

class ConfigScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.centeredText}>Finances</Text>
            </View>
        )
    }
}

export default ConfigScreen
