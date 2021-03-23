import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function Profile() {
  const [id] = useState(localStorage.getItem("enterpriseId"));
  const [name, setName] = useState(localStorage.getItem("enterpriseName"));
  const [cadastro, setCadastro] = useState(
    localStorage.getItem("enterpriseCadastro")
  );
  const [email, setEmail] = useState(localStorage.getItem("enterpriseEmail"));
  const [whatsapp, setWhatsapp] = useState(
    localStorage.getItem("enterpriseWhatsapp")
  );

  const history = useHistory();

  if (!id) {
    history.push("/");
  }

  const data = {
    id,
    name,
    email,
    cadastro,
    whatsapp,
  };

  async function handleUpdate(e) {
    e.preventDefault();

    async function update() {
      try {
        const response = await api.put("/profile", data);

        let error = response.data.error;

        if (error === "inexistente") {
          localStorage.setItem("enterpriseName", name);
          localStorage.setItem("enterpriseEmail", email);
          localStorage.setItem("enterpriseCadastro", cadastro);
          localStorage.setItem("enterpriseWhatsapp", whatsapp);

          history.push("/home");
        } else {
          toast.error(`Erro nas alterações dos dados. ${error}`);
        }
      } catch (err) {
        toast.error("Erro no servidor. Por favor tente novamente mais tarde!");
      }
    }

    const options = {
      title: "Confirmação",
      message: "Tem certeza que deseja alterar esta conta?",
      buttons: [
        {
          label: "Sim",
          onClick: () => update(),
        },
        {
          label: "Não",
          onClick: () => history.push("/home"),
        },
      ],
    };

    confirmAlert(options);
  }

  async function handleDelete(e) {
    e.preventDefault();

    const options = {
      title: "Confirmação",
      message: "Tem certeza que deseja excluir esta conta?",
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
        const response = await api.delete("/profile", {
          headers: {
            Authorization: id,
          },
        });

        const error = response.data.error;

        if (error === "Exclusão realizada com sucesso!") {
          localStorage.clear();

          history.push("/");
        }
      } catch (err) {
        toast.error("Erro no servidor. Por favor tente novamente mais tarde!");
      }
    }
  }

  return (
    <div className="profile-container">
      <div className="content">
        <section>
          <div className="logo">
            <img src={logoImg} className="logoImg" alt="SILO BAG" />
          </div>
          <h1>Alterar Perfil</h1>
          <p>
            Altere os campos ao lado e clique em "confirmar" para atualizar o
            seu perfil.
          </p>

          <Link className="back-link" to="/home">
            <FiArrowLeft size={20} color="#000000" />
            Home
          </Link>
        </section>
        <div className="linha-vertical"></div>
        <form onSubmit={handleUpdate}>
          <input value={id} disabled />

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
          <div className="formulario">
            <button className="button" type="submit">
              Confirmar
            </button>

            <button className="button" onClickCapture={handleDelete}>
              Excluir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
