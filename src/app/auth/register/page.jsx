"use client"
import { useForm } from "react-hook-form"
import "./styles.css"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div
    className="relative flex "
    >
      <main
        id="container-form"
        className="absolute w-full flex flex-col items-center top-10 "
      >
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2"
          >
          
          <fieldset>
            <legend
              className="text-scale-200 font-bold text-4xl mb-4 bg-transparent text-slate-100"
            >Información de registro</legend>
            <label
              className="text-xl p-3 rounded block mb-2 bg-transparent text-slate-100 w-full"
              htmlFor="name"
            >Nombres</label>
            <input 
              id="name"
              type="text"
              placeholder="Ingrese sus nombres"
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              {...register("firstname", {
                required: true,
                })} 
            />
            {errors.firstname && <span>This field is required</span>}

            <label
              className="text-xl p-3 rounded block mb-2 bg-transparent text-slate-100 w-full"
              htmlFor="lastname"
            >Apellidos</label>
            <input 
            id="lastname"
              type="text"
              placeholder="apellidos"
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              {...register("lastname", {
                required: true,
                })} 
            />
            {errors.lastname && <span>This field is required</span>}

            <label
              className="text-xl p-3 rounded block mb-2 bg-transparent text-slate-100 w-full"
              htmlFor="email"
            >Correo</label>
            <input 
            id="email"
              type="email"
              placeholder="email@email.com"
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              {...register("email", {
                required: true,
                })} 
            />
            {errors.email && <span>This field is required</span>}

            <label
              className="text-xl p-3 rounded block mb-2 bg-transparent text-slate-100 w-full"
              htmlFor="email-check"
            >Confirme su correo</label>
            <input 
              id="email-check"
              type="email"
              placeholder="email@email.com"
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              {...register("emailCheck", {
                required: true,
                })} 
            />
            {errors.emailCheck && <span>This field is required</span>}


            <label
              className="text-xl p-3 rounded block mb-2 bg-transparent text-slate-100 w-full"
              htmlFor="password"
            >Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="contraseña"
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              {...register("password", {
                required: true,
                })} 
            />
            {errors.password && <span>This field is required</span>}

            <label
              className="text-xl p-3 rounded block mb-2 bg-transparent text-slate-100 w-full"
              htmlFor="password-check"
            >Confirme su contraseña</label>
            <input 
              id="password-check"
              type="password"
              placeholder="contraseña"
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              {...register("passwordCheck", {
                required: true,
                })} 
            />
            {errors.passwordCheck && <span>This field is required</span>}
          </fieldset>

          <input 
            type="submit" 
            className="w-full bg-[#53d9bf] text-slate-950 font-mono font-extrabold p-3 rounded-lg text-3xl"
            />
        </form>
      </main>
    </div>
  )
}