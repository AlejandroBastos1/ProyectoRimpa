import React from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: authErrors } = useAuth();
  const navigation = useNavigate();


  const onSubmitRegister = handleSubmit(async (values) => {
    console.log(values);
    signUp(values);
  });


  useEffect(() => {
    if (isAuthenticated) navigation("/operacion");
  }, [isAuthenticated]);

  const [libretaMilitar, setLibretaMilitar] = useState('');

  const handleChange = (event) => {
    const limit = event.target.value.slice(0,10);
    setLibretaMilitar(limit)
  };

  return (
    <div className="contenedorRegistro">
      <div className="contenedorTituloRegistro">
        <h1>REGISTRO</h1>
      </div>

      <div className="contenedorFormularioRegistro">
        {authErrors.map((error, i) => (
          <div className="errorFormularioRegistro" key={i}>
            {error}
          </div>
        ))}

        <form className="formularioRegistro" onSubmit={onSubmitRegister}>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Nombre"
          />

          {errors.name && (
            <div className="contenedorCampoObligatorio">
              <p className="campoObligatorio">* Campo obligatorio *</p>
            </div>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />

          {errors.email && (
            <div className="contenedorCampoObligatorio">
              <p className="campoObligatorio">* Campo obligatorio *</p>
            </div>
          )}

          <input
            type="text"
            {...register("libretaMilitar", {
              required: true,
              minLength: 10,
            })}
            placeholder="Libreta Militar"
            maxLength={10}
            onChange={handleChange}
          />

          {errors.libretaMilitar && (
            <div className="contenedorCampoObligatorio">
              <p className="campoObligatorio">* Campo obligatorio *</p>
            </div>
          )}

          <input
            type="password"
            {...register("contraseña", { required: true, minLength: 8 })}
            placeholder="Contraseña"
          />

          {errors.contraseña && (
            <div className="contenedorCampoObligatorio">
              <p className="campoObligatorio">* Campo obligatorio *</p>
            </div>
          )}

          <button type="submit">Registrarse</button>
        </form>
        <p className="tienesCuenta">
          ¿Ya tienes una cuenta?
          <Link to="/">¡Logueate!</Link>
        </p>
      </div>
    </div>
  );
}
