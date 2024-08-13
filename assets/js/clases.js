export class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
  }

  datosPropietarios() {
    return `${this.nombre} - ${this.telefono}`
  }
}

export class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono)
    this.tipo = tipo
  }
}

export class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo)
    this.nombreMascota = nombreMascota
    this.enfermedad = enfermedad
  }
}

export class Consultorio {
  #mascotas
  constructor(nombre, mascota) {
    this.nombre = nombre
    this.#mascotas = [mascota]
  }

  get mascotas() {
    return this.#mascotas
  }

  set mascotas(nuevaMascota) {
    this.#mascotas.push(nuevaMascota)
  }
}