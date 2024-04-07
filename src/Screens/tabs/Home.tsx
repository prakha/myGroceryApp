import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../Images/menu.png')}
        rightIcon={require('../../Images/cart.png')}
        title={'Grocery App'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  )
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})