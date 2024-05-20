
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/HomeScreen';
import User from '../Screens/UserScreen';
import  Settings  from '../Screens/SettingsScreen';

type drawerType={
    Home:undefined,
    User:undefined,
    Settings:undefined,
}

const Drawer = createDrawerNavigator<drawerType>();

const DrawerScreens = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name = "Home" component = {Home}/>
        <Drawer.Screen name = "User" component = {User}/>
        <Drawer.Screen name = "Settings" component = {Settings}/>
    </Drawer.Navigator>
  )
}

export default DrawerScreens
