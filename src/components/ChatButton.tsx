import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import SendIcon from '../../assets/icons/paper-plane.png';


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

const styles = StyleSheet.create({
    neumorphicContainer: {
        backgroundColor: '#2E2E2E',
        borderRadius: 25,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // For Android
        marginBottom: 8,
    },
    iconImage: {
        width: '70%', // Adjust the percentage or use a specific pixel value
        height: '70%', // Adjust the percentage or use a specific pixel value
        tintColor: 'white', // Adjust the tint color as needed
    },
});

export default ChatButton;

