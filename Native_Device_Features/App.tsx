import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import PlaceDetail from "./screens/PlaceDetails";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/color";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="All Places"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("Add Place")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Add Place"
            component={AddPlace}
            options={({ navigation }) => ({
              title: "Add a new Place",
              // headerRight: ({ tintColor }) => (
              //   <IconButton
              //     icon="add"
              //     size={24}
              //     color={tintColor}
              //     onPress={() => navigation.navigate("Add Place")}
              //   />
              // ),
              //headerLeft: () => <Text>Back</Text>,
              headerBackTitle: "Back",
            })}
          />
          <Stack.Screen
            name="Place Detail"
            component={PlaceDetail}
            options={{ title: "Place Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
