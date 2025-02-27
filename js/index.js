/**
 * enunciado:
 * EXAMEN
Se desea llevar un control de los estudiantes que
asisten a presentar un examen. Se tiene por cada
participante: nombre, cédula, sexo y nota. Se requiere
de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
valor del examen y el mínimo aprobatorio.
Estructuras de datos recomendadas
 Cl_examen: valor, minAprueba
 Cl_estudiante: nombre, cedula (‘F’ - ‘M’), sexo y nota
 */
import Cl_vExamen from "./Cl_vExamen.js";
import Cl_mExamen from "./Cl_mExamen.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_index {
  constructor() {
    let vista = new Cl_vExamen();
    let modelo = new Cl_mExamen();
    let controlador = new Cl_controlador(modelo, vista);
    vista.controlador = controlador;
  }
}
