"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ChatInput = ({ onChangeText, value }) => {
    return (<react_native_1.View style={{
            flex: .8,
            backgroundColor: '#1E1E1E',
            padding: 10,
            marginBottom: 4,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <react_native_1.TextInput style={{ flex: 1, color: 'white' }} placeholder="Type your message..." placeholderTextColor="#9E9E9E" onChangeText={onChangeText} value={value}/>
        </react_native_1.View>);
};
exports.default = ChatInput;
