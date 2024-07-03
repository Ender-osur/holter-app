"use client"
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import styles from './register.module.css';
import Button from '../../../components/Button';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/register/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Falló el inicio de sesión');
      }
      
      const result = await response.json();
      localStorage.setItem('token', result.token);
      router.push('/dashboard');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Un error inesperado ha ocurrido');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`w-full flex justify-center items-center h-[100vh] ${styles.contain}`}>
      <main id="container-form" className={`bg-[#efffff] rounded-[20px] flex flex-col items-center ${styles.main}`}>
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="w-[100%] flex flex-col justify-center items-center"
        >
          <h1 className='text-[48px] text-indigo-800 font-[700] tracking-[3px]'>Registro</h1>
          
          <div className='h-[110px] w-[100%] p-5'>
            <label className='w-[max-content]' htmlFor="email">Nombres completos</label>
            <input
              type="text"
              id="fullName"
              placeholder='Ingrese su nombre completo'
              {...register('fullName', { required: 'Escriba su nombre' })}
              className='w-[100%] px-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10'
            />
            {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
          </div>

          <div className='h-[110px] w-[100%] p-5'>
            <label className='w-[max-content]' htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              placeholder='Ingrese su correo'
              {...register('email', { required: 'Correo requerido' })}
              className='w-[100%] px-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10'
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          <div className='h-[110px] w-[100%] p-5'>
            <label className='w-[max-content]' htmlFor="email">Confirme su correo</label>
            <input
              type="email"
              id="confirmEmail"
              placeholder='Ingrese su correo'
              {...register('email', { required: 'Correo requerido' })}
              className='w-[100%] px-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10'
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          
          <div className='relative h-[110px] w-[100%] p-5'>
            <label htmlFor='password' className='block text-gray-700'>Contraseña</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Ingrese su contraseña'
              {...register('password', { required: 'Contraseña requerida' })}
              className='w-[100%] px-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10'
            />
            <button
              type='button'
              className='h-[30px] w-[max-content] px-2 rounded-[15px] absolute right-6 bottom-[31px] bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:bg-gray-300'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
            {errors.password && <span className="text-red-500 mt-2">{errors.password.message}</span>}
          </div>

          <div className='relative h-[110px] w-[100%] p-5'>
            <label htmlFor='password' className='block text-gray-700'>Confirme su contraseña</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='confirmPassword'
              placeholder='Ingrese su contraseña'
              {...register('password', { required: 'Contraseña requerida' })}
              className='w-[100%] px-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10'
            />
            <button
              type='button'
              className='h-[30px] w-[max-content] px-2 rounded-[15px] absolute right-6 bottom-[31px] bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:bg-gray-300'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
            {errors.password && <span className="text-red-500 mt-2">{errors.password.message}</span>}
          </div>
          
          {error && <div className='text-red-500 mb-4'>{error}</div>}
          
          <button
            type='submit'
            className='w-[200px] bg-indigo-700 font-[600] text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-900'
          >
            Registrar
          </button>
        </form>
        
        <Link href="/" passHref>
          <div className='flex flex-row w-[max-content] p-0 m-0 items-center justify-center'>
            <svg width="28px" height="28px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path fill="#3730a3" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/>
              <path fill="#3730a3" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
            </svg>
            <Button id="goToHome" content="Volver a inicio" disabled={false} type='secundary'/>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default LoginForm;
