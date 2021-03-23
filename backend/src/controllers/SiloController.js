const db = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async store(req, res) {
    const { name, date, time, id } = req.body;

    const idSilo = crypto.randomBytes(4).toString("HEX");

    function writeEnterpriseData(id, name, date, time, idSilo) {
      db.ref(`enterprises/${id}/silos/${idSilo}`).set({
        id: idSilo,
        name: name,
        date: date,
        time: time,
        desensilageDate: "Em período de estocagem",
        average: "-",
        timeMeasure: {
          0: "-",
        },
        arduinos: {
          one: {
            sensores: {
              one: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              two: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              three: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
            },
          },
          two: {
            sensores: {
              one: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              two: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              three: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
            },
          },
          three: {
            sensores: {
              one: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              two: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              three: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
            },
          },
          four: {
            sensores: {
              one: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              two: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              three: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
            },
          },
          five: {
            sensores: {
              one: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              two: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
              three: {
                temperature: {
                  0: "-",
                },
                humidity: {
                  0: "-",
                },
                hygroscopic_balance: {
                  0: "-",
                },
              },
            },
          },
        },
      });
    }

    writeEnterpriseData(id, name, date, time, idSilo);

    return res.json({ idSilo });
  },

  async list(req, res) {
    const enterprise_id = req.headers.authorization;

    const bags = db.ref(`/enterprises/${enterprise_id}/silos`);

    let silos = [];

    bags.orderByChild("date").on("child_added", function (snapshot) {
      silos.push(snapshot.val());
    });

    const total = Object.keys(silos).length;

    return res.json({ silos, total });
  },

  async index(req, res) {
    const enterprise_id = req.headers.authorization;
    const { id } = await req.params;

    const bag = db.ref(`/enterprises/${enterprise_id}/silos/${id}`);

    let silo;

    var timeMeasure = [];

    // Arduino 1
    var paramsArduino1Sensor1Humidity = [];
    var paramsArduino1Sensor2Humidity = [];
    var paramsArduino1Sensor3Humidity = [];

    var paramsArduino1Sensor1Temperature = [];
    var paramsArduino1Sensor2Temperature = [];
    var paramsArduino1Sensor3Temperature = [];

    var paramsArduino1Sensor1HygroscopicBalance = [];
    var paramsArduino1Sensor2HygroscopicBalance = [];
    var paramsArduino1Sensor3HygroscopicBalance = [];

    // Arduino 2
    var paramsArduino2Sensor1Humidity = [];
    var paramsArduino2Sensor2Humidity = [];
    var paramsArduino2Sensor3Humidity = [];

    var paramsArduino2Sensor1Temperature = [];
    var paramsArduino2Sensor2Temperature = [];
    var paramsArduino2Sensor3Temperature = [];

    var paramsArduino2Sensor1HygroscopicBalance = [];
    var paramsArduino2Sensor2HygroscopicBalance = [];
    var paramsArduino2Sensor3HygroscopicBalance = [];

    // Arduino 3
    var paramsArduino3Sensor1Humidity = [];
    var paramsArduino3Sensor2Humidity = [];
    var paramsArduino3Sensor3Humidity = [];

    var paramsArduino3Sensor1Temperature = [];
    var paramsArduino3Sensor2Temperature = [];
    var paramsArduino3Sensor3Temperature = [];

    var paramsArduino3Sensor1HygroscopicBalance = [];
    var paramsArduino3Sensor2HygroscopicBalance = [];
    var paramsArduino3Sensor3HygroscopicBalance = [];

    // Arduino 4
    var paramsArduino4Sensor1Humidity = [];
    var paramsArduino4Sensor2Humidity = [];
    var paramsArduino4Sensor3Humidity = [];

    var paramsArduino4Sensor1Temperature = [];
    var paramsArduino4Sensor2Temperature = [];
    var paramsArduino4Sensor3Temperature = [];

    var paramsArduino4Sensor1HygroscopicBalance = [];
    var paramsArduino4Sensor2HygroscopicBalance = [];
    var paramsArduino4Sensor3HygroscopicBalance = [];

    // Arduino 5
    var paramsArduino5Sensor1Humidity = [];
    var paramsArduino5Sensor2Humidity = [];
    var paramsArduino5Sensor3Humidity = [];

    var paramsArduino5Sensor1Temperature = [];
    var paramsArduino5Sensor2Temperature = [];
    var paramsArduino5Sensor3Temperature = [];

    var paramsArduino5Sensor1HygroscopicBalance = [];
    var paramsArduino5Sensor2HygroscopicBalance = [];
    var paramsArduino5Sensor3HygroscopicBalance = [];

    bag.orderByKey().once("value", function (snapshot) {
      var name = snapshot.val().name;
      var average = snapshot.val().average;
      var date = snapshot.val().date;
      var time = snapshot.val().time;
      var desensilageDate = snapshot.val().desensilageDate;
      var arduinos = snapshot.val().arduinos;
      timeMeasure = Object.values(snapshot.val().timeMeasure);

      // Arduino 1
      paramsArduino1Sensor1Humidity = Object.values(
        arduinos.one.sensores.one.humidity
      );

      paramsArduino1Sensor2Humidity = Object.values(
        arduinos.one.sensores.two.humidity
      );
      paramsArduino1Sensor3Humidity = Object.values(
        arduinos.one.sensores.three.humidity
      );

      paramsArduino1Sensor1Temperature = Object.values(
        arduinos.one.sensores.one.temperature
      );
      paramsArduino1Sensor2Temperature = Object.values(
        arduinos.one.sensores.two.temperature
      );
      paramsArduino1Sensor3Temperature = Object.values(
        arduinos.one.sensores.three.temperature
      );

      paramsArduino1Sensor1HygroscopicBalance = Object.values(
        arduinos.one.sensores.one.hygroscopic_balance
      );
      paramsArduino1Sensor2HygroscopicBalance = Object.values(
        arduinos.one.sensores.two.hygroscopic_balance
      );
      paramsArduino1Sensor3HygroscopicBalance = Object.values(
        arduinos.one.sensores.three.hygroscopic_balance
      );

      // Arduino 2
      paramsArduino2Sensor1Humidity = Object.values(
        arduinos.two.sensores.one.humidity
      );
      paramsArduino2Sensor2Humidity = Object.values(
        arduinos.two.sensores.two.humidity
      );
      paramsArduino2Sensor3Humidity = Object.values(
        arduinos.two.sensores.three.humidity
      );

      paramsArduino2Sensor1Temperature = Object.values(
        arduinos.two.sensores.one.temperature
      );
      paramsArduino2Sensor2Temperature = Object.values(
        arduinos.two.sensores.two.temperature
      );
      paramsArduino2Sensor3Temperature = Object.values(
        arduinos.two.sensores.three.temperature
      );

      paramsArduino2Sensor1HygroscopicBalance = Object.values(
        arduinos.two.sensores.one.hygroscopic_balance
      );
      paramsArduino2Sensor2HygroscopicBalance = Object.values(
        arduinos.two.sensores.two.hygroscopic_balance
      );
      paramsArduino2Sensor3HygroscopicBalance = Object.values(
        arduinos.two.sensores.three.hygroscopic_balance
      );

      // Arduino 3
      paramsArduino3Sensor1Humidity = Object.values(
        arduinos.three.sensores.one.humidity
      );
      paramsArduino3Sensor2Humidity = Object.values(
        arduinos.three.sensores.two.humidity
      );
      paramsArduino3Sensor3Humidity = Object.values(
        arduinos.three.sensores.three.humidity
      );

      paramsArduino3Sensor1Temperature = Object.values(
        arduinos.three.sensores.one.temperature
      );
      paramsArduino3Sensor2Temperature = Object.values(
        arduinos.three.sensores.two.temperature
      );
      paramsArduino3Sensor3Temperature = Object.values(
        arduinos.three.sensores.three.temperature
      );

      paramsArduino3Sensor1HygroscopicBalance = Object.values(
        arduinos.three.sensores.one.hygroscopic_balance
      );
      paramsArduino3Sensor2HygroscopicBalance = Object.values(
        arduinos.three.sensores.two.hygroscopic_balance
      );
      paramsArduino3Sensor3HygroscopicBalance = Object.values(
        arduinos.three.sensores.three.hygroscopic_balance
      );

      // Arduino 4
      paramsArduino4Sensor1Humidity = Object.values(
        arduinos.four.sensores.one.humidity
      );
      paramsArduino4Sensor2Humidity = Object.values(
        arduinos.four.sensores.two.humidity
      );
      paramsArduino4Sensor3Humidity = Object.values(
        arduinos.four.sensores.three.humidity
      );

      paramsArduino4Sensor1Temperature = Object.values(
        arduinos.four.sensores.one.temperature
      );
      paramsArduino4Sensor2Temperature = Object.values(
        arduinos.four.sensores.two.temperature
      );
      paramsArduino4Sensor3Temperature = Object.values(
        arduinos.four.sensores.three.temperature
      );

      paramsArduino4Sensor1HygroscopicBalance = Object.values(
        arduinos.four.sensores.one.hygroscopic_balance
      );
      paramsArduino4Sensor2HygroscopicBalance = Object.values(
        arduinos.four.sensores.two.hygroscopic_balance
      );
      paramsArduino4Sensor3HygroscopicBalance = Object.values(
        arduinos.four.sensores.three.hygroscopic_balance
      );

      // Arduino 5
      paramsArduino5Sensor1Humidity = Object.values(
        arduinos.five.sensores.one.humidity
      );
      paramsArduino5Sensor2Humidity = Object.values(
        arduinos.five.sensores.two.humidity
      );
      paramsArduino5Sensor3Humidity = Object.values(
        arduinos.five.sensores.three.humidity
      );

      paramsArduino5Sensor1Temperature = Object.values(
        arduinos.five.sensores.one.temperature
      );
      paramsArduino5Sensor2Temperature = Object.values(
        arduinos.five.sensores.two.temperature
      );
      paramsArduino5Sensor3Temperature = Object.values(
        arduinos.five.sensores.three.temperature
      );

      paramsArduino5Sensor1HygroscopicBalance = Object.values(
        arduinos.five.sensores.one.hygroscopic_balance
      );
      paramsArduino5Sensor2HygroscopicBalance = Object.values(
        arduinos.five.sensores.two.hygroscopic_balance
      );
      paramsArduino5Sensor3HygroscopicBalance = Object.values(
        arduinos.five.sensores.three.hygroscopic_balance
      );

      silo = {
        name,
        average,
        date,
        time,
        desensilageDate,
        id,
        timeMeasure,
      };
    });

    return res.json({
      silo,
      paramsArduino1Sensor1Humidity,
      paramsArduino1Sensor2Humidity,
      paramsArduino1Sensor3Humidity,

      paramsArduino1Sensor1Temperature,
      paramsArduino1Sensor2Temperature,
      paramsArduino1Sensor3Temperature,

      paramsArduino1Sensor1HygroscopicBalance,
      paramsArduino1Sensor2HygroscopicBalance,
      paramsArduino1Sensor3HygroscopicBalance,

      paramsArduino2Sensor1Humidity,
      paramsArduino2Sensor2Humidity,
      paramsArduino2Sensor3Humidity,

      paramsArduino2Sensor1Temperature,
      paramsArduino2Sensor2Temperature,
      paramsArduino2Sensor3Temperature,

      paramsArduino2Sensor1HygroscopicBalance,
      paramsArduino2Sensor2HygroscopicBalance,
      paramsArduino2Sensor3HygroscopicBalance,

      paramsArduino3Sensor1Humidity,
      paramsArduino3Sensor2Humidity,
      paramsArduino3Sensor3Humidity,

      paramsArduino3Sensor1Temperature,
      paramsArduino3Sensor2Temperature,
      paramsArduino3Sensor3Temperature,

      paramsArduino3Sensor1HygroscopicBalance,
      paramsArduino3Sensor2HygroscopicBalance,
      paramsArduino3Sensor3HygroscopicBalance,

      paramsArduino4Sensor1Humidity,
      paramsArduino4Sensor2Humidity,
      paramsArduino4Sensor3Humidity,

      paramsArduino4Sensor1Temperature,
      paramsArduino4Sensor2Temperature,
      paramsArduino4Sensor3Temperature,

      paramsArduino4Sensor1HygroscopicBalance,
      paramsArduino4Sensor2HygroscopicBalance,
      paramsArduino4Sensor3HygroscopicBalance,

      paramsArduino5Sensor1Humidity,
      paramsArduino5Sensor2Humidity,
      paramsArduino5Sensor3Humidity,

      paramsArduino5Sensor1Temperature,
      paramsArduino5Sensor2Temperature,
      paramsArduino5Sensor3Temperature,

      paramsArduino5Sensor1HygroscopicBalance,
      paramsArduino5Sensor2HygroscopicBalance,
      paramsArduino5Sensor3HygroscopicBalance,
    });
  },

  async destroy(req, res) {
    const { id } = req.params;
    const enterpriseId = req.headers.authorization;

    const silo = db.ref(`enterprises/${enterpriseId}/silos/${id}`);

    silo.remove();

    return res.json({ error: "Exclusão realizada com sucesso!" });
  },

  async update(req, res) {
    const { siloId, enterpriseId, date } = await req.body;

    const siloDesensilageDate = db.ref(
      `enterprises/${enterpriseId}/silos//${siloId}/`
    );

    siloDesensilageDate.update({ desensilageDate: date });

    return res.json({ error: "inexistente" });
  },
};
