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

    },
    question: {

    },
    answer: {

    },
  });