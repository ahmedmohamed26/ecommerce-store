import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import "./globals.css";
import { Providers } from "./store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
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
