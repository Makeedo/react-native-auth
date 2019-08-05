import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children }) => {

    const { containerStyle, buttonStyle, textStyle } = styles;

    return(
        <View style={containerStyle}>
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        alignSelf: 'stretch',
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        height:50,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '200',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };