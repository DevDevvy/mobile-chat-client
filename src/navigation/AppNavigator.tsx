import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

interface AppNavigatorProps {};

const AppNavigator: React.FC<AppNavigatorProps> = () => {
    const screenOptions: StackNavigationOptions = {
      headerShown: false,
    };
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Chat" screenOptions={screenOptions}>
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


export default AppNavigator;
