import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
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
    },
})

export default SearhingBar;