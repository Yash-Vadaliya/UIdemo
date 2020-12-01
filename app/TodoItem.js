import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, View, TextInput } from 'react-native';

export default function TodoItem({ item, pressHandler, updateHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
        <TouchableOpacity>
            <TextInput style={styles.item} onChangeText={changeHandler}>{item.text}</TextInput>
            <Button  onPress={() => pressHandler(item.key)} title='delete' color='coral' />
            <Button onPress={() => updateHandler(item.key, item.text)} title='update' color='blue' />
        </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})