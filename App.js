import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native'
import { uuid } from 'uuidv4'

import ListItem from './components/ListItem'
import Header from './components/Header'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Cheese' },
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
        return [{ id: uuid(), text }, ...prevItems]
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
