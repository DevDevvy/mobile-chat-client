import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import ChatInput from '../components/ChatInput';
import ChatDisplay from '../components/ChatDisplay';
import ChatButton from '../components/ChatButton';

const ChatScreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

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
                <ChatButton title="Send" sendMessage={handleSend} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#1E1E1E',
    },
});

export default ChatScreen;
