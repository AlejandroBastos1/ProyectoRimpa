import Usuario from "../models/UsuarioSchema.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, libretaMilitar, email, contraseña } = req.body;

  try {
    const userFoundByEmail = await Usuario.findOne({ email });
    if (userFoundByEmail)
      return res
        .status(400)
        .json(["Ya hay un usuario con este email registrado"]);

    const userFoundByLibreta = await Usuario.findOne({ libretaMilitar });
    if (userFoundByLibreta)
      return res
        .status(400)
        .json(["Ya hay un usuario con este numero de libreta registrado"]);

    const passwordHash = await bcrypt.hash(contraseña, 5);
    0;

    const newUser = new Usuario({
      name,
      libretaMilitar,
      email,
      contraseña: passwordHash,
    });

    const UserSaved = await newUser.save();
    const token = await createAccesToken({ id: UserSaved._id });

    res.cookie("token", token);
    res.json({
      id: UserSaved._id,
      name: UserSaved.name,
      email: UserSaved.email,
      libretaMilitar: UserSaved.libretaMilitar,
      message: "Creado usuario satisfactoriamente",
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const userFound = await Usuario.findOne({ email });

    if (!userFound)
      return res.status(400).json({ message: "contraseña o email incorrecto" });

    const isMatch = await bcrypt.compare(contraseña, userFound.contraseña);
    if (!isMatch)
      return res.status(400).json({ message: "contraseña o email incorrecto" });

    const token = await createAccesToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
      libretaMilitar: userFound.libretaMilitar,
      mensaje: "usuario logueado correctamente y token generado con el siguiente valor:",
      token : token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await Usuario.findById(req.user.id);

  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    name: userFound.name,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
  res.send("profile");
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return console.log("no hay token");

  jwt.verify(token, "keysecret1", async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await Usuario.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
      libretaMilitar: userFound.libretaMilitar,
      message: "PASO EL FILTRO",
    });
  });
};
