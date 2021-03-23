const db = require("../database/connection");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

module.exports = {
  async store(req, res) {
    const { name, email, cadastro, whatsapp } = req.body;

    const enterprises = db.ref("enterprises");

    let enterpriseList = [];

    enterprises.orderByChild("name").on("child_added", function (snapshot) {
      enterpriseList.push(snapshot.val());
    });

    for (let index = 0; index < enterpriseList.length; index++) {
      if (enterpriseList[index].cadastro == cadastro) {
        return res.json({ error: "CPF/CNPJ já cadastrado em outra conta!" });
      } else if (enterpriseList[index].email == email) {
        return res.json({ error: "E-mail já cadastrado em outra conta!" });
      } else if (enterpriseList[index].whatsapp == whatsapp) {
        return res.json({ error: "Whatsapp já cadastrado em outra conta!" });
      }
    }

    const id = crypto.randomBytes(4).toString("HEX");

    function writeEnterpriseData(id, name, cadastro, email, whatsapp) {
      db.ref("enterprises/" + id).set({
        id: id,
        name: name,
        cadastro: cadastro,
        email: email,
        whatsapp: whatsapp,
      });
    }

    writeEnterpriseData(id, name, cadastro, email, whatsapp);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "monitoramentosilobag@gmail.com",
        pass: "polietileno1996",
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: "monitoramentosilobag@gmail.com",
      to: email,
      subject: `Bem-vindo(a), ${name}! Sua ID de acesso`,
      text: `Olá, ${name}! Utilize esta chave de acesso para efetuar o login no sistema: \n \n ${id.toString()}`,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log("E-mail enviado com sucesso!");
      }
    });

    return res.json({ id, error: "inexistente" });
  },

  async index(req, res) {
    const { id } = req.body;

    const enterprises = db.ref("/enterprises");

    let enterprise = "";
    var error = "inexistente";

    enterprises
      .orderByKey()
      .equalTo(id)
      .on("child_added", function (snapshot) {
        enterprise = snapshot.val();
      });

    if (enterprise != "") {
      return res.json({ enterprise, error });
    }

    return res.json({ error: "Empresa não encontrada!" });
  },

  async update(req, res) {
    const { id, name, email, cadastro, whatsapp } = await req.body;

    const enterpriseRef = db.ref(`enterprises/`);
    let enterpriseList = [];

    enterpriseRef.orderByChild("name").on("child_added", function (snapshot) {
      enterpriseList.push(snapshot.val());
    });

    let enterpriseListFilter = enterpriseList.filter(
      (enterprise) => enterprise.id !== id
    );

    for (let index = 0; index < enterpriseListFilter.length; index++) {
      if (enterpriseListFilter[index].cadastro == cadastro) {
        return res.json({ error: "CPF/CNPJ já cadastrado em outra conta!" });
      } else if (enterpriseListFilter[index].email == email) {
        return res.json({ error: "E-mail já cadastrado em outra conta!" });
      } else if (enterpriseListFilter[index].whatsapp == whatsapp) {
        return res.json({ error: "Whatsapp já cadastrado em outra conta!" });
      }
    }

    const enterprise = db.ref(`enterprises/${id}`);

    function updateEnterpriseData(cadastro, email, whatsapp, name) {
      enterprise.update({
        cadastro: cadastro,
        email: email,
        whatsapp: whatsapp,
        name: name,
      });
    }

    updateEnterpriseData(cadastro, email, whatsapp, name);

    return res.json({ error: "inexistente" });
  },

  async destroy(req, res) {
    const id = req.headers.authorization;

    let enterprises = db.ref(`enterprises/${id}`);

    enterprises.remove();

    return res.json({ error: "Exclusão realizada com sucesso!" });
  },
};
