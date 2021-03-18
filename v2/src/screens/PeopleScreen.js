import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

const People = () => {
  return (
    <View style={styles.center}>
           <Text>This is the People screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default People;