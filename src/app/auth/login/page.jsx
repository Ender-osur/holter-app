"use client"
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import FormField from '../../components/formField';
import Button from '../../components/button';

export default function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = data => {
    console.log(data)
  }
  
  return (
    <div>
      <main
        id="container-form"
        className="relative flex flex-col"
      >
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className=""
        >
          <fieldset>
            <FormField id="email" type="email" placeholder="email@email.com" register={register} requiredMessage="email requerido" errors={errors} />
            <FormField id="password" type="password" placeholder="contraseña" register={register} requiredMessage="Contraseña requerida" errors={errors} />
            <input id="remember-me" type="checkbox"/>
          </fieldset>
          <Button id="send_auth" content="Enviar" />
        </form>
        <Link 
          href="/auth/register"
        >
          <Button id="goToRegister" content="Registrarse" />
        </Link>
      </main>
    </div>
  )
}
