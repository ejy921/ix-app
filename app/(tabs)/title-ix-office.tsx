import { Text, View, StyleSheet } from 'react-native';
import FAQ from '@/components/faq.tsx';

export default function TitleIXOffice() {
  return (
    <View style={styles.container}>
        <HighlightedInfo></HighlightedInfo>
        <Text style={styles.text}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});