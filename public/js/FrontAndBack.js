document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.getElementById("saveTransaction");

  
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let articulo = document.getElementById("articulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let cantidad = document.getElementById("cantidad").value;
    let ubicacion = document.getElementById("ubicacion").value;
    
    


    let transaction = { articulo: articulo, descripcion: descripcion, cantidad: cantidad, ubicacion: ubicacion };
    let transactionJson = JSON.stringify(transaction);

    fetch('http://localhost:3000/Rproducto', {
      method: 'POST',
      body: transactionJson,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      console.log('Respuesta del servidor:', data);
      
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      
    });
  });
});
