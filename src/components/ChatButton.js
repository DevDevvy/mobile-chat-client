"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const paper_plane_png_1 = __importDefault(require("../../assets/icons/paper-plane.png"));
const ChatButton = ({ sendMessage }) => {
    return (<react_native_1.TouchableOpacity onPress={sendMessage}>
            <react_native_1.View style={styles.neumorphicContainer}>
                <react_native_1.Image source={paper_plane_png_1.default} style={styles.iconImage} resizeMode="contain"/>
            </react_native_1.View>
        </react_native_1.TouchableOpacity>);
};
const styles = react_native_1.StyleSheet.create({
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
        elevation: 5,
        marginBottom: 8,
    },
    iconImage: {
        width: '70%',
        height: '70%',
        tintColor: 'white', // Adjust the tint color as needed
    },
});
exports.default = ChatButton;
