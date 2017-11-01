import React from 'react'
import { View, Text, FlatList, RefreshControl } from 'react-native'
import styles from './styles'
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../styles/colors'
import moment from 'moment'

const renderItem = (data) => (
    <View style={[styles.listItem, data.index === 0 && styles.firstItem]}>
        <Text>{`${moment(data.item.date).format('D-M-YYYY, h:mm:ss a')}`}</Text>
        <Text>{`${data.item.value} ${data.item.unit}`}</Text>
        <Text>{`Estado del transductor: ${data.item.state_transducer}`}</Text>
        <Text>{`Duracion: ${data.item.duration}`}</Text>
        <Text>{`Estado de la transmision: ${data.item.state_transmission}`}</Text>
    </View>
)

const ReportsList = ({data}) => (
    <View>
        {data.length > 0 && (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            style={styles.list}
            refreshControl={
                <RefreshControl
                    refreshing={false}
                    onRefresh={() => console.log('refresh')}
                    colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
                />
            }
        />
        )}
    </View>
)

export default ReportsList