import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

import { Colors } from "../../constants/color";
import OutlineButton from "../UI/OutlineButton";

function ImagePicker({ onTakenImage }: any) {
  const [pickedImage, setPickedImage] = useState("");

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation!.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation!.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.assets![0].uri);
    onTakenImage(image.assets![0].uri);
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.imagePreview} />
        ) : (
          <Text>No image taken yet</Text>
        )}
      </View>
      <OutlineButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlineButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
