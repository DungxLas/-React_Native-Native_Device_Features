import { View } from "react-native";

import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlace({ navigation }: any) {
  async function createPlaceHandler(place: any) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
