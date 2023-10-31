import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import thư viện FontAwesome hoặc thư viện icon khác
function Account({navigation}) {
    return(
        <View style={styles.contain}>
            <Text>New</Text>
        </View>
    );
}
var styles = StyleSheet.create({
    contain:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
    },

})
export default Account;
