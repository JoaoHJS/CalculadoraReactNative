import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity , Text, View } from 'react-native';


export default function App() {
  const operators = ['+', '-', '*', '/', '%', '^', '(', ')']
  const buttons = [[7, 8, 9, 'AC'], [4,5,6, 'DEL'], [1,2,3, '='], ['', 0, '.', '=']];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.result}>

      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.operatorsContainer}> 
          {operators.map((operator) => { return <TouchableOpacity key={operator} style={styles.operators}> <Text style={styles.buttonsText}> {operator} </Text></TouchableOpacity>})}
        </View>
        <View style={styles.buttonsList}> 
        
        </View>
        <View style={styles.buttonsList}> 
        
        </View>
        <View style={styles.buttonsList}> 
        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result:{
    flex: 3,
    width: '100%',
    backgroundColor: '#05254D'
  },
  buttonsContainer:{
    flex: 5,
    width: "100%",
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#011936'
  },
  operatorsContainer:{
    flex: 1,
    height: 100,
    width: '100%',
    backgroundColor: "#1153A4"
  },
  buttonsList: {
    flex: 1,
    height: 100,
    width: '100%',
    backgroundColor: "#011936"
  },
  operators:{
    width: '25%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    'justifyContent': 'center',
    backgroundColor:'red'

  },
  buttonsText:{
    color: '#ffffff'
  }
});
