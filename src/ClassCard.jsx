class ClassCard {
  #nombre;
  #descripcion;
  #estado;
  #prioridad;

  constructor(
    nombre,
    descripcion,
    estado,
    prioridad,
  ) {
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#estado = estado;
    this.#prioridad = prioridad;
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }

  get descripcion() {
    return this.#descripcion;
  }

  get estado() {
    return this.#estado;
  }

  get prioridad() {
    return this.#prioridad;
  }

  // Setters
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set descripcion(nuevaDescripcion) {
    this.#descripcion = nuevaDescripcion;
  }

  set estado(nuevoEstado) {
    this.#estado = nuevoEstado;
  }

  set prioridad(nuevaPrioridad) {
    this.#prioridad = nuevaPrioridad;
  }



  toJSON() {
    return {
      nombre: this.#nombre,
      descripcion: this.#descripcion,
      estado: this.#estado,
      prioridad: this.#prioridad,
    };
  }
}

export default ClassCard;