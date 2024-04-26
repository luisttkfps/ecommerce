import AuthComercianteController from '#controllers/Comerciante/Auth'
import MainComercianteController from '#controllers/Comerciante/Main'
import router from '@adonisjs/core/services/router'

router.post('/comerciantes', [MainComercianteController, 'criar'])
router.get('/comerciantes/:id', [MainComercianteController, 'index'])
router.post('/comerciantes/auth', [AuthComercianteController, 'criar'])
router.put('/comerciantes', [MainComercianteController, 'alterar'])
