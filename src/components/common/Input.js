import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, keyboardType, secureTextEntry }) => {

    const {inputStyle, labelStyle, containerStyle} = styles;

    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
};

export { Input };