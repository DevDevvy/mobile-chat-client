import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './ChatInput.styles';
interface ChatInputProps {
    onChangeText: (text: string) => void;
    value: string;
}
const ChatInput: React.FC<ChatInputProps> = ({ onChangeText, value }) => {
    return (
        <View
            style={styles.inputContainer}
        >
            <TextInput
                style={styles.textInput}
                placeholder="Type your message..."
                placeholderTextColor="#9E9E9E"
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

export default ChatInput;
