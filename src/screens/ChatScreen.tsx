import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import ChatInput from '../components/ChatInput';
import ChatDisplay from '../components/ChatDisplay';
import ChatButton from '../components/ChatButton';
import { Platform } from 'react-native';
import {styles} from './ChatScreen.styles';

const ChatScreen = () => {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleSend = () => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ChatDisplay messages={messages} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputContainer}
            >
                <ChatInput onChangeText={setMessage} value={message} />
                <ChatButton sendMessage={handleSend} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};


export default ChatScreen;
