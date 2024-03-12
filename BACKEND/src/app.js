import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import routerIntegrantesP from "./routes/integrantesPeloton.routes.js";
import routerPelotones from "./routes/pelotones.routes.js";
import routerAviones from "./routes/aviones.routes.js";
import routerUnidadesM from "./routes/unidadesMilitares.routes.js";
import routerIntegrantesC from "./routes/integrantesCabina.routes.js";
import routerMateriales from "./routes/material.routes.js";
import routerAuth from "./routes/auth.routes.js";

import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());


app.use(
  routerIntegrantesP,
  routerPelotones,
  routerAviones,
  routerUnidadesM,
  routerIntegrantesC,
  routerMateriales,
  routerAuth
);

export default app;
