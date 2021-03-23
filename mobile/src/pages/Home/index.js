import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Home() {
  const [silos, setSilos] = useState([]);
  const [total, setTotal] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  const enterprise = route.params.enterprise;

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToSilo(silo) {
    let data = {
      silo,
      enterprise,
    };
    navigation.navigate("Silo", { data });
  }

  useEffect(() => {
    api
      .get("/silos", {
        headers: {
          Authorization: enterprise.id,
        },
      })
      .then((response) => {
        setSilos(response.data.silos);
        setTotal(response.data.total);
      });
  }, [enterprise]);

  function color(av) {
    if (av < 12.5) {
      return "rgb(254, 242, 0)";
    } else if (av >= 12.5 && av <= 14.0) {
      return "rgb(35, 177, 77)";
    } else if (av > 14.0) {
      return "rgb(237, 27, 36)";
    } else {
      return "rgb(255, 255, 255)";
    }
  }

  function dateFormater(date) {
    if (date == "Em período de estocagem") {
      return date;
    }

    let data = new Date(date);
    return Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(data);
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
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigateBack()}
        >
          <SimpleLineIcons name="logout" size={30} color="#49a010" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Bem-vinda, {enterprise.name}!</Text>
      <Text style={styles.description}>
        Selecione um dos silos abaixo para ver mais detalhes.
      </Text>

      <Text style={styles.total}>
        Total de <Text style={styles.totalBold}>{total} silo(s)</Text>.
      </Text>

      <FlatList
        data={silos}
        style={[styles.siloList]}
        keyExtractor={(silo) => String(silo.id)}
        renderItem={({ item: silo }) => (
          <View style={styles.silo}>
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
              Última leitura:{" "}
              <Text style={styles.siloValue}>
                {dateTimeFormater(
                  Object.values(silo.timeMeasure)[
                    Object.values(silo.timeMeasure).length - 1
                  ]
                )}
              </Text>
            </Text>

            <Text style={styles.siloProperty}>
              Taxa de equilíbrio:{" "}
              <Text
                style={[
                  styles.siloValueAverage,
                  {
                    backgroundColor: `${color(
                      Object.values(silo.average)[
                        Object.values(silo.average).length - 1
                      ]
                    )}`,
                  },
                ]}
              >
                {
                  Object.values(silo.average)[
                    Object.values(silo.average).length - 1
                  ]
                }
              </Text>
            </Text>

            <Text style={styles.siloProperty}>
              Hora de silagem: <Text style={styles.siloValue}>{silo.time}</Text>
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToSilo(silo)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#49a010" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
