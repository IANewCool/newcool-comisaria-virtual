import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NewCool Comisaria Virtual - Servicios Policiales Online",
  description: "Aprende sobre Comisaria Virtual: como hacer denuncias online, obtener certificados, constancias de extravio y mas servicios de Carabineros de Chile.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👮</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
