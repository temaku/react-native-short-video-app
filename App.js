

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer } from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "./components/HomeScreen"
import SearchScreen from "./components/SearchScreen"
import Activity from "./components/ActivitityScreen"
import Add from "./components/AddScreen"
import Profile from './components/ProfileScreen'





const App = () => {

 const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          }else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          }
          else if (route.name === 'Add') {
            iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
          }
          else if (route.name === 'Activity') {
            iconName = focused ? 'heart-circle-sharp' : 'heart-circle-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
      }})}
      >
      
        <Tab.Screen name="Home" component={HomeScreen}/>
        <TaScreen name="Search" component={SearchScreen}/>
        <TaScreen name="Add" component={Add}/>
        <TaScreen name="Activity" component={Activity}/>
        <TaScreen name="Profile" component={Profile}/>


      </Tab.Navigator>
    </NavigationContainer>
    
  );
};



export default App;
