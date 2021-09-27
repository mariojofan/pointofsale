import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Category = () => {
    return (
        <View>
            <TouchableOpacity>
                <View style={styles.parentContainer}>
                    <Text style={styles.all}>All</Text>
                    <Text style={styles.all}>Makanan</Text>
                    <Text style={styles.all}>Minuman</Text>
                    <Text style={styles.all}>Snack</Text>
                    <Text style={styles.all}>Paket</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.line}>
                <View style={styles.line2}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    all: {
        fontSize: 14
    },
    line: {
        backgroundColor: '#DBD7F4',
        height: 4,
        marginTop: 15,
    },
    line2: {
        backgroundColor: '#39A2DB',
        width: 70,
        height: 4
    },
})

export default Category;