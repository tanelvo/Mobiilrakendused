import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Buttoner from './components/Buttoner';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Buttoner/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adecf4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
