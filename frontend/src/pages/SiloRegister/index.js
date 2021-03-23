import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function SiloRegister() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();

  const id = localStorage.getItem("enterpriseId");

  if (!id) {
    history.push("/");
  }

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      id,
      date,
      time,
      name,
    };

    try {
      await api.post("/silo", data);

      const options = {
        title: "Cadastrado",
        message: "Silo Cadastrado com sucesso!",
        buttons: [
          {
            label: "Ok",
            onClick: () => history.push("/home"),
          },
        ],
      };

      confirmAlert(options);
    } catch (err) {
      toast.error("Erro no servidor. Por favor tente novamente mais tarde!");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <div className="logo">
            <img src={logoImg} className="logoImg" alt="SILO BAG" />
          </div>
          <h1>Cadastrar Silo</h1>
          <p>Informe os dados do silo.</p>

          <Link className="back-link" to="/home">
            <FiArrowLeft size={20} color="#000000" />
            Home
          </Link>
        </section>

        <div className="linha-vertical"></div>
        <form onSubmit={handleRegister}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <input
            placeholder="Responsável pela silagem"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <ToastContainer
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            limit={1}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
