import react, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title:
      "By passing extraData={selectedId} to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any changeskeyExtractor tells the list to use the ids for the react keys instead of the default key property.",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
export default function PersonalChatScreen(navigate) {
  const [input, setInput] = useState("");
  const [key, setKey] = useState(6);
  const [messages, setMessages] = useState([
    {
      key: 0,
      text: "Laboris ad ex duis amet ea. Non occaecat ea et deserunt tempor dolore.",
      sent: true,
    },
    {
      key: 1,
      text: "Anim Lorem ut do qui dolor ad pariatur ea pariatur id laborum in. Adipisicing ad officia consequat cupidatat id incididunt qui voluptate elit consectetur culpa elit reprehenderit.",
      sent: true,
    },
    {
      key: 2,
      text: "Incididunt elit Lorem mollit nostrud. Occaecat eiusmod cillum aliquip dolor enim reprehenderit qui veniam ex dolor. Proident consectetur id occaecat veniam consequat occaecat ipsum.",
      sent: false,
    },
    {
      key: 3,
      text: "Proident fugiat duis excepteur quis esse pariatur. Ea esse veniam adipisicing ex aliqua minim consequat ut irure. Aliqua ad laborum voluptate est qui ad anim Lorem veniam cillum nostrud. Eiusmod laboris minim excepteur reprehenderit officia eiusmod. Velit ullamco laboris elit cupidatat eu id cillum.",
      sent: true,
    },
    {
      key: 4,
      text: "Eiusmod laboris minim excepteur reprehenderit officia eiusmod. Velit ullamco laboris elit cupidatat eu id cillum.",
      sent: false,
    },
    {
      key: 5,
      text: "Eiusmod laboris minim excepteur reprehenderit officia eiusmod. Velit ullamco laboris elit cupidatat eu id cillum.",
      sent: true,
    },
  ]);
  function handleChangeText(text) {
    setInput(text);
  }

  function handleSend() {
    let message = {
      key: key,
      text: input,
      sent: true,
    };
    setKey((prev) => ++prev);
    let newArray = messages;
    newArray.push(message);
    setMessages(newArray);
    setInput("");
  }
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          { flex: 1 },
          item.sent
            ? { alignItems: "flex-end" }
            : { alignItems: "flex-start" },
        ]}
      >
        <View
          style={[
            styles.messages,
            item.sent ? styles.sentView : styles.receivedView,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              item.sent ? styles.sentText : styles.receivedText,
            ]}
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: "white",
          }}
        >
          John Smith
        </Text>
      </View>
      <View style={styles.bottomsheet}>
        <FlatList
          style={styles.flatList}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={messages}
        />
      </View>
      <KeyboardAvoidingView>
      <View style={styles.textInput}>
        <View style={styles.inputview}>
          <TextInput
          placeholder="Enter Message"
          onChangeText={(text) => handleChangeText(text)}

          value={input}
          
            style={{
              flex: 0.8,
              marginLeft: 50,
              paddingLeft: 10,
              width: 300,
              height: 50,
              borderRadius: 30,
              backgroundColor: "white",
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <TouchableOpacity onPress={() => handleSend()}>
            <Image source={require("./assets/send-button.png") } style={{height:50,width:50,backgroundColor:'blue'}} />
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "blue",
  },
  header: {
    flex: 0.1,
    justifyContent: "space-between",
  },
  bottomsheet: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 0.8,
    backgroundColor: "white",
    alignItems: "center",
  },
  textInput: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  inputview: {
    flex: 1,
    marginTop: 10,
    height: 50,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  messages: {
    backgroundColor: "purple",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    color: "white",
    borderRadius: 10,
  },
  messageText: {
    color: "white",
  },
  flatList: {
    marginRight: 10,
    width: "70%",
  },
  sentText: {
    color: "white",
  },
  sentView: {
    backgroundColor: "green",
  },
  receivedText: {
    color: "white",
  },
  receivedView: {
    backgroundColor: "purple",
  },
});