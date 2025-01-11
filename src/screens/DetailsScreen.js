import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const DetailsScreen = ({ route, navigation }) => {
  const { setUserA, setUserB } = route.params;

  const resetSkor = () => {
    setUserA({ skor: 0 });
    setUserB({ skor: 0 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Button
        title="Reset Skor"
        buttonStyle={styles.button}
        onPress={resetSkor}
      />
      <Button
        title="Go back"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00796b",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default DetailsScreen;
