const { response }  = require('express');
const { sql } = require('../db/conection');


const Dproducto = async (req, res) => {
    try {
        const { articulo, cantidad, ubicacion } = req.body;

        const result = await new sql.Request()
            .input('articulo', sql.NVarChar(100), articulo)
            .input('cantidad', sql.NVarChar(100), cantidad)
            .input('ubicacion', sql.NVarChar(100), ubicacion)
            .execute('DespacharInventario');

        res.status(200).json({
            message: result.recordset
        });
        
    } catch (err) {
        if (err.message.includes('El artículo no existe en el inventario')) {
            return res.status(400).json({
                message: 'No se encontró el artículo con la cantidad y ubicación especificadas',
            });
        }

        console.error('Error al ejecutar el procedimiento almacenado', err);
        res.status(500).json({
            message: 'Error al despachar el inventario',
            error: err.message,
        });
    }
};

module.exports = {
    Dproducto,
};
