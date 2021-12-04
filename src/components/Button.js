import React from 'react';
import { StyleSheet,TouchableHighlight,Text, View} from 'react-native';

export default function Button(props){   
    return(
        <View style={[{alignItems:'center',alignContent:'center'},props.View]}>
            <TouchableHighlight
                style={props.style} 
                onPress={props.onPress} 
                underlayColor={props.underlayColor} 
                onShowUnderlay={props.onShowUnderlay}
                onPressIn={props.onPressIn} 
                onPressOut={props.onPressOut}
            > 
                <>
                    {props.icon}
                </>
            </TouchableHighlight>
            <Text style={props.textStyle}>{props.text}</Text>
        </View>
 
    )

}