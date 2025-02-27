export default class Cl_vEstudiante {
  constructor() {
    this.inNombre = document.getElementById("estudianteForm_inNombre");
    this.inCedula = document.getElementById("estudianteForm_inCedula");
    this.inSexo = document.getElementById("estudianteForm_inSexo");
    this.inNota = document.getElementById("estudianteForm_inNota");
    this.btProcesar = document.getElementById("estudianteForm_btProcesar");
  }
  get nombre() {
    return this.inNombre.value;
  }
  get cedula() {
    return +this.inCedula.value;
  }
  get sexo() {
    return this.inSexo.value;
  }
  get nota() {
    return +this.inNota.value;
  }
}
