import React from 'react';
import { StyleSheet, View } from 'react-native';
import SwiperComponent from './Swiper';

export default function App() {
  return (
    <View style={styles.container}>
      <SwiperComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF', // Change this color to your desired background color
  },
});
