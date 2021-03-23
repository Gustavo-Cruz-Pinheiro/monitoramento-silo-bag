import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function RegisterConfirmation() {
  const history = useHistory();

  return (
    <div className="confimation-container">
      <div className="confimartion-content">
        <img src={logoImg} className="logoImg" alt="SILO BAG" />

        <h1 className="title">Cadastro realizado com sucesso!</h1>

        <p className="instruction">
          Uma chave de acesso foi enviada ao seu e-mail. Utilize-a para fazer a
          autenticação no sistema.
        </p>

        <button
          className="returnButton"
          onClick={() => {
            history.push("/home");
          }}
        >
          <p className="returnText">
            <FiArrowLeft size={20} color="#000000" />
            Ir para o login
          </p>
        </button>
      </div>
    </div>
  );
}
