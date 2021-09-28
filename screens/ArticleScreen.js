import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

export const ArticleScreen = () => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <Text>This is Article Screen</Text>
    </SafeAreaView>
  )
}
