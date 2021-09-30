import React from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'
import { useDispatch } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export const ArticleScreen = ({ route }) => {
  const { article } = route.params
  
  const dispatch = useDispatch()
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {
        dispatch(addClip({ clip: article }))
      }}>
        <Text style={{ margin: 10 }}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        dispatch(deleteClip({ clip: article }))
      }}>
        <Text style={{ margin: 10 }}>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }}/>
    </SafeAreaView>
  )
}
