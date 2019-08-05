import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    let cardSectionStyle = {...styles.containerStyle, ...props.additionalStyles};
    return(
        <View style={cardSectionStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };