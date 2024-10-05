const { response }  = require('express');
const { sql } = require('../db/conection');


const Rproducto = async (req, res) => {
    try {
        const { articulo, descripcion, cantidad, ubicacion } = req.body;

        const result = await new sql.Request()
            .input('articulo', sql.NVarChar(100), articulo)
            .input('descripcion', sql.NVarChar(100), descripcion)
            .input('cantidad', sql.NVarChar(100), cantidad)
            .input('ubicacion', sql.NVarChar(100), ubicacion)
            .execute('InsertarProductoEnTabla');

        res.status(200).json({
            message: result.recordset
        });
        
    } catch (err) {
        if (err.message.includes('El artículo ya existe en el inventario')) {
            return res.status(400).json({
                message: 'El artículo ya existe en el inventario',
            });
        }

        console.error('Error al ejecutar el procedimiento almacenado', err);
        res.status(500).json({
            message: 'Error al actualizar el inventario',
            error: err.message,
        });
    }
};

module.exports = {
    Rproducto,
};
