import { StyleSheet, Text, View } from 'react-native';

export default function Today() {
    return (
        <View style={styles.today}>
          <Text>Today page</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  today: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#ff1'
  }
});