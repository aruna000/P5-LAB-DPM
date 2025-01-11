import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({
  TimA,
  TimB,
  handleUpdateTimA,
  handleUpdateTimB,
  handleKurangTimA,
  handleKurangTimB,
}) => {
  return (
    <View style={styles.container}>
      <ChildComponent
        TimA={TimA}
        TimB={TimB}
        onPressTimA={handleUpdateTimA}
        onPressTimB={handleUpdateTimB}
        KurangTimA={handleKurangTimA}
        KurangTimB={handleKurangTimB}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ParentComponent;
