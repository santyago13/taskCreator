class ClassCard {
  #nombre;
  #descripcion;
  #estado;
  #prioridad;
  #id;
  #fechaCreacion;
  #fechaEdicion;

  constructor(
    nombre,
    descripcion,
    estado,
    prioridad,
    id,
    fechaCreacion,
    fechaEdicion
  ) {
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#estado = estado;
    this.#prioridad = prioridad;
    this.#id = crypto.randomUUID();
    this.#fechaCreacion = fechaCreacion;
    this.#fechaEdicion = fechaEdicion;
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

  get id() {
    return this.#id;
  }

  get fechaCreacion() {
    return this.#fechaCreacion;
  }

  get fechaEdicion() {
    return this.#fechaEdicion;
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

  set fechaEdicion(nuevaFechaEdicion) {
    this.#fechaEdicion = nuevaFechaEdicion;
  }

  toJSON() {
    return {
      nombre: this.#nombre,
      descripcion: this.#descripcion,
      estado: this.#estado,
      prioridad: this.#prioridad,
      id: this.#id,
      fechaCreacion: this.#fechaCreacion,
      fechaEdicion: this.#fechaEdicion,
    };
  }
}
