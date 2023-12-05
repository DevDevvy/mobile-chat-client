"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = require("@react-navigation/native");
const stack_1 = require("@react-navigation/stack");
const ChatScreen_1 = __importDefault(require("../screens/ChatScreen"));
const Stack = (0, stack_1.createStackNavigator)();
;
const AppNavigator = () => {
    const screenOptions = {
        headerShown: false,
    };
    return (<native_1.NavigationContainer>
        <Stack.Navigator initialRouteName="Chat" screenOptions={screenOptions}>
          <Stack.Screen name="Chat" component={ChatScreen_1.default}/>
        </Stack.Navigator>
      </native_1.NavigationContainer>);
};
exports.default = AppNavigator;
