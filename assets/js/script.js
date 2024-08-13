import { Consultorio, Propietario, Animal, Mascota } from "./clases.js";

let mascota0 = new Mascota('John Bonachon', 'Oklahoma', '123123', 'Gato', 'Garfield', 'Tos de las perreras')

console.log(propietario)

let consultorio = new Consultorio('RIP Amigo', mascota0)

document.getElementById('formulario').addEventListener('submit', (e) => {
  e.preventDefault()
  
  let nombre = document.getElementById('propietario').value
  let telefono = document.getElementById('telefono').value
  let direccion = document.getElementById('direccion').value
  let nombreMascota = document.getElementById('nombreMascota').value
  let tipo = document.getElementById('tipo').value
  let enfermedad = document.getElementById('enfermedad').value

  let mascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
  consultorio.mascotas = mascota

  let datosHTML = ''
  consultorio.mascotas.forEach(animal => {
    datosHTML += `
      <li>${animal.datosPropietarios()} - mascota: ${animal.nombreMascota} - motivo consulta: ${animal.enfermedad}</li>
    `
  })

  document
    .querySelector("#resultado > ul")
    .innerHTML = datosHTML

  console.log("Estamos enviando un formulario 🕊️")
  
  e.target.reset()
})