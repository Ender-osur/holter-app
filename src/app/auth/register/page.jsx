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
    <main
      id="container-form"
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <form 
        onSubmit={handleSubmit(onSubmit)}
        >
        {/* register your input into the hook by invoking the "register" function */}
        <input 
          type="text"
          placeholder="nombres"
          {...register("username", {
            required: true,
            })} 
        />
        <input 
          type="text"
          placeholder="apellidos"
          {...register("username", {
            required: true,
            })} 
        />
        <input 
          type="email"
          placeholder="email@email.com"
          {...register("username", {
            required: true,
            })} 
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input 
          type="password"
          placeholder="contraseña"
          {...register("username", {
            required: true,
            })} 
        />
        <input 
          type="password"
          placeholder="contraseña"
          {...register("username", {
            required: true,
            })} 
        />
        {/* errors will return when field validation fails  */}



        {errors.exampleRequired && <span>This field is required</span>}
        <input 
          type="submit" 
          className="text-3xl font-bold underline"
          />
      </form>
    </main>
  )
}