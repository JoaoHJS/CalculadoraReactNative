import React from 'react';
import {TouchableOpacity , Text, StyleSheet} from 'react-native';

export default function ButtonNumber(props){

    

    return(
        <TouchableOpacity  onPress={()=>{props.handleClickButton(props.title)}} style={styles.buttonNumber} >
            <Text style={styles.textButton}> {props.title != '=' ? props.title : ''} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonNumber:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#011936',
        
    },
    textButton: {
        color: '#fff',
        fontSize: 30
    }

});