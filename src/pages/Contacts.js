import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Dimensions,TextInput} from 'react-native';
import TabsButton from '../components/TabsButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialIcons,Ionicons } from '@expo/vector-icons';
const windowHeight=Dimensions.get("screen").height;

export default function ContactsPage(){
    const [contact,setContact]= useState("");
    const [active,setActive]=useState(true);
    const [screen,setScreen]=useState(Contacts);
    const [arrow,setArrow]=useState([false,false]);
    const Contacts=()=>{
        return(
            <View>
                <View style={styles.textInput}>
                    <Feather name="search" size={24} color="#999999" />
                    <TextInput 
                        placeholder="Search contacts"
                        textContentType="name"
                        value={contact}
                        onChangeText={setContact}
                        style={styles.input}
                        placeholderTextColor="#999999"
                    />
                </View>
                <Text style={styles.title}>My Contacts</Text>
                <View 
                    style={styles.submenu} 
                    onTouchStart={()=>{
                        arrow[0]=!arrow[0]; 
                        setArrow([...arrow]);
                    }}
                >
                    <MaterialIcons name={arrow[0]?"keyboard-arrow-down":"keyboard-arrow-up"} size={24} color="white" />
                    <Text style={styles.text}>Starred</Text>
                    <Text style={[styles.text,styles.number,{left:250}]}>0</Text>
                </View>
                <View 
                    style={styles.submenu} 
                    onTouchStart={()=>{
                        arrow[1]=!arrow[1]; 
                        setArrow([...arrow]);
                    }}
                >
                    <MaterialIcons name={arrow[1]?"keyboard-arrow-down":"keyboard-arrow-up"} size={24} color="white" />
                    <Text style={styles.text}>External Contacts</Text>
                    <Text style={[styles.text,styles.number,{left:180}]}>0</Text>
                </View>
                {
                    arrow[1] &&
                    <TabsButton
                        underlayColor="#383838"
                        onPress={()=>Alert.alert("Connect")}
                        icon={<Ionicons name='person' size={24} color='white' />}
                        IconStyle={[styles.button,{width:40,height:40,borderRadius:15,backgroundColor:'#3370e5'}]}
                        textStyle={[styles.textStyle,{margin:10,fontSize:16,color:'white'}]} 
                        text="Connect Phone Contacts"
                    />
                }
            </View>
        )
    }
    const Channels=()=>{
        return(
            <View 
                style={{
                    marginTop:'50%',
                    justifyContent:'center',
                    alignContent:'center',
                    alignSelf:'center'
                }}
            >
                <Text style={[styles.text,{color:'#999999',fontWeight:'bold'}]}>No channels to show</Text>
            </View>
        )
    }

    return(
        <View style={{backgroundColor:'#242424',height:windowHeight}}>
           <SafeAreaView>
                <View style={styles.tabs}>
                    <Text 
                        style={[styles.text, styles.tabsText,{backgroundColor: active?'#6d6d72':'transparent'}]}
                        onPress={()=>{
                            setActive(true);
                            setScreen(Contacts);
                        }}
                    >
                        Contacts
                    </Text>
                    <Text  
                        style={[styles.text, styles.tabsText,{backgroundColor:active?'transparent':'#6d6d72'}]}
                        onPress={()=>{
                            setActive(false);
                            setScreen(Channels);
                        }}
                    >
                        Channels
                    </Text>
                    <Feather name="plus-square" onPress={()=>Alert.alert("Add")} size={24} color="white" style={{left:45}} />
                </View>
                {
                    active?<Contacts/>:<Channels/>
                }
            </SafeAreaView>
        </View>
    )
}




const styles=StyleSheet.create({
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:30,
        margin:20,
    },
    textInput:{
        color:'white',
        width:'90%',
        height:'auto',
        borderRadius:8,
        backgroundColor:"#383838",
        flexDirection:'row',
        alignSelf:'center',
        padding:5,
    },
    input:{
        color:'white',
        paddingLeft:10,
        width:'100%'
    },
    tabs:{
        flexDirection:'row',
        backgroundColor:'#383838',
        height:30,
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:200,
        borderRadius:10, 
        margin:15,
        padding:2,
    },
    tabsText:{
        margin:0,
        borderRadius:9,
        borderWidth:0,
        textAlign:'center',
        width:98,
        height:26,
        overflow:'hidden',
        padding:3
    },
    submenu:{
        borderBottomWidth:1,
        marginHorizontal:10,
        borderBottomColor:'#383838',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        
        width:350,
        padding:10,
    },
    text:{
        color:'white',
        fontSize:15
    },
    number:{
        fontSize:12,
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
    },
})