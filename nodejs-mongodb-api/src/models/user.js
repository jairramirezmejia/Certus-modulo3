const mongoose = require("mongoose");

// el esquema de un usuario que tendrá name, age, email los tipos y si se requiere
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

//importar el modelo de datos de usuario
module.exports = mongoose.model('User', userSchema)
