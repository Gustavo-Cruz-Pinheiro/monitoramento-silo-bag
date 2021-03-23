import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { MdExitToApp, MdEdit } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function SiloView(props) {
  const [silo, setSilo] = useState({
    date: "1970-01-01",
    desensilageDate: "1970-01-01",
    timeMeasure: [14400000],
  });
  const [displayH, setDisplayH] = useState("flex");
  const [displayT, setDisplayT] = useState("none");
  const [displayE, setDisplayE] = useState("none");
  const [date, setDate] = useState("");
  const [displayF, setDisplayF] = useState("none");

  const history = useHistory();

  const enterpriseId = localStorage.getItem("enterpriseId");
  const siloId = props.match.params.id;

  if (!enterpriseId) {
    history.push("/");
  }

  const [
    paramsArduino1Sensor1Humidity,
    setParamsArduino1Sensor1Humidity,
  ] = useState([]);
  const [
    paramsArduino1Sensor2Humidity,
    setParamsArduino1Sensor2Humidity,
  ] = useState([]);
  const [
    paramsArduino1Sensor3Humidity,
    setParamsArduino1Sensor3Humidity,
  ] = useState([]);

  const [
    paramsArduino1Sensor1Temperature,
    setParamsArduino1Sensor1Temperature,
  ] = useState([]);
  const [
    paramsArduino1Sensor2Temperature,
    setParamsArduino1Sensor2Temperature,
  ] = useState([]);
  const [
    paramsArduino1Sensor3Temperature,
    setParamsArduino1Sensor3Temperature,
  ] = useState([]);

  const [
    paramsArduino1Sensor1HygroscopicBalance,
    setParamsArduino1Sensor1HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino1Sensor2HygroscopicBalance,
    setParamsArduino1Sensor2HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino1Sensor3HygroscopicBalance,
    setParamsArduino1Sensor3HygroscopicBalance,
  ] = useState([]);

  const [
    paramsArduino2Sensor1Humidity,
    setParamsArduino2Sensor1Humidity,
  ] = useState([]);
  const [
    paramsArduino2Sensor2Humidity,
    setParamsArduino2Sensor2Humidity,
  ] = useState([]);
  const [
    paramsArduino2Sensor3Humidity,
    setParamsArduino2Sensor3Humidity,
  ] = useState([]);

  const [
    paramsArduino2Sensor1Temperature,
    setParamsArduino2Sensor1Temperature,
  ] = useState([]);
  const [
    paramsArduino2Sensor2Temperature,
    setParamsArduino2Sensor2Temperature,
  ] = useState([]);
  const [
    paramsArduino2Sensor3Temperature,
    setParamsArduino2Sensor3Temperature,
  ] = useState([]);

  const [
    paramsArduino2Sensor1HygroscopicBalance,
    setParamsArduino2Sensor1HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino2Sensor2HygroscopicBalance,
    setParamsArduino2Sensor2HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino2Sensor3HygroscopicBalance,
    setParamsArduino2Sensor3HygroscopicBalance,
  ] = useState([]);

  const [
    paramsArduino3Sensor1Humidity,
    setParamsArduino3Sensor1Humidity,
  ] = useState([]);
  const [
    paramsArduino3Sensor2Humidity,
    setParamsArduino3Sensor2Humidity,
  ] = useState([]);
  const [
    paramsArduino3Sensor3Humidity,
    setParamsArduino3Sensor3Humidity,
  ] = useState([]);

  const [
    paramsArduino3Sensor1Temperature,
    setParamsArduino3Sensor1Temperature,
  ] = useState([]);
  const [
    paramsArduino3Sensor2Temperature,
    setParamsArduino3Sensor2Temperature,
  ] = useState([]);
  const [
    paramsArduino3Sensor3Temperature,
    setParamsArduino3Sensor3Temperature,
  ] = useState([]);
  const [
    paramsArduino3Sensor1HygroscopicBalance,
    setParamsArduino3Sensor1HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino3Sensor2HygroscopicBalance,
    setParamsArduino3Sensor2HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino3Sensor3HygroscopicBalance,
    setParamsArduino3Sensor3HygroscopicBalance,
  ] = useState([]);

  const [
    paramsArduino4Sensor1Humidity,
    setParamsArduino4Sensor1Humidity,
  ] = useState([]);
  const [
    paramsArduino4Sensor2Humidity,
    setParamsArduino4Sensor2Humidity,
  ] = useState([]);
  const [
    paramsArduino4Sensor3Humidity,
    setParamsArduino4Sensor3Humidity,
  ] = useState([]);

  const [
    paramsArduino4Sensor1Temperature,
    setParamsArduino4Sensor1Temperature,
  ] = useState([]);
  const [
    paramsArduino4Sensor2Temperature,
    setParamsArduino4Sensor2Temperature,
  ] = useState([]);
  const [
    paramsArduino4Sensor3Temperature,
    setParamsArduino4Sensor3Temperature,
  ] = useState([]);

  const [
    paramsArduino4Sensor1HygroscopicBalance,
    setParamsArduino4Sensor1HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino4Sensor2HygroscopicBalance,
    setParamsArduino4Sensor2HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino4Sensor3HygroscopicBalance,
    setParamsArduino4Sensor3HygroscopicBalance,
  ] = useState([]);

  const [
    paramsArduino5Sensor1Humidity,
    setParamsArduino5Sensor1Humidity,
  ] = useState([]);
  const [
    paramsArduino5Sensor2Humidity,
    setParamsArduino5Sensor2Humidity,
  ] = useState([]);
  const [
    paramsArduino5Sensor3Humidity,
    setParamsArduino5Sensor3Humidity,
  ] = useState([]);

  const [
    paramsArduino5Sensor1Temperature,
    setParamsArduino5Sensor1Temperature,
  ] = useState([]);
  const [
    paramsArduino5Sensor2Temperature,
    setParamsArduino5Sensor2Temperature,
  ] = useState([]);
  const [
    paramsArduino5Sensor3Temperature,
    setParamsArduino5Sensor3Temperature,
  ] = useState([]);

  const [
    paramsArduino5Sensor1HygroscopicBalance,
    setParamsArduino5Sensor1HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino5Sensor2HygroscopicBalance,
    setParamsArduino5Sensor2HygroscopicBalance,
  ] = useState([]);
  const [
    paramsArduino5Sensor3HygroscopicBalance,
    setParamsArduino5Sensor3HygroscopicBalance,
  ] = useState([]);

  useEffect(() => {
    api
      .get(`/silo/${siloId}`, {
        headers: {
          Authorization: enterpriseId,
        },
      })
      .then((response) => {
        setSilo(response.data.silo);
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
  }, [enterpriseId, siloId]);

  function handleBack() {
    localStorage.removeItem("siloId");
    history.push("/home");
  }

  function color(av, type) {
    if (type === "humidity") {
      if (av < 65) {
        return "rgb(254, 242, 0)";
      } else if (av >= 65 && av <= 70) {
        return "rgb(35, 177, 77)";
      } else if (av > 70) {
        return "rgb(0,191,255)";
      }
    } else if (type === "temperature") {
      if (av < 20) {
        return "rgb(0,191,255)";
      } else if (av >= 20 && av <= 25.0) {
        return "rgb(35, 177, 77)";
      } else if (av > 25) {
        return "rgb(237, 27, 36)";
      }
    } else if (type === "hygroscopicBalance") {
      if (av < 12.5) {
        return "rgb(254, 242, 0)";
      } else if (av >= 12.5 && av <= 14.0) {
        return "rgb(35, 177, 77)";
      } else if (av > 14.0) {
        return "rgb(237, 27, 36)";
      }
    }
  }

  function buildLineChart(label, data) {
    localStorage.setItem("dataParam", JSON.stringify(data));
    localStorage.setItem("timeMeasure", JSON.stringify(silo.timeMeasure));
    history.push(`/chart/silo/${siloId}/${label}`);
  }

  let data = {
    siloId,
    enterpriseId,
    date,
  };

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      const options = {
        title: "Confirmação",
        message: "Tem certeza que deseja alterar a data de desensilagem?",
        buttons: [
          {
            label: "Sim",
            onClick: async () => {
              const response = await api.put("/silo", data);

              let error = response.data.error;

              if (error === "inexistente") {
                window.location.reload();
              } else {
                toast.error(`Erro nas alterações dos dados. ${error}`);
              }
            },
          },
          {
            label: "Não",
            onClick: () => {
              window.location.reload();
            },
          },
        ],
      };

      confirmAlert(options);
    } catch (err) {
      toast.error("Erro no servidor. Por favor tente novamente mais tarde!");
    }
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
      timeStyle: "short",
      dateStyle: "long",
    }).format(data);
  }

  return (
    <div className="full-screen">
      <div className="home-container">
        <div className="header">
          <img src={logoImg} className="logoImg" alt="SILO BAG" />

          <button onClick={handleBack} className="buttonExit">
            <MdExitToApp className="iconExit" size={30} color="#000" />
          </button>
        </div>

        <div className="silos-container">
          <h1>Dados do Silo</h1>
          <div className="content">
            <div className="silo-props-group1">
              <p>
                <fer>Identificação: </fer>
                {silo.id}
              </p>

              <p>
                <fer>Hora de silagem: </fer>
                {silo.time}
              </p>

              <p>
                <fer>Nome do responsável: </fer>
                {silo.name}
              </p>
            </div>

            <div className="silo-props-group2">
              <p>
                <fer>Data de desensilagem: </fer>
                {dateFormater(silo.desensilageDate)}
                <button
                  className="iconEdit"
                  onClick={() => {
                    setDisplayF("flex");
                  }}
                >
                  <MdEdit />
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <div
                  style={{
                    display: `${displayF}`,
                  }}
                >
                  <form onSubmit={handleUpdate}>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />

                    <div className="divButton">
                      <button className="buttonConfirm" type="submit">
                        Confirmar
                      </button>
                      <button
                        className="buttonCancel"
                        onClick={() => {
                          setDisplayF("none");
                        }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </p>

              <p>
                <fer>Data de silagem: </fer>
                {dateFormater(silo.date)}
              </p>

              <p>
                <fer>Última Leitura: </fer>
                {dateTimeFormater(
                  Object.values(silo.timeMeasure)[
                    Object.values(silo.timeMeasure).length - 1
                  ]
                )}
              </p>
            </div>
            <div className="choose">
              <button
                onClick={() => {
                  setDisplayH("flex");
                  setDisplayT("none");
                  setDisplayE("none");
                }}
              >
                Umidade
              </button>
              <button
                onClick={() => {
                  setDisplayH("none");
                  setDisplayT("flex");
                  setDisplayE("none");
                }}
              >
                Temperatura
              </button>
              <button
                onClick={() => {
                  setDisplayH("none");
                  setDisplayT("none");
                  setDisplayE("flex");
                }}
              >
                Equilíbrio Higroscópico
              </button>
            </div>
            <div
              className="tableHumidity"
              style={{
                display: `${displayH}`,
              }}
            >
              <table className="tableParams">
                <tr>
                  <th className="standardTh"> </th>
                  <th className="customTh" colSpan="5">
                    Tabela de Umidade(%)
                  </th>
                </tr>
                <tr className="standardTr">
                  <td className="customTd">Sensor 1</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor1Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino1Sensor1Humidity);
                    }}
                  >
                    {[...paramsArduino1Sensor1Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor1Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino2Sensor1Humidity);
                    }}
                  >
                    {[...paramsArduino2Sensor1Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor1Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino3Sensor1Humidity);
                    }}
                  >
                    {[...paramsArduino3Sensor1Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor1Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino4Sensor1Humidity);
                    }}
                  >
                    {[...paramsArduino4Sensor1Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor1Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino5Sensor1Humidity);
                    }}
                  >
                    {[...paramsArduino5Sensor1Humidity].pop()}
                  </td>
                </tr>

                <tr className="standardTr">
                  <td className="customTd">Sensor 2</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor2Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino1Sensor2Humidity);
                    }}
                  >
                    {[...paramsArduino1Sensor2Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor2Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino2Sensor2Humidity);
                    }}
                  >
                    {[...paramsArduino2Sensor2Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor2Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino3Sensor2Humidity);
                    }}
                  >
                    {[...paramsArduino3Sensor2Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor2Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino4Sensor2Humidity);
                    }}
                  >
                    {[...paramsArduino4Sensor2Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor2Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino5Sensor2Humidity);
                    }}
                  >
                    {[...paramsArduino5Sensor2Humidity].pop()}
                  </td>
                </tr>
                <tr className="standardTr">
                  <td className="customTd">Sensor 3</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor3Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino1Sensor3Humidity);
                    }}
                  >
                    {[...paramsArduino1Sensor3Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor3Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino2Sensor3Humidity);
                    }}
                  >
                    {[...paramsArduino2Sensor3Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor3Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino3Sensor3Humidity);
                    }}
                  >
                    {[...paramsArduino3Sensor3Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor3Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino4Sensor3Humidity);
                    }}
                  >
                    {[...paramsArduino4Sensor3Humidity].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor3Humidity].pop(),
                        "humidity"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart("Umidade", paramsArduino5Sensor3Humidity);
                    }}
                  >
                    {[...paramsArduino5Sensor3Humidity].pop()}
                  </td>
                </tr>
                <tr className="customTr">
                  <td> </td>
                  <td className="customTd">Arduino 1</td>
                  <td className="customTd">Arduino 2</td>
                  <td className="customTd">Arduino 3</td>
                  <td className="customTd">Arduino 4</td>
                  <td className="customTd">Arduino 5</td>
                </tr>
              </table>
            </div>
            <div
              className="legend"
              style={{
                display: `${displayH}`,
              }}
            >
              <table className="tableLegend">
                <tr>
                  <td>Baixa</td>
                  <td>Ideal</td>
                  <td>Alta</td>
                </tr>
                <tr>
                  <td className="legendDryH"></td>
                  <td className="legendIdealH"></td>
                  <td className="legendDampH"></td>
                </tr>
              </table>
            </div>

            <div
              className="tableTemperature"
              style={{
                display: `${displayT}`,
              }}
            >
              <table className="tableParams">
                <tr>
                  <th className="standardTh"> </th>
                  <th className="customTh" colSpan="5">
                    Tabela de Temperatura(°C)
                  </th>
                </tr>
                <tr className="standardTr">
                  <td className="customTd">Sensor 1</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor1Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino1Sensor1Temperature
                      );
                    }}
                  >
                    {[...paramsArduino1Sensor1Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor1Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino2Sensor1Temperature
                      );
                    }}
                  >
                    {[...paramsArduino2Sensor1Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor1Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino3Sensor1Temperature
                      );
                    }}
                  >
                    {[...paramsArduino3Sensor1Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor1Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino4Sensor1Temperature
                      );
                    }}
                  >
                    {[...paramsArduino4Sensor1Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor1Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino5Sensor1Temperature
                      );
                    }}
                  >
                    {[...paramsArduino5Sensor1Temperature].pop()}
                  </td>
                </tr>

                <tr className="standardTr">
                  <td className="customTd">Sensor 2</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor2Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino1Sensor2Temperature
                      );
                    }}
                  >
                    {[...paramsArduino1Sensor2Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor2Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino2Sensor2Temperature
                      );
                    }}
                  >
                    {[...paramsArduino2Sensor2Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor2Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino3Sensor2Temperature
                      );
                    }}
                  >
                    {[...paramsArduino3Sensor2Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor2Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino4Sensor2Temperature
                      );
                    }}
                  >
                    {[...paramsArduino4Sensor2Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor2Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino5Sensor2Temperature
                      );
                    }}
                  >
                    {[...paramsArduino5Sensor2Temperature].pop()}
                  </td>
                </tr>
                <tr className="standardTr">
                  <td className="customTd">Sensor 3</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor3Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino1Sensor3Temperature
                      );
                    }}
                  >
                    {[...paramsArduino1Sensor3Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor3Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino2Sensor3Temperature
                      );
                    }}
                  >
                    {[...paramsArduino2Sensor3Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor3Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino3Sensor3Temperature
                      );
                    }}
                  >
                    {[...paramsArduino3Sensor3Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor3Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino4Sensor3Temperature
                      );
                    }}
                  >
                    {[...paramsArduino4Sensor3Temperature].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor3Temperature].pop(),
                        "temperature"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Temperatura",
                        paramsArduino5Sensor3Temperature
                      );
                    }}
                  >
                    {[...paramsArduino5Sensor3Temperature].pop()}
                  </td>
                </tr>
                <tr className="customTr">
                  <td> </td>
                  <td className="customTd">Arduino 1</td>
                  <td className="customTd">Arduino 2</td>
                  <td className="customTd">Arduino 3</td>
                  <td className="customTd">Arduino 4</td>
                  <td className="customTd">Arduino 5</td>
                </tr>
              </table>
            </div>
            <div
              className="legend"
              style={{
                display: `${displayT}`,
              }}
            >
              <table className="tableLegend">
                <tr>
                  <td>Baixa</td>
                  <td>Ideal</td>
                  <td>Alta</td>
                </tr>
                <tr>
                  <td className="legendDryT"></td>
                  <td className="legendIdealT"></td>
                  <td className="legendDampT"></td>
                </tr>
              </table>
            </div>

            <div
              className="tableHygroscopicBalance"
              style={{
                display: `${displayE}`,
              }}
            >
              <table className="tableParams">
                <tr>
                  <th className="standardTh"> </th>
                  <th className="customTh" colSpan="5">
                    Tabela de Equilíbrio Higroscópico(%)
                  </th>
                </tr>
                <tr className="standardTr">
                  <td className="customTd">Sensor 1</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor1HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino1Sensor1HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino1Sensor1HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor1HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino2Sensor1HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino2Sensor1HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor1HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino3Sensor1HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino3Sensor1HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor1HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino4Sensor1HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino4Sensor1HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor1HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino5Sensor1HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino5Sensor1HygroscopicBalance].pop()}
                  </td>
                </tr>

                <tr className="standardTr">
                  <td className="customTd">Sensor 2</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor2HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino1Sensor2HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino1Sensor2HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor2HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino2Sensor2HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino2Sensor2HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor2HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino3Sensor2HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino3Sensor2HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor2HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino4Sensor2HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino4Sensor2HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor2HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino5Sensor2HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino5Sensor2HygroscopicBalance].pop()}
                  </td>
                </tr>
                <tr className="standardTr">
                  <td className="customTd">Sensor 3</td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino1Sensor3HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino1Sensor3HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino1Sensor3HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino2Sensor3HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino2Sensor3HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino2Sensor3HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino3Sensor3HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino3Sensor3HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino3Sensor3HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino4Sensor3HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino4Sensor3HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino4Sensor3HygroscopicBalance].pop()}
                  </td>
                  <td
                    style={{
                      background: `${color(
                        [...paramsArduino5Sensor3HygroscopicBalance].pop(),
                        "hygroscopicBalance"
                      )}`,
                    }}
                    className="standardTd"
                    onClick={() => {
                      buildLineChart(
                        "Equilíbrio higrosgópico",
                        paramsArduino5Sensor3HygroscopicBalance
                      );
                    }}
                  >
                    {[...paramsArduino5Sensor3HygroscopicBalance].pop()}
                  </td>
                </tr>
                <tr className="customTr">
                  <td className="standartTd"></td>
                  <td className="customTd">Arduino 1</td>
                  <td className="customTd">Arduino 2</td>
                  <td className="customTd">Arduino 3</td>
                  <td className="customTd">Arduino 4</td>
                  <td className="customTd">Arduino 5</td>
                </tr>
              </table>
            </div>
            <div
              className="legend"
              style={{
                display: `${displayE}`,
              }}
            >
              <table className="tableLegend">
                <tr>
                  <td>Seco</td>
                  <td>Ideal</td>
                  <td>Úmido</td>
                </tr>
                <tr>
                  <td className="legendDryEQ"></td>
                  <td className="legendIdealEQ"></td>
                  <td className="legendDampEQ"></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
