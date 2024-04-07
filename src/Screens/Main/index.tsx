import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen/inde';
const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: true}}/>



        </Drawer.Navigator>
    )
}

export default Main;