import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { IconHumburger, IconNotif } from '../../assets';


const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.icon1}>
                   
                </View>

                <View style={styles.containerChild}>
                    <Text style={styles.icon2}></Text>
                    
                    <View>
                        <Text>Sumanto</Text>
                        <Text>Cashier</Text>
                    </View>
                    <Text style={styles.photo}></Text>
                </View>
            </View>
            <View style={{backgroundColor: '#E1E1E1', height: 1}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 51,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon1: {
        backgroundColor: 'black',
        width: 24,
        height: 24,
        marginLeft: 18
    },
    containerChild: {
        width: 140,
        height: 41,
        marginRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    icon2: {
        backgroundColor: 'black',
        width: 30,
        height: 31,
        justifyContent: 'center',
        marginRight: 10
    },
    photo: {
        backgroundColor: 'black',
        width: 38,
        height: 41,
        borderRadius: 20,
        marginLeft: 7
    },
})

export default Navbar;