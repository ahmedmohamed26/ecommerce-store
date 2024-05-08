import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { Providers } from "./store/provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useLocale, NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  const messages = useMessages();
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={true}
            />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
