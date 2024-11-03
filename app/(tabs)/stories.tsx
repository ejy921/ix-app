import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useState } from 'react';
import React from 'react';

import phonecase from '@/assets/images/phonecase.jpg'
import door from '@/assets/images/door.jpg'
import bbq from '@/assets/images/bbq.jpg'

const storyslides = [phonecase, door, bbq];

// export default function Stories() {
//   const [slide, setStorySlide] = useState(0);

//   return (
//     <View style={styles.storyContainer}>
//         <View style={styles.sceneContainer}>
//           <View style={styles.buttonsContainer}>
//           <Image style={styles.image} source={storyslides[slide]}></Image>
//             <Pressable onPress={()=>{if(slide > 0){setStorySlide(slide => slide - 1)}}}>
//               <Text>Previous</Text></Pressable>
//             <Pressable onPress={()=>{if(slide < storyslides.length - 1){setStorySlide(slide => slide + 1)}}}>
//               <Text>Next</Text></Pressable>
//           </View>
//         </View>
//     </View>
//   );
// }

export default function Stories() {
  const [slide, setStorySlide] = useState(0);

  return (
    <View style={styles.storyContainer}>
        <View style={styles.sceneContainer}>
          <Image style={styles.image} source={storyslides[slide]}></Image>
          <View style={styles.buttonsContainer}>
            <Pressable onPress={()=>{if(slide > 0){setStorySlide(slide => slide - 1)}}}>
              <Text style={[{marginRight: 200}, styles.text]}>Previous</Text></Pressable>
            <Pressable onPress={()=>{if(slide < storyslides.length - 1){setStorySlide(slide => slide + 1)}}}>
              <Text style={styles.text}>Next</Text></Pressable>
          </View>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  storyContainer: {
    flex: 1,
    backgroundColor: '#83c5be',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sceneContainer: {
    flex: 0,
    width: '92%',
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff9e8',
  },
  buttonsContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text: {
    color: 'black',
    marginHorizontal: 10,
    marginTop: 10,
  },
  image: {
    width: '95%',
    height: '90%',
  }
});
