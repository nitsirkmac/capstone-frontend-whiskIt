// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button, 
  FlatList 
} from 'react-native';
import RecipeList from './components/recipeList'
import Nav from './components/nav'
import Recipe from './components/recipe'

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      
      <Text style={styles.welcome} > coming soon! </Text>

      <RecipeList />

      <Recipe />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: '#e8400c',
    fontWeight: 'bold',
  }
});
