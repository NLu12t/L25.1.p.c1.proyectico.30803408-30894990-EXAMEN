export default class Cl_controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarEstudiante() {
    this.modelo.procesarEstudiante(this.vista.procesarEstudiante());
    this.vista.reportarEstudiante(
      this.modelo.porcentajeDeAprobados(),
      this.modelo.estudianteMayorNota(),
      this.modelo.porcentajeDeChicasAprobadas()
    );
  }
  iniciarExamen(valor, minAprueba) {
    this.modelo.valor = +valor;
    this.modelo.minAprueba = +minAprueba;
  }
}
