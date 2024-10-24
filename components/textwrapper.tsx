import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';

type Props = {
    text: string;
  };

  export default function TextWrapper({ text }) {
    return (
      <SafeAreaView>
        <Text style={styles.text}>{text}</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "left",
        color: '#fff',
        backgroundColor: '#ffddd2',
    },
    text: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 5,
        marginHorizontal: 5,
    },
  });