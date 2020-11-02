import React from 'react';
import { View, Text, Button,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import proudctData from '../car_data.json'
// import { useSelector, useDispatch } from 'react-redux';

const Component_A = (props) => {
    const myCounter = useSelector(ezran => ezran.counter);
    // const myCounter = useSelector(globalState => globalState.counter);
    const dispatch = useDispatch();

    return (
        <View style={{ backgroundColor: '#eceff1', flex: 1,flexDirection:'column'}}>
            <Text style={styles.textmodel1}>BMW X-SERIES</Text>
           
            <Text style={styles.textmodel3}>{proudctData[`${myCounter}`].inStock}</Text>
            
            
            <View style={{ backgroundColor: '#eceff1', flex: 2 , flexDirection:'row'}}>

            
                <TouchableOpacity style={styles.model0}  onPress={() => dispatch({type: "DECRESE_COUNTER"})}>
                <Text style={styles.textmodel2}>DOWN</Text>
                   
                </TouchableOpacity>
                
              
                <TouchableOpacity style={styles.model}>
                    <Image
                    style={styles.image}
                    source={ require('../images/X2_2.png') }
                    />                    
                    <Text style={styles.textmodel}>X{myCounter}</Text>

                    <Image
                    style={styles.image2}
                    source={ require('../images/X7_1.png') }
                    />       
                </TouchableOpacity>

                

                <TouchableOpacity style={styles.model0}  onPress={() => dispatch({ type: "INCREASE_COUNTER" })}>
                 <Text style={styles.textmodel2}>UP</Text>
                   
                </TouchableOpacity>
                
            </View>
        </View>
    );
};
export default Component_A;

const styles =StyleSheet.create({
    model: {
        backgroundColor: '#55b',
        flex: 5,
        borderColor:'white',
        borderWidth:2,
        borderRadius:10,
        textAlign:'center',
        textAlignVertical:'center' 

    },
    model0: {
        flex: 1,
        backgroundColor:'#D8E',
        borderRadius:10,
        borderColor:'#55b',
        borderWidth:2
       

    },
    textmodel: {
        flex:1,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:45,
        color:'white',
        fontWeight:'bold'
         

    },
    textmodel1: {
        flex:1,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:30,
        color:'black',
        fontWeight:'bold',
        letterSpacing:2
         

    },
    textmodel2: {
        flex:1,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:18,
        color:'white',
        fontWeight:'bold'
         

    },
    textmodel3: {
        flex:2,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:22,
        color:'rgba(0,0,0,0.5)',
        fontWeight:'bold'
         

    },
    image: {
        height:100,
        width:130,
        position:'absolute',
        alignSelf:'flex-start'
         

    },
    image2: {
        height:100,
        width:120,
        position:'absolute',
        alignSelf:'flex-end',
        
         

    }
})