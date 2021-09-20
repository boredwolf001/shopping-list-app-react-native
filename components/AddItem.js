import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('')

  const onChange = (textValue) => {
    setText(textValue)
  }

  return (
    <View>
      <TextInput
        placeholder="Add item.."
        style={styles.input}
        value={text}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text)
          setText('')
        }}
      >
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: 'darkslateblue',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default AddItem
