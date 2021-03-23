import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdExitToApp } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function Home() {
  const [silos, setSilos] = useState([]);
  const [total, setTotal] = useState(0);

  function linkar(id) {
    localStorage.setItem("siloId", id);
    let link = `/silo/${id}`;
    return link;
  }

  const history = useHistory();

  const enterpriseId = localStorage.getItem("enterpriseId");

  if (!enterpriseId) {
    history.push("/");
  }

  const enterpriseName = localStorage.getItem("enterpriseName");

  useEffect(() => {
    if (enterpriseId) {
      api
        .get("/silos", {
          headers: {
            Authorization: enterpriseId,
          },
        })
        .then((response) => {
          setSilos(response.data.silos);
          setTotal(response.data.total);
        });
    }
  }, [silos, enterpriseId]);

  async function handleDeleteSilo(id) {
    const options = {
      title: "Confirmação",
      message: "Tem certeza que deseja excluir este silo?",
      buttons: [
        {
          label: "Sim",
          onClick: () => destroy(),
        },
        {
          label: "Não",
        },
      ],
    };

    confirmAlert(options);

    async function destroy() {
      try {
        await api.delete(`/siloremove/${id}`, {
          headers: {
            Authorization: enterpriseId,
          },
        });
        setSilos(silos.filter((silo) => silo.id !== id));
        setTotal(total - 1);
        // window.location.reload();
      } catch (err) {
        alert("Erro ao deletar silo, tente novamente.");
      }
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  function color(av) {
    if (av < 12.5) {
      return "rgb(254, 242, 0)";
    } else if (av >= 12.5 && av <= 14.0) {
      return "rgb(35, 177, 77)";
    } else if (av > 14.0) {
      return "rgb(237, 27, 36)";
    }
  }

  function dateFormater(date) {
    if (date === "Em período de estocagem") {
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
      dateStyle: "short",
      timeStyle: "short",
    }).format(data);
  }

  return (
    <div className="home-container">
      <div className="header">
        <img src={logoImg} className="logoImg" alt="SILO BAG" />
        <span>Bem-vindo(a), {enterpriseName}</span>
        <Link className="button" to="/cadastrar-silo">
          Cadastrar novo Silo
        </Link>

        <button
          onClick={() => {
            history.push("/profile");
          }}
          type="button"
        >
          <VscAccount size={30} color="#000" />
        </button>

        <button onClick={handleLogout}>
          <MdExitToApp className="iconExit" size={30} color="#000" />
        </button>
      </div>

      <div className="silos-container">
        <h1>Silos Cadastrados</h1>

        <div className="total">
          <p>Total de {total} silo(s).</p>
        </div>

        <ul>
          {silos.map((silo) => (
            <li key={silo.name}>
              <button
                className="delete"
                onClick={() => handleDeleteSilo(silo.id)}
                type="button"
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
              <div className="props-group1">
                <strong>Identificação:</strong>
                <p>{silo.id}</p>

                <strong>Nome do responsável:</strong>
                <p>{silo.name}</p>

                <strong>Data de silagem:</strong>
                <p>{dateFormater(silo.date)}</p>
              </div>
              <div className="props-group2">
                <strong>Data de desensilagem:</strong>
                <p>{dateFormater(silo.desensilageDate)}</p>

                <strong>
                  Taxa de equilíbrio (
                  {dateTimeFormater(
                    Object.values(silo.timeMeasure)[
                      Object.values(silo.timeMeasure).length - 1
                    ]
                  )}
                  ):
                </strong>
                <p
                  className="av"
                  style={{
                    background: `${color(
                      Object.values(silo.average)[
                        Object.values(silo.average).length - 1
                      ]
                    )}`,
                    width: "40px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#000",
                    border: "black solid 2px",
                  }}
                >
                  {
                    Object.values(silo.average)[
                      Object.values(silo.average).length - 1
                    ]
                  }
                </p>

                <strong>Hora de silagem:</strong>
                <p>{silo.time}</p>
              </div>
              <hr />
              <Link className="info" to={linkar(silo.id)}>
                <div className="more-info">
                  <p className="info">Clique aqui para mais informações</p>
                  <div className="three-points">
                    <BsThreeDotsVertical size={20} color="#000" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
