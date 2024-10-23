import { StyleSheet, Pressable, Text, View, ImageBackground } from 'react-native';
import React from 'react';

type Props = {
    label: string;
  };

  export default function Button({ label,  image }) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={({pressed}) => [pressed ? { opacity: 0.7 } : {}, styles.button]} 
                   onPress={() => alert('You pressed a button.')}>
          <ImageBackground style={styles.backgroundPic} source={image}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </ImageBackground>
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
      //backgroundColor: 'blue',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
      fontWeight: "bold",
      textShadowRadius: 5,
      textShadowColor: "black",
      position: "absolute",
      alignItems: 'center',
    },
    backgroundPic: {
      opacity: 0.8,
      borderRadius: 20,
      width: '100%',
      height: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });