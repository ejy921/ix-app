import { Stack } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons'
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={ ({ route }) => ({ 
        headerShown: true, 
        headerTitle: () => (
          <Text style={styles.headerTitle}>
            {}Hi Jinny
          </Text>
        ),
        headerLeft: () => (<Ionicons 
          name="menu"
          size={30}
          color="#006d77"
          style={{ marginLeft: 10}}
          onPress={() => alert('Menu pressed')} 
          /> ),
        headerRight: () => (<Ionicons
          name="call-outline"
          size={30}
          color="#006d77"
          style={{ marginRight: 10}}
          onPress={() => alert('Menu pressed')}
          /> )
      })} />

      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '006d77', // Customize the title color as needed
  },
});