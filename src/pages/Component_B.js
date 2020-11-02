import React,{useState} from 'react';
import { View, Text, Button,TouchableOpacity,StyleSheet,Image, Dimensions } from 'react-native';
import proudctData from '../car_data.json'
import { useSelector } from 'react-redux';

const Component_B = (props) => {
    const ourCounter = useSelector(onur => onur.counter)

    
    
    
    

    // const D = require(`../images/X${xx}_${2}.png`);
    // alert(`../images/X${D}_${3}.png`)
    // const z = '../images/X'+Math.floor(ourCounter)+'_3.png'
    // alert(z)
    // const [BMW, SetBmw] = useState(1);

   
    const D = ourCounter;
    
    


    return (
        <View  style={styles.conteiner}>
            <Text  style={styles.text}>X{D} : {proudctData[`${D}`].price}</Text>
            
            
            <Image
                style={styles.image1}
                source={{uri:proudctData[`${D}`].imgURL}}
            />
            

        </View>
    );
};

export default Component_B;


const styles =StyleSheet.create({
    conteiner: {
        backgroundColor: 'white',
        flex: 1,
        borderColor:'white',
        borderWidth:2,
        borderRadius:10,
       

    },
    text: {
        flex:1,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:28,
        textShadowColor:'red',
        textShadowRadius:50
         

    },
    
    image1: {
        flex:3,
        height:100,
        width:Dimensions.get('window').width*1,
         

    }
})