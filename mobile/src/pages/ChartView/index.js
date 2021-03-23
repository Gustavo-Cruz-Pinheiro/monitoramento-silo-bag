import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function ChartView() {
  const navigation = useNavigation();
  const route = useRoute();

  function navigateBack() {
    navigation.goBack();
  }

  const data = route.params.data;
  const timeMeasure = Object.values(route.params.timeMeasure);
  const label = route.params.label;
  const metric = route.params.metric;

  let dataConvert = [];
  let timeMeasureConvert = [];

  for (let i = 0; i < data.length; i++) {
    var elementD = data[i];
    if (elementD !== "-") {
      dataConvert.push(elementD);
    }
  }

  for (let i = 0; i < timeMeasure.length; i++) {
    var elementT = timeMeasure[i];
    if (elementT !== "-") {
      let data = new Date(elementT);
      timeMeasureConvert.push(
        Intl.DateTimeFormat("pt-BR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(data)
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigateBack()}
        >
          <Feather name="arrow-left" size={30} color="#49a010" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Histórico de {label}</Text>

      <ScrollView horizontal={true} style={styles.scrollView}>
        <LineChart
          data={{
            labels: timeMeasureConvert,
            datasets: [
              {
                data: dataConvert,
              },
            ],
          }}
          width={3000} // from react-native
          height={400}
          yAxisSuffix={metric}
          yAxisInterval={1} // optional, defaults to 1
          verticalLabelRotation={30}
          segments={10}
          chartConfig={{
            backgroundColor: "#000000",
            backgroundGradientFrom: "#000000",
            backgroundGradientTo: "#000000",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "2",
              stroke: "#32CD32",
            },
          }}
          bezier
          style={{
            marginVertical: 13,
            borderRadius: 16,
          }}
        />
      </ScrollView>
    </View>
  );
}
