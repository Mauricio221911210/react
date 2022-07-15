
import React from "react";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import {HomeScreen} from "../screens/HomeScreen"
import { LoginScreen } from "../screens/auth/LoginScreen";
import { RegisterScreen } from "../screens/auth/RegisterScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
export const TabNavigator = ()  =>{
    return (
<Tab.Navigator screenOptions={{
    headerTitleAlign:'center',
    headerTintColor: '#33FFF0',
    headerShown: false,

    
}}>
<Tab.Screen name="HomeScreen" component={HomeScreen} options={{
 title: 'Productos',
 tabBarIcon:()=> { return(<Ionicons name="layers-outline" size={30} color={'#E0025'}/>)}
}} />
<Tab.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{
    title: 'Carrito',
    tabBarIcon:()=> { return(<Ionicons name="game-controller-outline" size={30} color={'#E0025'}/>)}
}} />

</Tab.Navigator>

    );
};