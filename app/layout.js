import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { Providers } from "./store/provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
