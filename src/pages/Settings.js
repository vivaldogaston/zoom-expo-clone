import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Dimensions,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import user from '../assets/icon.png';
import { MaterialIcons } from '@expo/vector-icons';
import zoom from '../assets/icons8-zoom-48-blue.png';
import TabsButton from '../components/TabsButton';

const windowWidth=Dimensions.get("screen").width;
export default function Settings({navigation}){
    return(   
        <View style={styles.container}>
            <StatusBar style="light"/>
            <SafeAreaView>
                <Text style={styles.title}>Settings</Text>
                <View style={styles.userTab}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image
                            source={user}
                            style={{
                                width:55,
                                height:55,
                                borderRadius:20,
                                marginRight:10
                            }}
                        />
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row', margin:0}}>
                                <Text 
                                    style={{
                                        marginLeft:6,
                                        color:'white',
                                        fontWeight:'bold',
                                        fontSize:16
                                    }}
                                >
                                    António Sebastião
                                </Text>
                                <Text 
                                    style={{
                                        marginLeft:10,
                                        color:'#3370e5',
                                        fontWeight:'bold',
                                        fontSize:12
                                    }}
                                >
                                    BASIC
                                </Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={zoom} style={{width:30,height:30}}/>
                                <Text style={{color:'#999999'}}>ant**@example.com</Text>
                            </View>
                        </View>
                    </View>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#999999"/>
                </View>
                <TabsButton
                    underlayColor="black"
                    onPress={()=>Alert.alert("hi")}
                    icon={<MaterialIcons name="arrow-forward-ios" size={20} color="#999999"/>}
                    
                    textStyle={styles.tabsText} 
                    View={styles.tabs}
                    text="Meetings"
                />
                <TabsButton
                    underlayColor="black"
                    onPress={()=>Alert.alert("Contacts")}
                    icon={<MaterialIcons name="arrow-forward-ios" size={20} color="#999999"/>}
                    
                    textStyle={styles.tabsText} 
                    View={styles.tabs}
                    text="Contacts"
                />
                <TabsButton
                    underlayColor="black"
                    onPress={()=>Alert.alert("Chats")}
                    icon={<MaterialIcons name="arrow-forward-ios" size={20} color="#999999"/>}
                    
                    textStyle={styles.tabsText} 
                    View={styles.tabs}
                    text="Chats"
                />
                <TabsButton
                    underlayColor="black"
                    onPress={()=>Alert.alert("General")}
                    icon={<MaterialIcons name="arrow-forward-ios" size={20} color="#999999"/>}
                    
                    textStyle={styles.tabsText} 
                    View={styles.tabs}
                    text="General"
                />
                <TabsButton
                    underlayColor="black"
                    onPress={()=>Alert.alert("Siri","Hey Siri")}
                    icon={<MaterialIcons name="arrow-forward-ios" size={20} color="#999999"/>}
                    
                    textStyle={styles.tabsText} 
                    View={[styles.tabs,{marginTop:20}]}
                    text="Siri Shortcuts"
                />
                <TabsButton
                    underlayColor="black"
                    onPress={()=>Alert.alert("About","Zoom-clone made by vivaldogaston")}
                    icon={<MaterialIcons name="arrow-forward-ios" size={20} color="#999999"/>}    
                    textStyle={styles.tabsText} 
                    View={[styles.tabs,{marginTop:20}]}
                    text="About"
                />
                <Text style={{color:'#999999',textAlign:'center',marginTop:30}}>Zoom-clone made by vivaldogaston</Text>
            </SafeAreaView>
            
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#242424',
        justifyContent:'flex-start',
        alignItems:'center',
      
    },
    title:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
       top:20
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
    },
    tabs:{
        flexDirection:'row',
        backgroundColor:'#383838',
        padding:15,
        borderBottomColor:'#404040',
        borderTopColor:'#404040',
        borderBottomWidth:2,
        justifyContent:'space-between',
        borderTopWidth:1,
        flexDirection:'row-reverse',
    },
    tabsText:{
        marginLeft:6,
        color:'white',
        fontWeight:'bold',
        fontSize:14
    },
    userTab:{
        backgroundColor:'#383838',
        width:windowWidth,
        padding:15, 
        flexDirection:'row',
        alignItems:'center',
        marginTop:40,
        marginBottom:20,
        justifyContent:'space-between'

    },
  });