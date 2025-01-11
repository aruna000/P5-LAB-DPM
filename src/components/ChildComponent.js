import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const ChildComponent = ({
  TimA,
  TimB,
  onPressTimA,
  onPressTimB,
  KurangTimA,
  KurangTimB,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userInfo}>Tim A</Text>
      <Text style={styles.score}>Skor: {TimA.skor}</Text>
      <Button buttonStyle={styles.button} title="+" onPress={onPressTimA} />
      <Button buttonStyle={styles.button} title="-" onPress={KurangTimA} />

      <Text style={styles.userInfo}>Tim B</Text>
      <Text style={styles.score}>Skor: {TimB.skor}</Text>
      <Button buttonStyle={styles.button} title="+" onPress={onPressTimB} />
      <Button buttonStyle={styles.button} title="-" onPress={KurangTimB} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#00796b",
    borderRadius: 20,
    padding: 20,
    margin: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  userInfo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 8,
  },
  score: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#00796b",
    marginBottom: 10,
  },
});

export default ChildComponent;
