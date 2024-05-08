"use client"
import { useForm } from "react-hook-form"
import "./styles.css"
import Link from 'next/link'
import FormField from "../../components/formField"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch('/api/auth/register/route', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-type':'aplication/json'
      }
    })
    const resJSON = await res.json()
    console.log(resJSON)
  })

  return (
    <div className="relative flex flex-col w-full h-full top-10 gap-10">
      <main id="container-form" className="w-auto flex flex-col items-center">
        <form onSubmit={onSubmit} className="w-1/2">
          <fieldset>
            <legend className="text-scale-200 font-bold text-4xl mb-4 bg-transparent text-slate-100">
              Información de registro
            </legend>
            <FormField id="name" type="text" placeholder="Ingrese sus nombres" register={register} requiredMessage="Nombres requeridos" errors={errors} />
            <FormField id="lastname" type="text" placeholder="apellidos" register={register} requiredMessage="Apellidos requeridos" errors={errors} />
            <FormField id="email" type="email" placeholder="email@email.com" register={register} requiredMessage="email requerido" errors={errors} />
            <FormField id="email-check" type="email" placeholder="email@email.com" register={register} requiredMessage="email requerido" errors={errors} />
            <FormField id="password" type="password" placeholder="contraseña" register={register} requiredMessage="Contraseña requerida" errors={errors} />
            <FormField id="password-check" type="password" placeholder="contraseña" register={register} requiredMessage="Contraseña requerida" errors={errors} />
          </fieldset>
          <input type="submit" className="w-full text-slate-950 font-mono font-extrabold p-3 rounded-lg text-3xl mt-5" />
        </form>
      </main>
      <footer className="flex justify-center">
        <div>
          <span>
            <Link href="/auth/login" className="text-slate-300 text-xl">
              volver
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
