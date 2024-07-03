import { NextApiRequest, NextApiResponse } from 'next';
import 'dotenv/config';

// Simula un almacenamiento en memoria para los mensajes
const messages: { fullName: string; email: string; message: string }[] = [];

/**
 * Handler para guardar un mensaje de ayuda.
 *
 * @param {NextApiRequest} req - La solicitud entrante.
 * @param {NextApiResponse} res - La respuesta saliente.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Simula el guardado del mensaje en memoria
    messages.push({ fullName, email, message });

    res.status(200).json({ success: 'Mensaje recibido' });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
