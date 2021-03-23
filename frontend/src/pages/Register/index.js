import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function Register() {
  const [name, setName] = useState("");
  const [cadastro, setCadastro] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      cadastro,
      email,
      whatsapp,
    };

    try {
      const response = await api.post("/register", data);

      let error = response.data.error;

      if (error === "inexistente") {
        history.push("/confirmation");
      } else {
        toast.error(`Erro no cadastro. ${error}`);
      }
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
          <h1>Solicitar Cadastro</h1>
          <p>Informe os dados da empresa.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={20} color="#000000" />
            Login
          </Link>
        </section>

        <div className="linha-vertical"></div>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da empresa"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            placeholder="CPF/CNPJ"
            value={cadastro}
            onChange={(e) => setCadastro(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            placeholder="WhatsApp. Ex: 67999999999"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            pattern="[0-9]{11}"
            type="tel"
            required
          />

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
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
