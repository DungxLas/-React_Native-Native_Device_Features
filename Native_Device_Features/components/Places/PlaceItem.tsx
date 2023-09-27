import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type PlaceItemProps = {
  place: any;
  onSelect?: () => void;
};

const PlaceItem: React.FC<PlaceItemProps> = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
