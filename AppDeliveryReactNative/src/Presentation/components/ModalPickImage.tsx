
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { RoundedButton } from './RoundedButton';

interface Props {
    openGallery: () => void,
    openCamera: () => void,
    modalUseSate: boolean,
   setModalUseSate: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalPickImage = ({ openGallery, openCamera, setModalUseSate, modalUseSate }: Props) => {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalUseSate}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalUseSate(!modalUseSate);
                    }}>
                    <View style={styles.centeredView}>
                        
                        <View style={styles.modalView}>
                             <Text>Selecciona una opcion</Text>
                            <View style={styles.buttonContainer}>
                                <RoundedButton
                                onPress={() => {
                                    openGallery()
                                    setModalUseSate(false)
                                }
                                }
                                text='Galeria'
                            >

                            </RoundedButton>
                           
                            </View>
                            <View style={styles.buttonContainer}>
                                 <RoundedButton
                                onPress={() => {{openCamera()
                                      setModalUseSate(false)
                                }}}
                                text='Camara'
                            >

                            </RoundedButton>
                            </View>
                        </View>
                    </View>
                </Modal>

            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: 50,
        paddingLeft: 25,
        paddingRight: 25,
        width: 250,
        height: 250,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    }, buttonContainer: {
        width: '100%',
        marginTop: 8
        
    }
});

