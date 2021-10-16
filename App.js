import React, { useState } from 'react'
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native'

import ListItem from './components/ListItem'
import Header from './components/Header'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: Math.floor(Math.random() * 100002), text: 'Milk' },
    { id: Math.floor(Math.random() * 100002), text: 'Eggs' },
    { id: Math.floor(Math.random() * 100002), text: 'Bread' },
    { id: Math.floor(Math.random() * 100002), text: 'Cheese' },
  ])

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  const addItem = (text) => {
    if (text == '') {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok' })
    } else {
      setItems((prevItems) => {
        return [{ id: Math.floor(Math.random() * 100002), text }, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => {
          return <ListItem item={item} deleteItem={deleteItem} />
        }}
      />
      <Text style={styles.textBottom}>Developed by maneth @ 2021-09-23</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBottom: {
    flex: 1,
    margin: 'auto',
    fontSize: 17,
  },
})

export default App
