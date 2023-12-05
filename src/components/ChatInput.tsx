import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ChatInputProps {
    onChangeText: (text: string) => void;
    value: string;
}
const ChatInput: React.FC<ChatInputProps> = ({ onChangeText, value }) => {
    return (
        <View
            style={{
                flex: .8, // Set flex to 1 to allow the TextInput to take available space
                backgroundColor: '#1E1E1E',
                padding: 10,
                marginBottom: 4,
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <TextInput
                style={{ flex: 1, color: 'white' }}
                placeholder="Type your message..."
                placeholderTextColor="#9E9E9E"
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

export default ChatInput;
