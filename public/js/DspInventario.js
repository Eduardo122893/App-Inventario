document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById("formDespacharInventario");
  
    
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
  
      let articulo = document.getElementById("numeroArticulo").value;
      let cantidad = document.getElementById("cantidadDespachar").value;
      let ubicacion = document.getElementById("ubicacionDestino").value;
      
    
      let transaction = { articulo: articulo, cantidad: cantidad, ubicacion: ubicacion };
      let transactionJson = JSON.stringify(transaction);
  
      fetch('http://localhost:3000/Dproducto', {
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
  