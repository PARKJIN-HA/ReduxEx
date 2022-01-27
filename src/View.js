import React from "react";
import { StyleSheet,View, Text, Button } from "react-native";
import { connect } from 'react-redux';
import {increment,decrement} from './index'

export function Screen (props){
    return(
        <View >
            <Text style={styles.containers}>counter: </Text>
            <Text style={styles.containers}>{props.counter}</Text>
            <Button title="+" onPress={()=>props.increment()}>+</Button>
            <Button title="-" onPress={()=>props.decrement()}>-</Button>
        </View>
         );
     };

const styles=StyleSheet.create({
   containers : {
      textAlign:"center",
  }
}
);
function mapStateToProps(state){
  return {
    counter: state.counter // <-- change property name to counterNum
   };
}

// Actions을 props로 변환
function mapDispatchToProps(dispatch){
   return{ 
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),}
 }

 
 export default connect(mapStateToProps,mapDispatchToProps)(Screen)