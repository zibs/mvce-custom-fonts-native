import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
} from "victory-native";

import { useFonts } from "expo-font";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          style={{
            labels: {
              fill: "red",
              fontSize: 25,
              fontFamily: "Montserrat",
            },
          }}
          labels={({ datum }) => `y: ${datum.earnings}`}
          labelComponent={<VictoryLabel dy={30} />}
        />
      </VictoryChart>
      <VictoryChart>
        <VictoryBar
          style={{
            data: { fill: "tomato", width: 25, fontFamily: "Montserrat" },
            labels: { fontFamily: "Montserrat" },
          }}
          data={[
            { x: "cats", y: 10 },
            { x: "dog", y: 25 },
            { x: "bird", y: 40 },
            { x: "frog", y: 50 },
            { x: "fish", y: 50 },
          ]}
        />
        <VictoryAxis style={{ tickLabels: { fontFamily: "Montserrat" } }} />
        <VictoryAxis
          dependentAxis
          style={{ tickLabels: { fontFamily: "Montserrat" } }}
        />
      </VictoryChart>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
