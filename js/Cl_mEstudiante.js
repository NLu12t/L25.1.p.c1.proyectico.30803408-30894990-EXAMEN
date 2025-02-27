export default class Cl_mEstudiante {
  constructor({ nombre, cedula, sexo, nota }) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.sexo = sexo;
    this.nota = nota;
  }
  set nombre(n) {
    this._nombre = n;
  }
  get nombre() {
    return this._nombre;
  }
  set cedula(c) {
    this._cedula = +c;
  }
  get cedula() {
    return this._cedula;
  }
  set sexo(s) {
    this._sexo = s.toUpperCase();
  }
  get sexo() {
    return this._sexo;
  }
  set nota(n) {
    this._nota = +n;
  }
  get nota() {
    return this._nota;
  }
}
