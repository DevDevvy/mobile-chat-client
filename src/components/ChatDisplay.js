"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ChatDisplay = ({ messages = [] }) => {
    return (<react_native_1.View style={{
            flex: 1,
            backgroundColor: '#121212',
            padding: 10,
            justifyContent: 'flex-end',
        }}>
            {messages.map((message, index) => (<react_native_1.View key={index} style={{
                backgroundColor: '#1E1E1E',
                borderRadius: 8,
                padding: 8,
                marginBottom: 8,
            }}>
                    <react_native_1.Text style={{ color: 'white' }}>{message}</react_native_1.Text>
                </react_native_1.View>))}
        </react_native_1.View>);
};
exports.default = ChatDisplay;
