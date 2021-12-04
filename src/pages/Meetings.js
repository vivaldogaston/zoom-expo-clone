import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';

const windowHeight=Dimensions.get("screen").height;
export default function Meetings({navigation}){
    return(
        <View style={{backgroundColor:'#242424',height:windowHeight}}>
            <StatusBar style="light"/>
            <SafeAreaView style={{top:20}}>
                <Text style={[styles.title]}>Meetings</Text>
                <Text style={{color:'white',textAlign:'center',margin:5}}>Personal Meeting ID</Text>
                <Text style={{color:'white',fontWeight:'bold',fontSize:25,textAlign:'center'}}>923 879 2389</Text>
                <View 
                    style={styles.buttonView}
                > 
                    <Button
                        underlayColor="#191919"
                        onPress={()=>Alert.alert("Started")}
                        style={[styles.button,{backgroundColor:'#383838'}]}
                        icon={<Text style={{color:'white'}}>Start</Text>}
                        textStyle={styles.textStyle}
                        
                    />
                    <Button
                        underlayColor="#191919"
                        onPress={()=>Alert.alert("Invitation was sent")}
                        style={[styles.button,{backgroundColor:'#383838'}]}
                        icon={<Text style={{color:'white'}}>Send Invitation</Text>}
                        textStyle={styles.textStyle}
                        
                    />
                    <Button
                        underlayColor="#191919"
                        onPress={()=>Alert.alert("Edited")}
                        style={[styles.button,{backgroundColor:'#383838'}]}
                        icon={<Text style={{color:'white'}}>Edit</Text>}
                        textStyle={styles.textStyle}
                        
                    />
                </View>
                <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',height:300}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>No Upcoming Meetings</Text>
                    <Text style={{color:'white'}}>The schedule meetings will be here</Text>
                </View>
            </SafeAreaView>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#242424',
      height:windowHeight,
    },
    title:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
       
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        borderBottomWidth:1,
        paddingBottom:15,
        marginVertical:15
    },
    button:{
        backgroundColor:'#3370e5',
        width:'auto',
        height:'auto',
        borderRadius:10,
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:10,
        justifyContent:'center',
        
    },
    textStyle:{
        color:'#999999',
        alignSelf:'center',
        top:5,
    }
  });