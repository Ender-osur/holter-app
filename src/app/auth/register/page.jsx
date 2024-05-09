"use client"
import { useForm } from "react-hook-form"
import styles from "./register.module.css"
import Link from 'next/link'
import Image from "next/image"

import Button from "../../components/button"
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
    console.log(data)
  })

  return (
    <div className={`h-auto ${styles.container}`}>
      <Image 
            src="/img-logo-white.png" 
            alt="Heart" 
            width={160}
            height={160}
          />
      <main className={`bg-white h-[800px] w-[500px] rounded-[80px] flex flex-col items-center ${styles.main}`}>
        <h1 className={`  ${styles.font}`}>Hola</h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <fieldset className="flex flex-col items-center">
            <FormField id="name" type="text" placeholder="Nombres" register={register} requiredMessage="Nombres requeridos" errors={errors} label="" styles="" />
            
            <FormField id="lastname" type="text" placeholder="Apellidos" register={register} requiredMessage="Apellidos requeridos" errors={errors} label="" styles=""/>
            <FormField id="email" type="email" placeholder="Correo" register={register} requiredMessage="email requerido" errors={errors} label="" styles=""/>
            <FormField id="email-check" type="email" placeholder="Confirme su correo" register={register} requiredMessage="email requerido" errors={errors} label="" styles=""/>
            <FormField id="password" type="password" placeholder="Contraseña" register={register} requiredMessage="Contraseña requerida" errors={errors} label="" styles=""/>
            <FormField id="password-check" type="password" placeholder="Confirme su contraseña" register={register} requiredMessage="Contraseña requerida" errors={errors} label="" styles=""/>
            <FormField id="password-check" type="password" placeholder="Confirme su contraseña" register={register} requiredMessage="Contraseña requerida" errors={errors} label="" styles=""/>
            <FormField id="card-id" type="number" placeholder="Cédula" register={register} requiredMessage="Cédula requerida" errors={errors} label="" styles=""/>
          </fieldset>
          <Button id="submit_reg" content="Registrar" type="submit"/>
        </form>
      </main>
        <div>
            <Link href="/" className="">
              <Button id="goToHome" content="Volver a inicio" />
            </Link>
        </div>
    </div>
  )
}
