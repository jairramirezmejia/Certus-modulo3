const express = require("express");
const user = require("../models/user");
const userSchema = require("../models/user");
const router = express.Router();

// create user
//crea un usuario con lo requerido
router.post('/users',(req, res) => {
  const user = userSchema(req.body);
  user
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error}));
});

// exportar rutas
module.exports = router;
