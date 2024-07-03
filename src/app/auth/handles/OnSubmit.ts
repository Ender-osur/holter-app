import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormData } from '@/interfaces/components';

export const OnSubmit = async (data: FormData) => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  try {
    const response = await fetch('/api/authenticate/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log("Login page", response);
      throw new Error('Login failed');
    }
    
    const result = await response.json();
    localStorage.setItem('token', result.token);
    router.push('/dashboard');
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError('An unexpected error occurred');
    }
  }
};