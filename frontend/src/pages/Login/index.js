import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { MdVpnKey } from "react-icons/md";

import api from "../../services/api";

import "./styles.css";

export default function Login() {
  const [id, setId] = useState("");

  const history = useHistory();

  const enterpriseId = localStorage.getItem("enterpriseId");

  if (enterpriseId) {
    history.push("/home");
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      const error = response.data.error;

      if (error === "inexistente") {
        const name = response.data.enterprise.name;
        const cadastro = response.data.enterprise.cadastro;
        const email = response.data.enterprise.email;
        const whatsapp = response.data.enterprise.whatsapp;

        localStorage.setItem("enterpriseId", id);
        localStorage.setItem("enterpriseName", name);
        localStorage.setItem("enterpriseCadastro", cadastro);
        localStorage.setItem("enterpriseEmail", email);
        localStorage.setItem("enterpriseWhatsapp", whatsapp);

        history.push("/home");
      } else {
        toast.error(`Falha no login. ${error} Por favor, Tente novamente!`);
      }
    } catch (err) {
      toast.error("Erro no servidor. Por favor tente novamente mais tarde!");
    }
  }

  return (
    <div className="login-container">
      <section className="father">
        <div className="form">
          <h1 className="logo">
            SIL<strong>O</strong> BAG
          </h1>
          <form onSubmit={handleLogin}>
            <div className="id-div">
              <MdVpnKey size={35} color="#fff" className="iconKey" />
              <input
                className="id-input"
                placeholder="Insira a ID da empresa"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>

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

            <button className="button" type="submit">
              Entrar
            </button>
          </form>
          <Link className="link" to="/register">
            Solicitar Cadastro
          </Link>
        </div>
      </section>
    </div>
  );
}
