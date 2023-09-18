import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SwiperComponent from './Swiper';
import DMComponent from './DMs';

const Tab = createBottomTabNavigator();

function SwipeScreen() {
  return (
    <View style={styles.swiperContainer}>
      <SwiperComponent />
    </View>
  );
}

function MatchesScreen() {
  return (
    <View style={styles.matchesContainer}>
      <DMComponent />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Profile/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen name="Swipe" component={SwipeScreen} options={{
             tabBarIcon: () => (
              <Text style={{fontSize: 25}}>🔥</Text>
             ),
           }}/>
         <Tab.Screen name="Matches" component={MatchesScreen} options={{
             tabBarIcon: () => (
                <Text style={{fontSize: 25}}>💬</Text>
             ),
           }}/>
         <Tab.Screen name="Profile" component={ProfileScreen} options={{
             tabBarIcon: () => (
                <Text style={{fontSize: 25}}>👤</Text>
             ),
           }}/>
       </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    marginTop: -40, // Adjust this value as per your requirement
  },
  matchesContainer: {
  },
});

