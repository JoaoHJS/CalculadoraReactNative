import React from 'react';
import {TouchableOpacity,Text, StyleSheet} from 'react-native';

export default function ButtonsOperators(props){
    
    return(
        <TouchableOpacity onPress={()=>{props.handleClickButton(props.title)}} style={styles.operatorButton}> 
            <Text style={styles.buttonText}> {props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    operatorButton:{
        width: 100,
        backgroundColor: '#1153A4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#fff'
    }
})