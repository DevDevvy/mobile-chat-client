import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    chatContainer {
        flex: 1,
                backgroundColor: '#121212',
                padding: 10,
                justifyContent: 'flex-end',
    },
    messagesContainer: {
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
    },
    messageText: {
        color: 'white',
    },
});