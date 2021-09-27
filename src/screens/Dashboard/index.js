import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { Navbar, SearhingBar, Category } from '../../components';

const Dashboard = () => {
    return (
        <View>
            <Navbar />
            <SearhingBar />
            <Category />
        </View>
    )
}

export default Dashboard;