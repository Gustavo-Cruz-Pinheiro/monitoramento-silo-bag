import React, { useEffect } from "react";
import Chart from "chart.js";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import "./styles.css";

export default function ChartView(props) {
  const id = props.match.params.id;

  const history = useHistory();

  if (!id) {
    history.push("/");
  }

  const label = props.match.params.label;
  const data = JSON.parse(localStorage.getItem("dataParam"));
  const timeMeasure = JSON.parse(localStorage.getItem("timeMeasure"));

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

  function buildLineChart(label, data, timeMeasure) {
    var elNode = document.getElementById("LineChart");

    new Chart(elNode, {
      type: "line",

      data: {
        labels: timeMeasure,
        datasets: [
          {
            label: label,
            data: data,
            borderWidth: 1,
            fill: false,
            spanGaps: false,
            lineTension: 0.1,
            backgroundColor: "#00FF00",
            borderColor: "#00FF00",
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: `Gráfico de Linha da ${label} utilizando Chart.js`,
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Data e Hora",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Valor",
              },
            },
          ],
        },
      },
    });
  }

  useEffect(() => {
    buildLineChart(label, data, timeMeasureConvert);
  }, [label, data, timeMeasureConvert]);

  return (
    <div className="container-graph">
      <div className="content-graph">
        <div className="close">
          <BiArrowBack
            className="close-icon"
            onClick={() => {
              localStorage.removeItem("timeMeasure");
              localStorage.removeItem("dataParam");
              history.push(`/silo/${id}`);
            }}
          />
        </div>
        <div className="graph">
          <canvas id="LineChart"></canvas>
        </div>
      </div>
    </div>
  );
}
