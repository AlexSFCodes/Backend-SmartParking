import express from 'express';
import {RegisterUseCase} from '../domain/use-cases/register';
import {UsuarioMySQL} from '../infrastructure/repositories/MysqlUsuarioRepository';
const router = express.Router();

router.post('/register', async (req, res) => {
    const {nombre, idRol, email, contrasenia} = req.body;

    try {
        await new RegisterUseCase(new UsuarioMySQL()).registrar(nombre, idRol, email, contrasenia);
        res.json({ mensaje: "Se guardó correctamente" });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

export default router;