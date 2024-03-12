import instancia from "./axios.js";

export const registerRequest = (user) => instancia.post("/registro", user);

export const loginRequest = (user) => instancia.post("/login", user);

export const verifyTokenRequest = () => instancia.get("/verify");
