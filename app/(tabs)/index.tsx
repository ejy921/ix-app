import { Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import Button from '@/components/button';
import React from 'react';
import exampleImage from '@/assets/images/pic.png'

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={[{flex: 1, flexDirection: 'column'}]}>
        <Text style={styles.titleText}>Resources</Text>
        <SafeAreaView style={styles.buttonGroupContainer}>
          <ScrollView style={styles.buttons} horizontal={true}>
            <Button image={exampleImage} label="What is Title IX?" />
            <Button image={exampleImage} label="Title IX Office" />
            <Button image={exampleImage} label="What's covered" />
          </ScrollView> 
        </SafeAreaView>  
        <Text style={styles.titleText}>Stories</Text>
        <SafeAreaView style={styles.buttonGroupContainer}>
          <ScrollView style={styles.buttons} horizontal={true}>
            <Button image={exampleImage} label="Sexual Assault" />
            <Button image={exampleImage} label="Stalking" />
            <Button image={exampleImage} label="Sexual Exploitation" />
            <Button image={exampleImage} label="Retaliation" />
            <Button image={exampleImage} label="Retaliation" />
            <Button image={exampleImage} label="Sexual Coercion" />
            <Button image={exampleImage} label="Domestic/Dating Violence" />
            <Button image={exampleImage} label="Quid Pro Quo Sexual Harassment" />
            </ScrollView> 
          </SafeAreaView>  
        <Text style={styles.titleText}>FAQ</Text>
        <Text style={styles.faqQuestion}>question</Text>
        <Text style={styles.faqText}>question</Text>
        </ScrollView>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    padding: 20,
    fontSize: 24,
    color: '#fff',
  },
  faqQuestion: {
    fontSize: 14,
    color: '#fff',
  },
  faqText: {
    fontSize: 10,
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    fontFamily: 'Times'
    // alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  image: {
    height: 100,
    width: 100,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20
  },
  buttonGroupContainer: {
    alignItems: 'center',
    flex: 1
  }
});