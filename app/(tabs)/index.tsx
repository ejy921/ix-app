import { Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { useState } from 'react';

import Button from '@/components/button';
import FAQ from '@/components/faq';
import React from 'react';
import kites from '@/assets/images/kites.png'
import phonecase from '@/assets/images/phonecase.jpg'

export default function Index() {
  return (
    
      <SafeAreaView style={styles.container}>
        <ScrollView style={[{flex: 1, flexDirection: 'column'}]}>
          <Text style={styles.titleText}>Resources</Text>
          <SafeAreaView style={styles.buttonGroupContainer}>
            <ScrollView style={styles.buttons} horizontal={true}>
              <Button image={kites} label="What is Title IX?" />
              <Button image={kites} label="Title IX Office" />
              <Button image={kites} label="What's covered" />
            </ScrollView> 
          </SafeAreaView>  
          <Text style={styles.titleText}>Stories</Text>
          <SafeAreaView style={styles.buttonGroupContainer}>
            <ScrollView style={styles.buttons} horizontal={true}>
              <Button image={phonecase} height={200} label="Sexual Assault" />
              <Button image={kites} height={200} label="Stalking" />
              <Button image={kites} height={200} label="Sexual Exploitation" />
              <Button image={kites} height={200} label="Retaliation" />
              <Button image={kites} height={200} label="Retaliation" />
              <Button image={kites} height={200} label="Sexual Coercion" />
              <Button image={kites} height={200} label="Domestic/Dating Violence" />
              <Button image={kites} height={200} label="Quid Pro Quo Sexual Harassment" />
              </ScrollView> 
            </SafeAreaView>  
          <Text style={[{paddingBottom: 0}, styles.titleText]}>FAQ</Text>
          <FAQ question={"Where is the Title IX office on campus?"} answer={"Unfortunately, I don't know either. Maybe that's why we need this app!"}></FAQ>
          <FAQ question={"Is Title IX office 100% confidential?"} answer={"No. (I don't actually know why but apparently that's the case."}></FAQ>
          </ScrollView>  
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  titleText: {
    margin: 15,
    fontSize: 24,
    color: '#006d77',
    fontWeight: 'bold',
    textShadowColor: '#83c5be',
    textShadowOffset: {width: 2, height: 0},
    textShadowRadius: 2,
  },
  titleTextContainer: {
    backgroundColor: '#83c5be'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff9e8',
    justifyContent: 'center',
    fontFamily: 'Times',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#83c5be',
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