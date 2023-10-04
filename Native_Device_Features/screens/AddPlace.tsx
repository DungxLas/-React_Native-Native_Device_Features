import { View } from "react-native";

import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({ navigation }: any) {
  function createPlaceHandler(place: any) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
