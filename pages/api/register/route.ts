import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import 'dotenv/config';

// Creación de variables para simular un usuario registrado y probar funcionalidades en la app
const user = process.env.USER as string;
const pass = process.env.PASSWORD as string;
const JWT_SECRET = process.env.JWT_SECRET as string;

/**
 * Verifica si las credenciales proporcionadas son válidas.
 * 
 * @param {string} email - El correo electrónico proporcionado.
 * @param {string} password - La contraseña proporcionada.
 * @returns {Promise<boolean>} - Retorna verdadero si las credenciales son válidas, de lo contrario falso.
 */
async function validateCredentials(email: string, password: string): Promise<boolean> {
  const passwordMatch = await pass === password;
  const emailMatch = await email === user;
  console.log("Pass: ", password, pass);
  console.log("Pass: ", email, user);
  return passwordMatch && emailMatch;
  
}

/**
 * Genera un token JWT.
 * 
 * @param {object} payload - El contenido del token.
 * @returns {string} - El token JWT.
 */
function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '5000' });
}

/**
 * Handler para la autenticación de usuario.
 *
 * @param {NextApiRequest} req - La solicitud entrante.
 * @param {NextApiResponse} res - La respuesta saliente.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const isValid = await validateCredentials(email, password);
    console.log('isValid in handler:', isValid);
    
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken({ id: 1, email: user });
    console.log("", token);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
