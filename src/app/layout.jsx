import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cardio Analyzer",
  description: "Aplicativo para visualizar datos de holter card\u00edaco creando en la Universidad del Magdalena por el grupo investigativo GIDEAM",
  manifest: '/manifest.json',
  icons: {
    apple: "icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
