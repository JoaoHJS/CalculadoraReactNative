import React from 'react';
import {TouchableOpacity , Text, StyleSheet} from 'react-native';

export default function ButtonResult(props){

    return(
        <TouchableOpacity  style={styles.buttonResult} >
            <Text style={styles.textButton}> {props.title} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonResult:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5BC3EB',
        width: '25%',
        height: '200%',
        zIndex: 100,
        elevation: 100,
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    textButton: {
        color: '#fff',
        fontSize: 30
    }

});