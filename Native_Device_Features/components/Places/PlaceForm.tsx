import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler() {}

  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput onChangeText={changeTitleHandler} />
      </View>
    </ScrollView>
  );
}

export default PlaceForm;
