"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ChatInput_1 = __importDefault(require("../components/ChatInput"));
const ChatDisplay_1 = __importDefault(require("../components/ChatDisplay"));
const ChatButton_1 = __importDefault(require("../components/ChatButton"));
const react_native_2 = require("react-native");
const ChatScreen = () => {
    const [message, setMessage] = (0, react_1.useState)('');
    const [messages, setMessages] = (0, react_1.useState)([]);
    const handleSend = () => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage('');
        }
    };
    return (<react_native_1.SafeAreaView style={styles.container}>
            <ChatDisplay_1.default messages={messages}/>
            <react_native_1.KeyboardAvoidingView behavior={react_native_2.Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inputContainer}>
                <ChatInput_1.default onChangeText={setMessage} value={message}/>
                <ChatButton_1.default sendMessage={handleSend}/>
            </react_native_1.KeyboardAvoidingView>
        </react_native_1.SafeAreaView>);
};
const styles = react_native_1.StyleSheet.create({
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
exports.default = ChatScreen;
