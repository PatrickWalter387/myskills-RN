import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
    name: string
}

export default function SkillCard({ name, ...rest } : SkillCardProps){
    return(
        <TouchableOpacity 
        style={styles.buttonSkill}
        {...rest}
        >
            <Text style={styles.textSkill}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});