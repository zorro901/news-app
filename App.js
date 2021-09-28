import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItems from './components/ListItems'
import articles from "./dammies/articles.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={articles} renderItem={({ item }) => (
        <ListItems
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
        />
      )}
                keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
