import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default function SearchBar({term,onTermChange, onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <EvilIcons style={styles.iconStyle} name="search" size={35} color="black" />
        <TextInput style={styles.inputStyle} placeholder="Search" autoCorrect={false} autoCapitalize='none' value={term} onChangeText={onTermChange} onEndEditing={onTermSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle: {
       backgroundColor: 'lightgray',
       flexDirection: 'row',
         height: 50,
         margin:15,
         alignItems: 'center',
         borderRadius: 20
    },
    iconStyle: {
        marginHorizontal: 10,
        },
    inputStyle: {
        flex: 1,
        fontSize: 20,
       marginLeft:-13,
       paddingBottom: 5,
    },
})