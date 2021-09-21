import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    header: {
        backgroundColor: 'gray',
        width: 219,
        height: 117,
    }
})

export default Dashboard;