const { response } = require('express');
const { sql } = require('../db/conection');

const Cproducto = async (req, res) => {
    
    try {
        const { articulo } = req.query;  // Obtener el parámetro de la consulta

        const request = new sql.Request();

        // Si existe el parámetro 'articulo', lo incluimos en la consulta; si no, enviamos NULL
        if (articulo) {
            request.input('articulo', sql.NVarChar(100), articulo);
        } else {
            request.input('articulo', sql.NVarChar(100), null);
        }

        const result = await request.execute('ConsultarProductoPorArticulo');

        if (articulo && result.recordset.length === 0) {
            return res.status(404).json({
                message: 'Producto no encontrado',
            });
        }

        res.status(200).json({
            message: articulo ? 'Producto encontrado' : 'Productos encontrados',
            data: result.recordset,
        });

    } catch (err) {
        console.error('Error al consultar el producto', err);

        res.status(500).json({
            message: 'Error al consultar el producto',
            error: err.message,
        });
    }
};


module.exports = {
    Cproducto,
};
