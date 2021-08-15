const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonaSchema = new Schema({
  nombres: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  numeroDocumento: Number
});

const Persona = mongoose.model('persona', PersonaSchema);

module.exports = Persona;
