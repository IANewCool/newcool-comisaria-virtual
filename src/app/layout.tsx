import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comisaria Virtual Chile | NewCooltura Informada",
  description: "Aprende sobre Comisaria Virtual: como hacer denuncias online, obtener certificados, constancias de extravio y mas servicios de Carabineros de Chile.",
  keywords: ["comisaria virtual", "denuncia online", "certificado antecedentes", "constancia extravio", "Carabineros"],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👮</text></svg>",
  },
  openGraph: {
    title: "Comisaria Virtual - NewCooltura Informada",
    description: "Servicios policiales online de Carabineros",
    type: "website",
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
