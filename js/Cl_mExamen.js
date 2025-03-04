export default class Cl_mExamen {
  constructor(valor = 0, minAprueba = 0) {
    this.valor = +valor;
    this.minAprueba = +minAprueba;
    this.cntEstuAprobados = 0;
    this.cntEstudiantes = 0;
    this.mayor = 0;
    this.estuMayNota = "";
    this.cntChicas = 0;
    this.cntChicasAprobadas = 0;
  }
  //set y get de valor y minAprueba
  set valor(v) {
    this._valor = +v;
  }
  get valor() {
    return this._valor;
  }
  set minAprueba(m) {
    this._minAprueba = +m;
  }
  get minAprueba() {
    return this._minAprueba;
  }

  procesarEstudiante(estu) {
    this.cntEstudiantes++;
    if (estu.nota >= this.minAprueba) this.cntEstuAprobados++;
    if (estu.nota > this.mayor) {
      this.mayor = estu.nota;
      this.estuMayNota = estu.cedula;
    }
    if (estu.sexo === "F") this.cntChicas++;
    if ((estu.sexo === "F") && (estu.nota >= this.minAprueba))
      this.cntChicasAprobadas++;
  }

  porcentajeDeAprobados() {
    return (this.cntEstuAprobados / this.cntEstudiantes) * 100;
  }
  estudianteMayorNota() {
    return this.estuMayNota;
  }
  porcentajeDeChicasAprobadas() {
    if (this.cntChicas === 0) return 0;   //ojo
    else return (this.cntChicasAprobadas / this.cntChicas) * 100;
  }
}
