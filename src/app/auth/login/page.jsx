"use client"
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import FormField from '../../components/formField';

export default function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = data => {
    console.log(data)
  }
  
  console.log(watch("example")) // watch input value by passing the name of it
  
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div
    className="relative flex "
    >
      <main
        id="container-form"
        className="absolute w-full flex flex-col items-center top-20 "
        >
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2"
          >
          
          <fieldset>
            <legend
              className="text-scale-200 font-bold text-4xl mb-4 bg-transparent text-slate-100"
              >Cardio analyzer</legend>
            <FormField id="email" type="email" placeholder="email@email.com" register={register} requiredMessage="email requerido" errors={errors} />
            <FormField id="password" type="password" placeholder="contraseña" register={register} requiredMessage="Contraseña requerida" errors={errors} />
            <div
              className=""
            >
              <span
                className="bg-transparent flex flex-row gap-2"
              >
                <input
                  id="remember-me"
                  type="checkbox"
                  />
                  <label 
                    htmlFor="remember-me"
                    className="text-slate-300"
                    >
                      Recordar contraseña
                    </label>
              </span>
              <div>
                <span>
                  <a 
                    href="#"
                    className="text-slate-300"
                    >
                    Olvidé mi contraseña
                  </a>
                </span>
              </div>
            </div>
            {errors.password && <span>This field is required</span>}
          </fieldset>

          <input 
            type="submit" 
            onSubmit={handleSubmit}
            className="w-full bg-[#53d9bf] text-slate-950 font-mono font-extrabold p-3 rounded-lg text-3xl mt-5"
            />
        </form>
        <div
          className="m-5"
          >
          <span>
            <Link 
              href="/auth/register"
              className="text-slate-300 text-xl"
              >
                Registrarse
            </Link>
          </span>
        </div>
      </main>
    </div>
  )
}
