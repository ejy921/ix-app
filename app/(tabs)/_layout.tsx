import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen name="index" options={{ 
        title: 'Home', 
        tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} /> ) }} />
      <Tabs.Screen name="stories" options={{ 
        title: 'Interative Stories',
        tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'book' : 'book-outline'} color={color} size={24} /> ) }} />
      <Tabs.Screen name="chat" options={{ 
        title: 'Chat', 
        tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'} color={color} size={24} /> ) }} />
       
    </Tabs>
  );
}

/* for navbar modifications: https://docs.expo.dev/tutorial/add-navigation/ */