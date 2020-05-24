import { Application, Router} from "https://deno.land/x/oak/mod.ts";
import {login, auth, guest} from './routes.ts';
import authMiddleware from './authMiddleware.ts';

const router = new Router();

router
.post('/login', login)
.get('/guest', guest)
.get('/auth', authMiddleware, auth);


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8080
app.listen({port: PORT});
console.log(`Started listening on port ${PORT}`);
