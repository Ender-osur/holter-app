import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {jwtDecode} from 'jwt-decode';

/**
 * Higher Order Component (HOC) para proteger rutas que requieren autenticación.
 * Si el usuario no está autenticado, redirige a la página de inicio de sesión.
 *
 * @param WrappedComponent - El componente que se protegerá con autenticación.
 * @returns Un nuevo componente que verifica la autenticación antes de renderizar el WrappedComponent.
 */
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  const Auth: React.FC<P> = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        router.push('/');
        return;
      }

      try {
        const decodedToken = jwtDecode<{ exp: number }>(token);
        const { exp } = decodedToken;
        if (Date.now() > exp * 1000) {
          // Token ha expirado, redirige a la página de login
          localStorage.removeItem('token');
          router.push('/auth/login');
        }
      } catch (error) {
        console.error('Error decoding JWT:', error);
        // En caso de error al decodificar el token, redirige a la página de login
        localStorage.removeItem('token');
        router.push('/auth/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
