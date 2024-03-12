import {Router} from 'express'
import { newIntegrantesCabina,
        deleteIntegrantesCabina,
        putIntegrantesCabina,
        getIntegrantesCabina
    } from '../controllers/integrantesCabina.controller.js';


const routerIntegrantesC = Router();

routerIntegrantesC.post ('/api/integrantesCabina', newIntegrantesCabina );

routerIntegrantesC.get('/api/integrantesCabina', getIntegrantesCabina )

routerIntegrantesC.delete('/api/integrantesCabina', deleteIntegrantesCabina )

routerIntegrantesC.put('/api/integrantesCabina', putIntegrantesCabina )

export default routerIntegrantesC;