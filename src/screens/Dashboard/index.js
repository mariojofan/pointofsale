import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

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
        </View>
    )
}

const SearhingBar = () => {
    return (
        <View>
            <View style={styles.containerChild2}>
                <TextInput value='Search Here' style={styles.bar}/>
                <Text style={styles.iconSearch}></Text>
            </View>
        </View>
    )
}

const Dashboard = () => {
    return (
        <View>
            <Navbar />
            <SearhingBar />
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: 'red',
    //     alignItems: 'center',
    //     justifyContent: 'center',
        
    // },

    // Navbar
    header: {
        backgroundColor: 'gray',
        alignItems: 'center',
        height: 51,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    //  Seach bar
    bar: {
        backgroundColor: '#F7F7FC',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        height: 40,
        paddingLeft: 48,
        fontSize: 14,
        marginHorizontal: 10,
        marginTop: 9,

    },
    iconSearch: {
        backgroundColor: 'black',
        width: 24,
        height: 24,
        position: 'absolute',
        top: 17,
        left: 25
    },
    containerChild2: {
        position: 'relative',
    }

})

export default Dashboard;