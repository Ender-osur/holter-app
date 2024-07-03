import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuración de la fuente Inter desde Google Fonts
const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata para el aplicativo Cardio Analyzer.
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "Cardio Analyzer",
  description: "Aplicativo para visualizar datos de holter cardíaco creado en la Universidad del Magdalena por el grupo investigativo GIDEAM",
  manifest: '/manifest.json',
  icons: {
    apple: "icon.png"
  }
};

/**
 * Componente RootLayout que envuelve la aplicación.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los elementos hijos que serán renderizados dentro del layout.
 * @returns {JSX.Element} - El elemento JSX que representa el layout raíz.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
