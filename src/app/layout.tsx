import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOS QR - Sistema de Identificación Solidaria",
  description: "Protege a tus seres queridos con nuestra pulsera de identificación QR. Rapidez y seguridad en emergencias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* FontAwesome Link */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
