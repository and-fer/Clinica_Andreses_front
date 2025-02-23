const form = document.getElementById('agregarForm')
const apiURL = 'http://localhost:8080'

form.addEventListener('submit', function (event) {
   event.preventDefault()

   const matricula = document.getElementById('matricula').value
   const apellido = document.getElementById('apellido').value
   const nombre = document.getElementById('nombre').value

   // llamando al endpoint de agregar
   const datosFormulario = {
      matricula,
      apellido,
      nombre,
   }

   fetch(`${apiURL}/odontologo/guardar`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosFormulario),
   })
      .then(response => response.json())
      .then(data => {
         console.log(data)
         alert('Odontólogo agregado con éxito')
         form.reset() // Resetear el formulario
      })
      .catch(error => {
         console.error('Error agregando odontólogo:', error)
      })
})
