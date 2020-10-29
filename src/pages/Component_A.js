import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';

const Component_A = (props) => {
    const myCounter = useSelector(ezran => ezran.counter);
    // const myCounter = useSelector(globalState => globalState.counter);
    const dispatch = useDispatch();

    return (
        <View style={{ backgroundColor: '#eceff1', flex: 1 }}>
            <Text>Component_A</Text>
            <Text style={{ fontSize: 50 }}>Counter: {myCounter}</Text>
            {/* <Button title="Arttır" onPress={() => dispatch({ type: "INCREASE_COUNTER" })} />
            <Button title="Azalt" onPress={() => dispatch({ type: "DECREASE_COUNTER" })} /> */}
            <Button
                title="Arttır"
                onPress={() => dispatch({ type: "INCREASE_COUNTER" })}
            />
            <Button
                title="Azalt"
                onPress={() => dispatch({type: "DECRESE_COUNTER"})}
            />
        </View>
    );
};
export default Component_A;