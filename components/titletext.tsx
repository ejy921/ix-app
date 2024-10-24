import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';

type Props = {
    label: string;
  };

  export default function Title({ title }) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    title: {
        // padding: 20,
        fontSize: 24,
        color: '#006d77',
        fontWeight: 'bold',

        borderRadius: 20,
      },
      container: {
        width: 200,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#83c5be',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });