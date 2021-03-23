import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import api from "../../services/api";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Silo() {
  const navigation = useNavigation();
  const route = useRoute();

  const silo = route.params.data.silo;
  const enterprise = route.params.data.enterprise;

  const [displayH, setDisplayH] = useState("flex");
  const [displayT, setDisplayT] = useState("none");
  const [displayE, setDisplayE] = useState("none");

  const [
    paramsArduino1Sensor1Humidity,
    setParamsArduino1Sensor1Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino1Sensor2Humidity,
    setParamsArduino1Sensor2Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino1Sensor3Humidity,
    setParamsArduino1Sensor3Humidity,
  ] = useState(["carregando..."]);

  const [
    paramsArduino1Sensor1Temperature,
    setParamsArduino1Sensor1Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino1Sensor2Temperature,
    setParamsArduino1Sensor2Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino1Sensor3Temperature,
    setParamsArduino1Sensor3Temperature,
  ] = useState(["carregando..."]);

  const [
    paramsArduino1Sensor1HygroscopicBalance,
    setParamsArduino1Sensor1HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino1Sensor2HygroscopicBalance,
    setParamsArduino1Sensor2HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino1Sensor3HygroscopicBalance,
    setParamsArduino1Sensor3HygroscopicBalance,
  ] = useState(["carregando..."]);

  const [
    paramsArduino2Sensor1Humidity,
    setParamsArduino2Sensor1Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino2Sensor2Humidity,
    setParamsArduino2Sensor2Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino2Sensor3Humidity,
    setParamsArduino2Sensor3Humidity,
  ] = useState(["carregando..."]);

  const [
    paramsArduino2Sensor1Temperature,
    setParamsArduino2Sensor1Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino2Sensor2Temperature,
    setParamsArduino2Sensor2Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino2Sensor3Temperature,
    setParamsArduino2Sensor3Temperature,
  ] = useState(["carregando..."]);

  const [
    paramsArduino2Sensor1HygroscopicBalance,
    setParamsArduino2Sensor1HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino2Sensor2HygroscopicBalance,
    setParamsArduino2Sensor2HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino2Sensor3HygroscopicBalance,
    setParamsArduino2Sensor3HygroscopicBalance,
  ] = useState(["carregando..."]);

  const [
    paramsArduino3Sensor1Humidity,
    setParamsArduino3Sensor1Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino3Sensor2Humidity,
    setParamsArduino3Sensor2Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino3Sensor3Humidity,
    setParamsArduino3Sensor3Humidity,
  ] = useState(["carregando..."]);

  const [
    paramsArduino3Sensor1Temperature,
    setParamsArduino3Sensor1Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino3Sensor2Temperature,
    setParamsArduino3Sensor2Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino3Sensor3Temperature,
    setParamsArduino3Sensor3Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino3Sensor1HygroscopicBalance,
    setParamsArduino3Sensor1HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino3Sensor2HygroscopicBalance,
    setParamsArduino3Sensor2HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino3Sensor3HygroscopicBalance,
    setParamsArduino3Sensor3HygroscopicBalance,
  ] = useState(["carregando..."]);

  const [
    paramsArduino4Sensor1Humidity,
    setParamsArduino4Sensor1Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino4Sensor2Humidity,
    setParamsArduino4Sensor2Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino4Sensor3Humidity,
    setParamsArduino4Sensor3Humidity,
  ] = useState(["carregando..."]);

  const [
    paramsArduino4Sensor1Temperature,
    setParamsArduino4Sensor1Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino4Sensor2Temperature,
    setParamsArduino4Sensor2Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino4Sensor3Temperature,
    setParamsArduino4Sensor3Temperature,
  ] = useState(["carregando..."]);

  const [
    paramsArduino4Sensor1HygroscopicBalance,
    setParamsArduino4Sensor1HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino4Sensor2HygroscopicBalance,
    setParamsArduino4Sensor2HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino4Sensor3HygroscopicBalance,
    setParamsArduino4Sensor3HygroscopicBalance,
  ] = useState(["carregando..."]);

  const [
    paramsArduino5Sensor1Humidity,
    setParamsArduino5Sensor1Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino5Sensor2Humidity,
    setParamsArduino5Sensor2Humidity,
  ] = useState(["carregando..."]);
  const [
    paramsArduino5Sensor3Humidity,
    setParamsArduino5Sensor3Humidity,
  ] = useState(["carregando..."]);

  const [
    paramsArduino5Sensor1Temperature,
    setParamsArduino5Sensor1Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino5Sensor2Temperature,
    setParamsArduino5Sensor2Temperature,
  ] = useState(["carregando..."]);
  const [
    paramsArduino5Sensor3Temperature,
    setParamsArduino5Sensor3Temperature,
  ] = useState(["carregando..."]);

  const [
    paramsArduino5Sensor1HygroscopicBalance,
    setParamsArduino5Sensor1HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino5Sensor2HygroscopicBalance,
    setParamsArduino5Sensor2HygroscopicBalance,
  ] = useState(["carregando..."]);
  const [
    paramsArduino5Sensor3HygroscopicBalance,
    setParamsArduino5Sensor3HygroscopicBalance,
  ] = useState(["carregando..."]);

  function navigateBack() {
    navigation.goBack();
  }

  useEffect(() => {
    api
      .get(`/silo/${silo.id}`, {
        headers: {
          Authorization: enterprise.id,
        },
      })
      .then((response) => {
        setParamsArduino1Sensor1Humidity(
          response.data.paramsArduino1Sensor1Humidity
        );
        setParamsArduino1Sensor2Humidity(
          response.data.paramsArduino1Sensor2Humidity
        );
        setParamsArduino1Sensor3Humidity(
          response.data.paramsArduino1Sensor3Humidity
        );

        setParamsArduino1Sensor1Temperature(
          response.data.paramsArduino1Sensor1Temperature
        );
        setParamsArduino1Sensor2Temperature(
          response.data.paramsArduino1Sensor2Temperature
        );
        setParamsArduino1Sensor3Temperature(
          response.data.paramsArduino1Sensor3Temperature
        );

        setParamsArduino1Sensor1HygroscopicBalance(
          response.data.paramsArduino1Sensor1HygroscopicBalance
        );
        setParamsArduino1Sensor2HygroscopicBalance(
          response.data.paramsArduino1Sensor2HygroscopicBalance
        );
        setParamsArduino1Sensor3HygroscopicBalance(
          response.data.paramsArduino1Sensor3HygroscopicBalance
        );

        setParamsArduino2Sensor1Humidity(
          response.data.paramsArduino2Sensor1Humidity
        );
        setParamsArduino2Sensor2Humidity(
          response.data.paramsArduino2Sensor2Humidity
        );
        setParamsArduino2Sensor3Humidity(
          response.data.paramsArduino2Sensor3Humidity
        );

        setParamsArduino2Sensor1Temperature(
          response.data.paramsArduino2Sensor1Temperature
        );
        setParamsArduino2Sensor2Temperature(
          response.data.paramsArduino2Sensor2Temperature
        );
        setParamsArduino2Sensor3Temperature(
          response.data.paramsArduino2Sensor3Temperature
        );

        setParamsArduino2Sensor1HygroscopicBalance(
          response.data.paramsArduino2Sensor1HygroscopicBalance
        );
        setParamsArduino2Sensor2HygroscopicBalance(
          response.data.paramsArduino2Sensor2HygroscopicBalance
        );
        setParamsArduino2Sensor3HygroscopicBalance(
          response.data.paramsArduino2Sensor3HygroscopicBalance
        );

        setParamsArduino3Sensor1Humidity(
          response.data.paramsArduino3Sensor1Humidity
        );
        setParamsArduino3Sensor2Humidity(
          response.data.paramsArduino3Sensor2Humidity
        );
        setParamsArduino3Sensor3Humidity(
          response.data.paramsArduino3Sensor3Humidity
        );

        setParamsArduino3Sensor1Temperature(
          response.data.paramsArduino3Sensor1Temperature
        );
        setParamsArduino3Sensor2Temperature(
          response.data.paramsArduino3Sensor2Temperature
        );
        setParamsArduino3Sensor3Temperature(
          response.data.paramsArduino3Sensor3Temperature
        );

        setParamsArduino3Sensor1HygroscopicBalance(
          response.data.paramsArduino3Sensor1HygroscopicBalance
        );
        setParamsArduino3Sensor2HygroscopicBalance(
          response.data.paramsArduino3Sensor2HygroscopicBalance
        );
        setParamsArduino3Sensor3HygroscopicBalance(
          response.data.paramsArduino3Sensor3HygroscopicBalance
        );

        setParamsArduino4Sensor1Humidity(
          response.data.paramsArduino4Sensor1Humidity
        );
        setParamsArduino4Sensor2Humidity(
          response.data.paramsArduino4Sensor2Humidity
        );
        setParamsArduino4Sensor3Humidity(
          response.data.paramsArduino4Sensor3Humidity
        );

        setParamsArduino4Sensor1Temperature(
          response.data.paramsArduino4Sensor1Temperature
        );
        setParamsArduino4Sensor2Temperature(
          response.data.paramsArduino4Sensor2Temperature
        );
        setParamsArduino4Sensor3Temperature(
          response.data.paramsArduino4Sensor3Temperature
        );

        setParamsArduino4Sensor1HygroscopicBalance(
          response.data.paramsArduino4Sensor1HygroscopicBalance
        );
        setParamsArduino4Sensor2HygroscopicBalance(
          response.data.paramsArduino4Sensor2HygroscopicBalance
        );
        setParamsArduino4Sensor3HygroscopicBalance(
          response.data.paramsArduino4Sensor3HygroscopicBalance
        );

        setParamsArduino5Sensor1Humidity(
          response.data.paramsArduino5Sensor1Humidity
        );
        setParamsArduino5Sensor2Humidity(
          response.data.paramsArduino5Sensor2Humidity
        );
        setParamsArduino5Sensor3Humidity(
          response.data.paramsArduino5Sensor3Humidity
        );

        setParamsArduino5Sensor1Temperature(
          response.data.paramsArduino5Sensor1Temperature
        );
        setParamsArduino5Sensor2Temperature(
          response.data.paramsArduino5Sensor2Temperature
        );
        setParamsArduino5Sensor3Temperature(
          response.data.paramsArduino5Sensor3Temperature
        );

        setParamsArduino5Sensor1HygroscopicBalance(
          response.data.paramsArduino5Sensor1HygroscopicBalance
        );
        setParamsArduino5Sensor2HygroscopicBalance(
          response.data.paramsArduino5Sensor2HygroscopicBalance
        );
        setParamsArduino5Sensor3HygroscopicBalance(
          response.data.paramsArduino5Sensor3HygroscopicBalance
        );
      });
  }, [enterprise.id, silo.id]);

  function color(av, type) {
    if (type === "Humidity") {
      if (av < 65) {
        return "rgb(254, 242, 0)";
      } else if (av >= 65 && av <= 70) {
        return "rgb(35, 177, 77)";
      } else if (av > 70) {
        return "rgb(0,191,255)";
      }
    } else if (type === "Temperature") {
      if (av < 20) {
        return "rgb(0,191,255)";
      } else if (av >= 20 && av <= 25.0) {
        return "rgb(35, 177, 77)";
      } else if (av > 25) {
        return "rgb(237, 27, 36)";
      }
    } else if (type === "HygroscopicBalance") {
      if (av < 12.3) {
        return "rgb(254, 242, 0)";
      } else if (av > 12.2 && av <= 14.0) {
        return "rgb(35, 177, 77)";
      } else if (av > 14.0) {
        return "rgb(237, 27, 36)";
      }
    }
  }

  function buildLineChart(label, metric, data) {
    if (data == "-") {
      return;
    }
    navigation.navigate("ChartView", {
      data,
      label,
      metric,
      timeMeasure: silo.timeMeasure,
    });
  }

  function dateFormater(date) {
    if (date === "Em período de estocagem") {
      return date;
    } else if (date === "-") {
      return date;
    } else {
      let data = new Date(date);
      return Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(data);
    }
  }

  function dateTimeFormater(dateTime) {
    let data = new Date(dateTime);

    if (dateTime === "-") {
      return dateTime;
    }

    return Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(data);
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigateBack()}
          >
            <Feather name="arrow-left" size={30} color="#49a010" />
          </TouchableOpacity>
        </View>

        <View style={styles.propertys}>
          <Text style={styles.siloProperty}>
            ID: <Text style={styles.siloValue}>{silo.id}</Text>
          </Text>

          <Text style={styles.siloProperty}>
            Nome do responsável:{" "}
            <Text style={styles.siloValue}>{silo.name}</Text>
          </Text>

          <Text style={styles.siloProperty}>
            Data de silagem:{" "}
            <Text style={styles.siloValue}>{dateFormater(silo.date)}</Text>
          </Text>

          <Text style={styles.siloProperty}>
            Data de desensilagem:{" "}
            <Text style={styles.siloValue}>
              {dateFormater(silo.desensilageDate)}
            </Text>
          </Text>

          <Text style={styles.siloProperty}>
            Hora de silagem: <Text style={styles.siloValue}>{silo.time}</Text>
          </Text>

          <Text style={styles.siloProperty}>
            Última leitura:{" "}
            <Text style={styles.siloValue}>
              {dateTimeFormater(
                Object.values(silo.timeMeasure)[
                  Object.values(silo.timeMeasure).length - 1
                ]
              )}
            </Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.chooseButton}
          onPress={() => {
            setDisplayH("flex");
            setDisplayT("none");
            setDisplayE("none");
          }}
        >
          <Text style={styles.chooseButtonText}>Umidade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.chooseButton}
          onPress={() => {
            setDisplayH("none");
            setDisplayT("flex");
            setDisplayE("none");
          }}
        >
          <Text style={styles.chooseButtonText}>Temperatura</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.chooseButton}
          onPress={() => {
            setDisplayH("none");
            setDisplayT("none");
            setDisplayE("flex");
          }}
        >
          <Text style={styles.chooseButtonText}>Equilíbrio Higroscópico</Text>
        </TouchableOpacity>

        <View style={{ display: displayH }}>
          <View style={styles.headerTable}>
            <Text style={styles.tableTitle}>Table de Umidade</Text>
          </View>

          <ScrollView horizontal={true} style={styles.scrollView}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 1 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor1Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino1Sensor1Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor1Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor1Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino2Sensor1Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor1Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor1Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino3Sensor1Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor1Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor1Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino4Sensor1Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor1Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor1Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino5Sensor1Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor1Humidity].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 2 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor2Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino1Sensor2Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor2Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor2Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino2Sensor2Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor2Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor2Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino3Sensor2Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor2Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor2Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino4Sensor2Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor2Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor2Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino5Sensor2Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor2Humidity].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 3 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor3Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino1Sensor3Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor3Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor3Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino2Sensor3Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor3Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor3Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino3Sensor3Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor3Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor3Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino4Sensor3Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor3Humidity].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor3Humidity].pop(),
                        "Humidity"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Umidade",
                      "%",
                      paramsArduino5Sensor3Humidity
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor3Humidity].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={([styles.footerLabel], { marginLeft: 70 })}>
                  <Text> Arduino 1 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text style={styles.footerLabelText}> Arduino 2 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 3 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 4 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 5 </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={{ display: displayT }}>
          <View style={styles.headerTable}>
            <Text style={styles.tableTitle}>Table de Temperatura</Text>
          </View>

          <ScrollView horizontal={true} style={styles.scrollView}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 1 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor1Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino1Sensor1Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor1Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor1Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino2Sensor1Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor1Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor1Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino3Sensor1Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor1Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor1Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino4Sensor1Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor1Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor1Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino5Sensor1Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor1Temperature].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 2 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor2Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino1Sensor2Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor2Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor2Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino2Sensor2Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor2Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor2Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino3Sensor2Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor2Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor2Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino4Sensor2Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor2Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor2Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino5Sensor2Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor2Temperature].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 3 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor3Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino1Sensor3Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor3Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor3Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino2Sensor3Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor3Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor3Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino3Sensor3Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor3Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor3Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino4Sensor3Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor3Temperature].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor3Temperature].pop(),
                        "Temperature"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Temperatura",
                      "°C",
                      paramsArduino5Sensor3Temperature
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor3Temperature].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={([styles.footerLabel], { marginLeft: 65 })}>
                  <Text> Arduino 1 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text style={styles.footerLabelText}> Arduino 2 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 3 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 4 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 5 </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={{ display: displayE }}>
          <View style={styles.headerTable}>
            <Text style={styles.tableTitle}>
              Table de Equilíbrio Higroscópico
            </Text>
          </View>

          <ScrollView horizontal={true} style={styles.scrollView}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 1 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor1HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino1Sensor1HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor1HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor1HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino2Sensor1HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor1HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor1HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino3Sensor1HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor1HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor1HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino4Sensor1HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor1HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor1HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino5Sensor1HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor1HygroscopicBalance].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 2 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor2HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino1Sensor2HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor2HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor2HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino2Sensor2HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor2HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor2HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino3Sensor2HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor2HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor2HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino4Sensor2HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor2HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor2HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino5Sensor2HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor2HygroscopicBalance].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}> Sensor 3 </Text>
                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino1Sensor3HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino1Sensor3HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino1Sensor3HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino2Sensor3HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino2Sensor3HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino2Sensor3HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino3Sensor3HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino3Sensor3HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino3Sensor3HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino4Sensor3HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino4Sensor3HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino4Sensor3HygroscopicBalance].pop()}
                  </Text>
                </View>

                <View
                  style={[
                    styles.sensorParams,
                    {
                      backgroundColor: color(
                        [...paramsArduino5Sensor3HygroscopicBalance].pop(),
                        "HygroscopicBalance"
                      ),
                    },
                  ]}
                  onTouchEnd={() => {
                    buildLineChart(
                      "Equilíbrio Higroscópico",
                      "%",
                      paramsArduino5Sensor3HygroscopicBalance
                    );
                  }}
                >
                  <Text style={styles.sensorParamsValue}>
                    {[...paramsArduino5Sensor3HygroscopicBalance].pop()}
                  </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={([styles.footerLabel], { marginLeft: 65 })}>
                  <Text> Arduino 1 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text style={styles.footerLabelText}> Arduino 2 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 3 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 4 </Text>
                </View>

                <View style={styles.footerLabel}>
                  <Text> Arduino 5 </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
