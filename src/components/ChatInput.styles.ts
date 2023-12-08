import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputContainer : {
    flex: .8, // Set flex to 1 to allow the TextInput to take available space
    backgroundColor: '#1E1E1E',
    padding: 10,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    },
    textInput: {
        { flex: 1, color: 'white' },
    },
});