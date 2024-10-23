import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';

import Button from '@/components/button';
import React from 'react';
import exampleImage from '@/assets/images/pic.png'

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}></Text>
      <Button image={exampleImage} label="What is Title IX?" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  image: {
    height: 100,
    width: 100,
  }
});