import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItems from '../components/ListItems'
import Constants from 'expo-constants'
import axios from 'axios'
import { Loading } from '../components/Loading'

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  
  const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`
  useEffect(() => {
    fetchArticles()
  }, [])
  
  const fetchArticles = async () => {
    setLoading(true)
    try {
      const respose = await axios.get(URL)
      setArticles(respose.data.articles)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={articles} renderItem={({ item }) => (
        <ListItems
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
          onPress={() => navigation.navigate("Article", { article: item })}
        />
      )}
                keyExtractor={(item, index) => index.toString()}
      />
      {/*<StatusBar style="auto"/>*/}
      {loading && <Loading/>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
