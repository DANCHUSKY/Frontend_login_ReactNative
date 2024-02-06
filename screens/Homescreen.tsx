// HomeScreen.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen: React.FC = () => {
    const [name, setName] = useState('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [nameList, setNameList] = useState<string[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editedName, setEditedName] = useState('');

    const handleAddName = () => {
        if (name.trim() !== '') {
            if (editingIndex !== null) {
                const updatedList = [...nameList];
                updatedList[editingIndex] = name;
                setNameList(updatedList);
                setEditingIndex(null);
            } else {
                setNameList([...nameList, name]);
            }
            setName('');
        }
    };

    const handleDeleteName = (index: number) => {
        const updatedList = [...nameList];
        updatedList.splice(index, 1);
        setNameList(updatedList);
        setEditingIndex(null);
    };

    const handleEditName = (index: number) => {
        setEditedName(nameList[index]);
        setEditingIndex(index);
        setIsModalVisible(true);
    };

    const handleSaveEdit = () => {
        if (editedName.trim() !== '') {
            const updatedList = [...nameList];
            updatedList[editingIndex!] = editedName;
            setNameList(updatedList);
            setEditingIndex(null);
            setIsModalVisible(false);
        }
    };

    return (
        <LinearGradient colors={['black', 'pink']} style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 24, marginBottom: 20, color: 'white' }}>Home Screen</Text>

            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <TextInput
                    style={{
                        flex: 1,
                        height: 40,
                        borderWidth: 1,
                        borderColor: 'lightblue',
                        borderRadius: 20,
                        marginRight: 10,
                        padding: 10,
                        color: 'white',
                    }}
                    placeholder="Escribe un nombre"
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Button title={editingIndex !== null ? 'Guardar' : 'Agregar'} onPress={handleAddName} />
            </View>

            <FlatList
                data={nameList}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: 'white', borderRadius: 15, marginBottom: 5 }}>
                        <Text>{item}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => handleEditName(index)}>
                                <View style={{ backgroundColor: 'blue', padding: 5, borderRadius: 5, marginRight: 5 }}>
                                    <Text style={{ color: 'white' }}>Editar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteName(index)}>
                                <View style={{ backgroundColor: 'red', padding: 5, borderRadius: 5 }}>
                                    <Text style={{ color: 'white' }}>Eliminar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            <Modal visible={isModalVisible} transparent animationType="slide">
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <Text style={{ fontSize: 20, color: 'white', marginBottom: 10 }}>Editar Nombre</Text>
                    <TextInput
                        style={{ width: '80%', height: 40, backgroundColor: 'white', borderRadius: 5, marginBottom: 10, padding: 10, color: 'black' }}
                        placeholder="Nuevo nombre"
                        onChangeText={(text) => setEditedName(text)}
                        value={editedName}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '80%' }}>
                        <Button title="Guardar" onPress={handleSaveEdit} />
                        <Button title="Cancelar" onPress={() => setIsModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </LinearGradient>
    );
};

export default HomeScreen;
