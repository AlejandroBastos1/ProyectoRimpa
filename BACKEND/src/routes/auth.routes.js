import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middleware/validateToken.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const routerAuth = Router();

routerAuth.post("/api/registro", validateSchema(registerSchema), register);
routerAuth.post("/api/login", validateSchema(loginSchema), login);
routerAuth.post("/api/logout", logout);
routerAuth.get("/api/verify", verifyToken)

export default routerAuth;
