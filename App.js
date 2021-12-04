import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MeetNChat from './src/pages/MeetNChat';
import Meetings from './src/pages/Meetings';
import Contacts from  './src/pages/Contacts';
import Settings from './src/pages/Settings';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
const bottomMenu= createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <bottomMenu.Navigator initialRouteName="Meet & Chat" 
        screenOptions={({ route }) => ({                
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch(route.name){
                  case 'Meet & Chat':
                      iconName=focused? 'chatbox':'chatbox-outline';
                      return <Ionicons name={iconName} size={size} color={color} />;
                      break;
                  case 'Meetings':
                      iconName=focused? 'clock':'clock-outline';
                      return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                      break;
                  case 'Settings':
                      iconName=focused? 'settings-sharp':'settings-outline';
                      return <Ionicons name={iconName} size={24} color={color} />;
                      break;
                  case 'Contacts':
                      iconName=focused? 'person':'person-outline';
                      return <Ionicons name={iconName} size={24} color={color} />;
                      
                      break;
              }
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle:{backgroundColor:'black',borderTopColor:'black'},
        })}
      > 
        <bottomMenu.Screen name="Meet & Chat" component={MeetNChat} options={{headerShown:false}}/>  
        <bottomMenu.Screen name="Meetings" component={Meetings} options={{headerShown:false}}/>  
        <bottomMenu.Screen name="Contacts" component={Contacts} options={{headerShown:false}}/>  
        <bottomMenu.Screen name="Settings" component={Settings} options={{headerShown:false}}/>  
      </bottomMenu.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
