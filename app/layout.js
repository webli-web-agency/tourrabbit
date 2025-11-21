import "./globals.css";
import { Nunito, Bebas_Neue } from "next/font/google";


// (Optional) Use Google Fonts import from next/font if you want.
export const metadata = {
  title: "tourrabbit",
  description: "Tour Rabbit Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

       
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
