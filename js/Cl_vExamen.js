import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
export default class Cl_vExamen {
  constructor() {
    this.controlador = null;
    this.inValor = document.getElementById("mainForm_inValor");
    this.inMinAprueba = document.getElementById("mainForm_inMinAprueba");
    this.btIniciar = document.getElementById("mainForm_btIniciar");
    this.tabla = document.getElementById("mainForm_tabla");
    this.salida = document.getElementById("salida");

    this.vEstudiante = new Cl_vEstudiante();
    this.vEstudiante.btProcesar.onclick = () =>
      this.controlador.procesarEstudiante();
    this.vEstudiante.btProcesar.hidden = true;
    this.btIniciar.onclick = () => {
      this.controlador.iniciarExamen(
        this.inValor.value,
        this.inMinAprueba.value,
      );
      this.inValor.disabled = true;
      this.inMinAprueba.disabled = true;
      this.btIniciar.hidden = true;
      this.vEstudiante.btProcesar.hidden = false;
    };
  }
  procesarEstudiante() {
    this.mEstudiante = new Cl_mEstudiante({
      nombre: this.vEstudiante.nombre,
      cedula: this.vEstudiante.cedula,
      sexo: this.vEstudiante.sexo,
      nota: this.vEstudiante.nota,
    });
    return this.mEstudiante;
  }
  reportarEstudiante(
    porcentajeDeAprobados,
    estudianteMayorNota,
    porcentajeDeChicasAprobadas
  ) {
    this.tabla.innerHTML += `<tr>
      <td>${this.mEstudiante.nombre}</td>
      <td>${this.mEstudiante.cedula}</td>
      <td>${this.mEstudiante.sexo}</td>
      <td>${this.mEstudiante.nota}</td>
      </tr>`;
    this.salida.innerHTML = `
      <br>Porcentaje de estudiantes aprobados: ${porcentajeDeAprobados.toFixed(2)}%
      <br>Estudiante con la Mayor Nota: ${estudianteMayorNota}
      <br>Porcentaje de Chicas Aprobadas: ${porcentajeDeChicasAprobadas.toFixed(2)}% `;
  }
}
