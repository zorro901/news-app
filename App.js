import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItems from './components/ListItems'
import dammyArticles from "./dammies/articles.json"

export default function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dammyArticles)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
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
