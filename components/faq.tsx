import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';

type Props = {
    label: string;
  };

  export default function FAQ({ question, answer, color = '#fff9e8' }) {
    return (
      <SafeAreaView style={styles.outerContainer}>
        <SafeAreaView style={styles.middleContainer}>
            <SafeAreaView style={[{backgroundColor: color}, styles.container]}>
              <Text style={styles.question}>{question}</Text>
              <Text style={styles.answer}>{answer}</Text>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    outerContainer: {
      flex: 1,
      margin: 5,
      backgroundColor: '#83c5be',
      marginHorizontal: 10,
      marginLeft: 20,
    },
    middleContainer: {
      flex: 1,
      margin: 4,
      backgroundColor: '#fff9e8',
    },
    container: {
        flex: 1,
        textAlign: "left",
        color: '#fff',
        margin: 4,
        backgroundColor: '#ffddd2',
    },
    question: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#006d77',
        marginBottom: 10,
        marginTop: 15,
        marginHorizontal: 20,
    },
    answer: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 15,
        marginHorizontal: 25,
    },
  });