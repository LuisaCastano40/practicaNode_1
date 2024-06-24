//Importo variables de entorno
import {envs} from './config/env.js';
import {startServer} from './server/server.js';


const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
   
}

//funcion autoconvocada (la ejecutamos con los ()) -> agnóstica(sin nombre)
(async () =>{
    main();
})();