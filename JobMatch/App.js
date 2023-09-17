import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SwiperComponent from './Swiper';

const Tab = createBottomTabNavigator();

function SwipeScreen() {
  return (
    <View style={styles.swiperContainer}>
      <SwiperComponent />
    </View>
  );
}

function MatchesScreen() {
  return <Text></Text>;
}

function ProfileScreen() {
  return <Text></Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: [{ display: 'flex' }, null],
        }}
      >
        <Tab.Screen name="Swipe" component={SwipeScreen} />
        <Tab.Screen name="Matches" component={MatchesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    marginTop: -40, // Adjust this value as per your requirement
  },
});
