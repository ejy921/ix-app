import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';

type Props = {
    label: string;
  };

  export default function Button({ question,  answer }) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.question}>{question}</Text>
        <Text style={styles.answer}>{answer}</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 350,
        height: 100,
        textAlign: "left",
        color: '#fff',
        marginLeft: 25
    },
    question: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#fff',
        marginBottom: 10,
        marginTop: 20,
    },
    answer: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 30,
    },
  });