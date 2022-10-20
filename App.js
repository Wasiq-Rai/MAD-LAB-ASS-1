import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home'
import ChatScreen from './Chat'
import VoiceScreen from './Voice'
import PersonalChatScreen from './PersonalChatScreen';
import PersonalVoiceScreen from './PersonalVoiceScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Voice" component={VoiceScreen} />
      <Stack.Screen name="PersonalChatScreen" component={PersonalChatScreen} />
      <Stack.Screen name="PersonalVoiceScreen" component={PersonalVoiceScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
