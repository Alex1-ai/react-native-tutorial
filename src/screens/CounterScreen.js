import React, {useReducer} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const VALUE = 1;

const reducer = (state, action)=>{
    switch(action.type){
        case 'Increment':
            return { ...state, counter: state.counter + action.payload};
        case 'Decrement':
            return state.counter === 0?
            state:
            {...state, counter: state.counter - action.payload};
        default : 
            return state;
    }
}


const CounterScreen = ()=>{
    const [state, dispatch ] = useReducer(reducer, {counter: 0});
    return (
        <View>
            <Button 
            onPress={()=>dispatch({type:'Increment' , payload:VALUE})}
            title="Increase" />
            <Button
             onPress={()=>dispatch({type:'Decrement', payload:VALUE})}
             title="Decrease" />
            <Text>Current  Count: {state.counter}</Text>

        </View>

    );
}

const styles = StyleSheet.create({})

export default CounterScreen;