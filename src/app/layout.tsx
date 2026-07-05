import type { Metadata } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const ebGaramond = EB_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Barra Advogados",
  description:
    "Barra Advogados — assessoria jurídica especializada com ética, agilidade e resultado para pessoas e empresas.",
  openGraph: {
    title: "Barra Advogados",
    description:
      "Assessoria jurídica especializada com ética, agilidade e resultado para pessoas e empresas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${ebGaramond.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
