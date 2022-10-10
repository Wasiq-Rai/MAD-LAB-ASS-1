import React from "react";
import {View,Text, TouchableOpacity} from 'react-native';

export default function Home({navigation}){
    return (
        
        <View>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
                <Text
                >
                    Go to Chat
                </Text>

            </TouchableOpacity>
        </View>
    );
}