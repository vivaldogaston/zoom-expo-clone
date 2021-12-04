import React from 'react';
import { StyleSheet,TouchableHighlight,Text, View} from 'react-native';

export default function TabsButton(props){   
    return(
        <TouchableHighlight
            style={[props.style]} 
            onPress={props.onPress} 
            underlayColor={props.underlayColor} 
            onShowUnderlay={props.onShowUnderlay}
            onPressIn={props.onPressIn} 
            onPressOut={props.onPressOut}
        > 
            <View style={[{flexDirection:'row',padding:15},props.View]}>
                <View style={props.IconStyle}>
                    {props.icon}
                </View>
                <Text style={props.textStyle}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    )

}