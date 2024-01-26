/*
 Event Routes
 /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT } = require('../middlewares/validarJWT');
const { validarCampos } = require('../middlewares/validarCampos');

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const { isDate } = require('../helpers/isDate');

const router = Router();

// Validar todas las peticiones
router.use(validarJWT);

// Obtener Eventos
router.get('/', getEventos);

// Crear Evento
router.post('/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'fecha de inicio es obligatoria').custom(isDate),
        check('end', 'fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

// Actualizar Evento
router.put('/:id', [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'fecha de inicio es obligatoria').custom(isDate),
        check('end', 'fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ], actualizarEvento);

// Eliminar Evento
router.delete('/:id', eliminarEvento);


module.exports = router;