import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
import React from 'react';

type Props = {
    label: string;
  };

  export default function Button({ label,  image }) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={({pressed}) => [pressed ? { opacity: 0.8 } : {}, styles.button]} 
                   onPress={() => alert('You pressed a button.')}>
          <Image style={styles.backgroundPic} source={image}></Image>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    buttonContainer: {
      width: 200,
      height: 70,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 20,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: 'blue',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
    backgroundPic: {
      opacity: 1,
    },
  });