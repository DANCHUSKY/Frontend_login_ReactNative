// logincss.ts
import { StyleSheet } from 'react-native';

export const logincss = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        color: 'white',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        padding: 10,
        color: 'white',
    },
    questionText: {
        color: 'white',
        marginBottom: 10,
    },
});
