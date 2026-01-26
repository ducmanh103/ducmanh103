import React from "react";
import { View, Button, Alert } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Press me"
        onPress={() => Alert.alert("hello")}
      />
    </View>
  );
}
