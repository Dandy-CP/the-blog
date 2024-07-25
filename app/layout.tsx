import { Plus_Jakarta_Sans } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import "./globals.css";

const plusJKTSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Blog",
  description: "Web Blog",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="id-ID">
      <body className={plusJKTSans.className}>
        <main>
          <TopBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
