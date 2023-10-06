import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

import { fetchPlaces } from "../util/database";

function AllPlaces({ route }: any) {
  const [loadedPlaces, setLoadedPlaces] = useState<any[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      await fetchPlaces();
    }

    if (isFocused) {
      loadPlaces();
      //setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
