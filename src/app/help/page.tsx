"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "./help.module.css";
import Button from "../../components/Button";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HelpFormData } from "@/interfaces/components";

const HelpForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [form, setForm] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(9); // Contador inicializado a 8 segundos

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HelpFormData>({ mode: "onChange" });

  const onSubmit = async (data: HelpFormData) => {
    try {
      const response = await fetch("/api/help/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falló el envío del mensaje");
      }

      const result = await response.json();
      setForm(true);
      //alert(result.success);

      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        router.push("/");
      }, 8000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Un error inesperado ha ocurrido");
      }
    }
  };

  useEffect(() => {
    if (form && counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [form, counter]);

  return (
    <div
      className={`w-full flex justify-center items-center h-[100vh] ${styles.contain}`}
    >
      <main
        id="container-form"
        className={`bg-[#efffff] rounded-[20px] flex flex-col items-center ${styles.main}`}
      >
        {!form ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[100%] flex flex-col justify-center items-center"
          >
            <h1 className="text-[48px] text-indigo-800 font-[700] tracking-[3px]">
              Ayuda
            </h1>

            <div className="h-[110px] w-[100%] p-5">
              <label className="w-[max-content]" htmlFor="fullName">
                Nombres completos
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Ingrese su nombre completo"
                {...register("fullName", { required: "Escriba su nombre" })}
                className="w-[100%] px-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10"
              />
              {errors.fullName && (
                <span className="text-red-500">{errors.fullName.message}</span>
              )}
            </div>

            <div className="h-[110px] w-[100%] p-5">
              <label className="w-[max-content]" htmlFor="email">
                Correo
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ingrese su correo"
                {...register("email", { required: "Correo requerido" })}
                className="w-[100%] px-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="h-[max-content] w-[100%] p-5">
              <label className="w-[max-content]" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Escribe tu mensaje aquí"
                {...register("message", {
                  required: "El mensaje es requerido",
                })}
                className="w-[100%] px-2 h-48 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <button
              type="submit"
              className="w-[200px] bg-indigo-700 font-[600] text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-900"
            >
              Enviar
            </button>
          </form>
        ) : (
          <div className="h-[100%] w-[100%] flex flex-col items-center justify-center">
            <span className="text-[70px] font-[700] text-indigo-800 text-balance">
              ¡Mensaje enviado con éxito!
            </span>
            <span className="text-[20px] font-[500] text-black text-balance">
              Se redigirá a la página de inicio en {counter} segundos...
            </span>
          </div>
        )}

        <Link href="/" passHref>
          <div className="flex flex-row w-[max-content] p-0 m-0 items-center justify-center">
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#3730a3"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              />
              <path
                fill="#3730a3"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              />
            </svg>
            <Button
              id="goToHome"
              content="Volver a inicio"
              disabled={false}
              type="secundary"
            />
          </div>
        </Link>
      </main>
    </div>
  );
};

export default HelpForm;
