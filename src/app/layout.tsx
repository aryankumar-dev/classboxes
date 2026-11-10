import type { Metadata, Viewport } from "next";
import { Mukta, Mukta_Vaani } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import "./globals.css";

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const muktaVaani = Mukta_Vaani({
  variable: "--font-mukta-vaani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ClassBoxes Technologies – Learning and Development Center",
    template: "%s | ClassBoxes Technologies",
  },
  description:
    "ClassBoxes is a recruitment and learning company in New Jersey, USA — staffing solutions, skill assessments and job-ready training.",
};

// Always render in light mode, even when the visitor's OS/browser uses dark mode.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${mukta.variable} ${muktaVaani.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
