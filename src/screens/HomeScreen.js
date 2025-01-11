import React, { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import ParentComponent from "../components/ParentComponent";

const HomeScreen = ({ navigation }) => {
  const [TimA, setUserA] = useState({ skor: 0 });
  const [TimB, setUserB] = useState({ skor: 0 });

  const handleUpdateTimA = () => {
    const Skorbaru = TimA.skor + 1;
    setUserA({ ...TimA, skor: Skorbaru });
    if (Skorbaru === 10) {
      Alert.alert("Tim A menang!");
    }
  };

  const handleUpdateTimB = () => {
    const Skorbaru = TimB.skor + 1;
    setUserB({ ...TimB, skor: Skorbaru });
    if (Skorbaru === 10) {
      Alert.alert("Tim B menang!");
    }
  };

  const handleKurangTimA = () => {
    if (TimA.skor > 0) {
      setUserA({ ...TimA, skor: TimA.skor - 1 });
    }
  };

  const handleKurangTimB = () => {
    if (TimB.skor > 0) {
      setUserB({ ...TimB, skor: TimB.skor - 1 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <ParentComponent
        TimA={TimA}
        TimB={TimB}
        handleUpdateTimA={handleUpdateTimA}
        handleUpdateTimB={handleUpdateTimB}
        handleKurangTimA={handleKurangTimA}
        handleKurangTimB={handleKurangTimB}
      />
      <Button
        title="Go to Details"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Details", { setUserA, setUserB })}
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

export default HomeScreen;
