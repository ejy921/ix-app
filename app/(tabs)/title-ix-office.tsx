import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import FAQ from '@/components/faq.tsx';
import TextWrapper from '@/components/textwrapper.tsx'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

export default function TitleIXOffice() {
  return (
    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.textContainer}>
                <Text>Title IX Office: Mears Cottage</Text>
                <Text>Title IX Coordinator: Bailey Asberry</Text>
                <Text>641-269-4999</Text>
                <Text>titleix@grinnell.edu</Text>
            </SafeAreaView>
            <FAQ 
                question='Did you know?' 
                answer={TitleIXServices()}
                color='#e7cebe'/>
        </SafeAreaView>
    </ScrollView>
  );
}

const Service = [
    {
      id: 'Contacting professors/supervisors',
      title: '- Contacting professors/supervisors',
    },
    {
      id: 'Mutual no contact orders/civil protection orders',
      title: '- Mutual no contact orders/civil protection orders',
    },
    {
      id: 'Connection to medical assistance/STI testing',
      title: '- Connection to medical assistance/STI testing',
    },
    {
        id: 'Connection to counseling',
        title: '- Connection to counseling',
    },
    {
        id: 'Connection to disability and/or academic advising resources',
        title: '- Connection to disability and/or academic advising resources',
    },
    {
        id: 'Connection to Campus Safety or law enforcement',
        title: '- Connection to Campus Safety or law enforcement',
    },
    {
        id: 'Class/exam schedule options',
        title: '- Class/exam schedule options',
    },
    {
        id: 'Room assignments',
        title: '- Room assignments',
    },
    {
        id: 'Work assignments/space',
        title: '- Work assignments/space',
    },
    {
        id: 'Leave of absence',
        title: '- Leave of absence',
    },
    {
        id: 'Other remedies as reasonable and available',
        title: '- Other remedies as reasonable and available',
    },
  ];

function TitleIXServices() {
    return (
        <View>
            <Text style={styles.title}>The Title IX Office offers the following:</Text>
            <SafeAreaView>
                <FlatList
                    data={Service}
                    renderItem={({item}) => <TextWrapper text={item.title}/>}
                    keyExtractor={item => item.id}>
                </FlatList>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff9e8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    title: {
        fontWeight: 'bold',
        color: '#000000',
    }
});