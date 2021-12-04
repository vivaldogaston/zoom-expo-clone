import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, Dimensions,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import TabsButton from '../components/TabsButton';
import { Foundation, MaterialCommunityIcons, AntDesign, FontAwesome} from '@expo/vector-icons';
import zoom from '../assets/icons8-zoom-100.png';
const windowHeight=Dimensions.get("screen").height;
export default function MeetNChat({navigation}){
    return(
        <View style={styles.container}>
           <StatusBar style="light"/> 
           <SafeAreaView> 
                <View style={{margin:20}}>
                    <Text style={styles.title}>Meet & Chat</Text>
                    <FontAwesome name="pencil-square-o" size={24} color="grey" style={{top:-25,alignSelf:'flex-end'}} />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        underlayColor="#d3500c"
                        onPress={()=>Alert.alert("New Meeting")}
                        style={[styles.button,{backgroundColor:'#ed7c42'}]}
                        icon={<Image source={zoom} style={{height:75,width:75}}/>}
                        textStyle={styles.textStyle}
                        text="New Meeting"
                    />
                    <Button
                        underlayColor="#0f47b2"
                        onPress={()=>Alert.alert("Join")}
                        style={styles.button}
                        textStyle={styles.textStyle}
                        text="Join"
                        icon={<MaterialCommunityIcons name="plus-box" size={34} color="white" />}
                    />
                    <Button
                        underlayColor="#0f47b2"
                        onPress={()=>Alert.alert("Schedule")}
                        style={styles.button}
                        icon={<Foundation name="calendar" size={34} color="white" />}
                        text="Schedule"
                        textStyle={styles.textStyle}
                    />
                    <Button
                        underlayColor="#0f47b2"
                        onPress={()=>Alert.alert("Shared")}
                        icon={<MaterialCommunityIcons name="arrow-up-box" size={34} color="white" />}
                        style={styles.button}
                        textStyle={styles.textStyle} 
                        text="Share Screen"
                    />
                </View>
                <TabsButton
                    underlayColor="#404040"
                    onPress={()=>Alert.alert("Starred")}
                    icon={<AntDesign name='star' size={20} color='white' />}
                    IconStyle={[styles.button,{width:50,height:50,borderRadius:15,backgroundColor:'#383838'}]}
                    textStyle={[styles.textStyle,{margin:10,fontSize:16,color:'white'}]} 
                    text="Starred" 
                />
            </SafeAreaView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#242424',
        height:windowHeight,
    },
    title:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold'
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        borderBottomWidth:1,
        paddingBottom:15
    },
    button:{
        backgroundColor:'#3370e5',
        width:70,
        height:70,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        
    },
    textStyle:{
        color:'#999999',
        alignSelf:'center',
        top:5,
    }
  });