import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SwiperComponent from './Swiper';
//    npm install @react-navigation/native @react-navigation/bottom-tabs react-native-paper

const Tab = createBottomTabNavigator();

function SwipeScreen() {
  return (
    <View style={styles.container}>
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
      <Tab.Navigator>
         <Tab.Screen name="Swipe" component={SwipeScreen} styles={{}}/>
         <Tab.Screen name="Matches" component={MatchesScreen} />
         <Tab.Screen name="Profile" component={ProfileScreen} />
       </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF', // Change this color to your desired background color
  },
});
