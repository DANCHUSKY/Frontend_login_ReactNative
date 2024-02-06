// homescreencss.ts
import { StyleSheet } from 'react-native';

export const homescreencss = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'white',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'lightblue',
        borderRadius: 20,
        marginRight: 10,
        padding: 10,
        color: 'white',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    editButton: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    // Estilos para el modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalTitle: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
    },
    modalInput: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        color: 'black', // Cambia el color del texto a negro
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
});
