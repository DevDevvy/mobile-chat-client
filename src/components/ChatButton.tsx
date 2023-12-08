import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import SendIcon from '../../assets/icons/paper-plane.png';
import {styles} from './ChatButton.styles';

interface ChatButtonProps {
    sendMessage: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ sendMessage }) => {
    return (
        <TouchableOpacity onPress={sendMessage}>
            <View style={styles.neumorphicContainer}>
                <Image source={SendIcon} style={styles.iconImage} resizeMode="contain" />
            </View>
        </TouchableOpacity>
    );
};

export default ChatButton;

