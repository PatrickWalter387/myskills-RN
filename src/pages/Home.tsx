import React, { Fragment, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData{
    id: string,
    name: string
}

export default function App(){
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [newSkill, setNewSkill] = useState("");
    const [gretting, setGreeting] = useState("");

    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        };

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id : string){
        setMySkills(oldState => oldState.filter(skill => skill.id !== id));
    }

    useEffect(() => {
        const currentHour = (new Date().getUTCHours()) - 3;

        if(currentHour < 12)
            setGreeting("Good morning!");
        else if(currentHour >= 12 && currentHour < 19)
            setGreeting("Good afternoon!");
        else
            setGreeting("Good night!");
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo, Patrick!</Text>
            <Text style={{ color: '#FFF' }}>{gretting}</Text>

            <TextInput style={styles.input} placeholder="Nova skill" placeholderTextColor="#555" onChangeText={setNewSkill} />
            <Button title='Adicionar' onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginTop: 40 }]}>
                My Skills
            </Text>

            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard name={item.name} onPress={() => handleRemoveSkill(item.id)} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#121015'
    },
        title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        borderRadius: 7,
        marginTop: 5
    }
}); 