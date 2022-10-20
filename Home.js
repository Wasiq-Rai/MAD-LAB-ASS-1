import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <View  style={{alignItems:'center'}}>
        <Image
        source={{uri:'https://reactjs.org/logo-og.png'}}
        style={{height:300,width:300}}
        />

      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate("Chat")}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate("Voice")}>
        <Text style={styles.buttonText}>Voice</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create(
    {
        touchableOpacity:{
            margin:20,
            width:100
        },
        buttonText:{
            textAlign:'center', 
            fontSize:30 ,
            backgroundColor:'blue',
            color:'white',
            borderRadius:10
        }
    }
)
