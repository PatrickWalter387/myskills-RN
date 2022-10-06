import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export default function Button({ title, ...rest } : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.button} 
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#A370F7',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 15
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
});