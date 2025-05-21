import React from 'react'
import { StyleSheet, View, Image, TextInput, KeyboardType } from 'react-native';

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboard: KeyboardType,
    secureTextEntry?: boolean
    property: string,
    onChangeText: (propertie: string, value: any) => void
}

export const CustomTextInput = ({ image, placeholder, value, keyboard, secureTextEntry, property, onChangeText }: Props) => {
    return (
        <View style={styles.formInput}>
            <Image style={styles.formIcon} source={image} />
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboard}
                value={value}
                onChangeText={text => onChangeText(property, text)}
                secureTextEntry={secureTextEntry}
                style={styles.formTextInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 10
    },
})