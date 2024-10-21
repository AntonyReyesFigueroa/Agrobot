import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AgroBot – Monitoreo Agrícola Inteligente",
  description: "Optimiza cultivos con IA, sensores ambientales y videovigilancia en tiempo real.",
  icons: {
    icon: "/agrobot.png", // Favicon visible en pestaña del navegador
  },
  openGraph: {
    title: "AgroBot – Monitoreo Agrícola Inteligente",
    description: "Monitorea cultivos en tiempo real y predice plagas con IA.",
    images: [
      {
        url: "/agrobot.png", // La imagen debe estar en /public
        width: 800,
        height: 600,
        alt: "Imagen del AgroBot en acción",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/agrobot.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
