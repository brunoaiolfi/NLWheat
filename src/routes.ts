import { Router } from "express";
import { AuthenticateUserControler } from "./controllers/AuthenticateUserControler";
import { CreateMessageControler } from "./controllers/CreateMessageControle";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserControler().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageControler().handle )

export {router}