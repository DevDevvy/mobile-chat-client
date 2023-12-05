import React from 'react';
import { View, Text } from 'react-native';

interface ChatDisplayProps {
    messages?: string[];
}
const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages = [] }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#121212',
                padding: 10,
                justifyContent: 'flex-end',
            }}
        >
            {messages.map((message, index) => (
                <View
                    key={index}
                    style={{
                        backgroundColor: '#1E1E1E',
                        borderRadius: 8,
                        padding: 8,
                        marginBottom: 8,
                    }}
                >
                    <Text style={{ color: 'white' }}>{message}</Text>
                </View>
            ))}
        </View>
    );
};

export default ChatDisplay;
