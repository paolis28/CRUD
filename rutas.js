const express = require('express')
const routes = express.Router()

routes.get('/clientes/:id_cliente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM normalizacion.clientes WHERE id_cliente = ?', [req.params.id_cliente],(err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })       
    })
})

routes.get('/productos/:id_producto', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM normalizacion.productos WHERE id_producto = ?', [req.params.id_producto],(err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })       
    })
})

routes.post('/clientes', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO normalizacion.clientes set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cliente añadido')
        })
    })
})

routes.post('/productos', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO normalizacion.productos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto añadido')
        })
    })
})

routes.put('/clientes/:id_cliente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE normalizacion.clientes set ? WHERE id_cliente = ?', [req.body, req.params.id_cliente], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cliente actualizado!')
        })
    })
})

routes.put('/productos/:id_producto', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE normalizacion.productos set ? WHERE id_producto = ?', [req.body, req.params.id_producto], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto actualizado!')
        })
    })
})

routes.delete('/clientes/:id_cliente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM normalizacion.clientes WHERE id_cliente = ?',[req.params.id_cliente], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cliente eliminado')
        })
    })
})

routes.delete('/productos/:id_producto', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM normalizacion.productos WHERE id_producto = ?',[req.params.id_producto], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto eliminado')
        })
    })
})

module.exports = routes