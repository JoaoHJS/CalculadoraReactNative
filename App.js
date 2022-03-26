import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import ButtonNumber from './src/components/buttonNumbers/index';
import ButtonsOperators from './src/components/buttonOperators/index';
import ButtonResult from './src/components/buttonResult/index';


export default function App() {
  const operators = ['+', '-', '*', '/', '%', '^', '(', ')']
  const buttons = [['7', '8', '9', 'AC'], ['4','5','6', 'DEL'], [1,2,3, '='], ['', 0, '.', '=']];

  const [currentNumber, setCurrentNumber] = useState("");
  const [calculation, setCalculation] = useState([]);

  function setNumber(buttonPressed){
  
    operators.map((operator)=>{
        if(operator == buttonPressed){
          
          setCalculation([...calculation, currentNumber, buttonPressed]);
          setCurrentNumber("");
          return
        }
    })

    setCurrentNumber(currentNumber + buttonPressed);
    console.log(calculation)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.result}>
        <Text> {currentNumber} </Text>
      </View>
      <View style={styles.buttonsContainer}>
          <View style={styles.operatorsContainer}>
            <ScrollView style={styles.scrollOperators} showsHorizontalScrollIndicator={false} horizontal={true}> 
              
            {operators.map((button)=>{
              return(<ButtonsOperators setNumber={setNumber} key={button} title={button} />)
            })}
            
            </ScrollView>
          </View>
          <View style={styles.buttonsList}>
            {buttons[0].map((button)=>{
              return(<ButtonNumber key={button}  setNumber={setNumber} title={button} />)
            })}

          </View>
          <View style={styles.buttonsList}>
            {buttons[1].map((button)=>{
              return(<ButtonNumber key={button}  setNumber={setNumber} title={button} />)
            })}

          </View>
          <View style={styles.buttonsList}>
            {buttons[2].map((button)=>{

              return(<ButtonNumber key={button} setNumber={setNumber}  title={button} />)
            })}
            
          </View>
          <View style={styles.buttonsList}>
            {buttons[3].map((button)=>{
              return(<ButtonNumber key={button} setNumber={setNumber} title={button} />)
            })}
            <ButtonResult title={'='} />
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
    flexDirection: 'row',
    width: '100%',
    backgroundColor: "#1153A4"
  },
  scrollOperators:{
    flex: 1,
    backgroundColor: "#1153A4"
  },
  buttonsList: {
    flex: 1,  
    flexDirection: 'row',
    width: '100%',
    backgroundColor: "#011936"
  },
  buttons:{
    width: 100, 
    height: 100,
    backgroundColor: 'red'
  }
});
