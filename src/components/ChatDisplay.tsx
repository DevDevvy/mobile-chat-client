import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ChatDisplay.styles';
interface ChatDisplayProps {
    messages?: string[];
}
const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages = [] }) => {
    return (
        <View style={styles.chatContainer}>
            {messages.map((message, index) => (
                <View
                    key={index}
                    style={styles.messagesContainer}
                >
                    <Text style={styles.messageText}>{message}</Text>
                </View>
            ))}
        </View>
    );
};



export default ChatDisplay;
