const db = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { id } = await req.body;

    const enterprises = db.ref(`/enterprises/`);

    let enterprise = "";
    let error = "inexistente";

    enterprises
      .orderByChild("id")
      .equalTo(id)
      .on("child_added", function (snapshot) {
        enterprise = snapshot.val();
      });

    if (enterprise != "") {
      return res.json({ enterprise, error });
    }

    return res.json({ error: "Empresa não encontrada!" });
  },
};
