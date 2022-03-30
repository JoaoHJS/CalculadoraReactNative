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
  const [lastCalculation, setCalculation] = useState([]);

  function ResetCalculation(){
    setCurrentNumber("");
    setCalculation([]);

  }

  function DeleteLastNumber(){
    let NewCurrentNumber = currentNumber.substring(0, currentNumber.length - 1);

    setCurrentNumber(NewCurrentNumber);

  }

  async function Calc(){
    try{
      let result = Function('return ' + currentNumber)();
      setCalculation(currentNumber); 
      setCurrentNumber(result);

    }catch{
      setCurrentNumber("error");
      setTimeout(()=>{ setCurrentNumber(""); }, 1000)
    }
     
  }

  const functionsObject = {
    'AC': ResetCalculation,
    'DEL': DeleteLastNumber,
    '=': Calc

  }

  function handleClickButton(buttonPressed){


    try{
      functionsObject[buttonPressed]();
      
      return
    }catch{
      
      operators.map((operator)=>{
        if(operator == buttonPressed){
          setCurrentNumber(currentNumber + buttonPressed);
          return
        }
      setCurrentNumber(currentNumber + buttonPressed);
      
    })

    
    }

    
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.result}>
        <ScrollView contentContainerStyle={styles.resultScroll} showsHorizontalScrollIndicator={false} horizontal={true}> 
          <Text style={styles.lastCalculation}> {lastCalculation} </Text>
          <Text style={styles.resultText}> {currentNumber} </Text>
        </ScrollView>
      </View>
      <View style={styles.buttonsContainer}>
          <View style={styles.operatorsContainer}>
            <ScrollView style={styles.scrollOperators} showsHorizontalScrollIndicator={false} horizontal={true}> 
              
            {operators.map((button)=>{
              return(<ButtonsOperators handleClickButton={handleClickButton} key={button} title={button} />)
            })}
            
            </ScrollView>
          </View>
          <View style={styles.buttonsList}>
            {buttons[0].map((button)=>{
              return(<ButtonNumber key={button}  handleClickButton={handleClickButton} title={button} />)
            })}

          </View>
          <View style={styles.buttonsList}>
            {buttons[1].map((button)=>{
              return(<ButtonNumber key={button}  handleClickButton={handleClickButton} title={button} />)
            })}

          </View>
          <View style={styles.buttonsList}>
            {buttons[2].map((button)=>{

              return(<ButtonNumber key={button} handleClickButton={handleClickButton}  title={button} />)
            })}
            
          </View>
          <View style={styles.buttonsList}>
            {buttons[3].map((button)=>{
              return(<ButtonNumber key={button} handleClickButton={handleClickButton} title={button} />)
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
  resultScroll:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  lastCalculation:{
    color: '#ffffffaa',
    fontSize: 40
  },
  resultText:{
    color: '#ffffff',
    fontSize: 90,
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
