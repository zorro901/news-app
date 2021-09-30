import React from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import ListItems from '../components/ListItems'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})


export const ClipScreen = ({ navigation }) => {
  const user = useSelector(state => state.user)
  const { clips } = user
  
  return (
    <SafeAreaView>
      <FlatList data={clips} renderItem={({ item }) => (
        <ListItems
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
          onPress={() => navigation.navigate("Article", { article: item })}
        />
      )}
                keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}