import "./globals.css";
// import localFont from "next/font/local";
import { Inter, Roboto } from "next/font/google";
import AppHeader from "./components/app.header";
import AppFooter from "./components/app.footer";
import { Container } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

// const inter = Inter({ subsets: ["vietnamese"] });
const inter = Roboto({ weight: ["700"], subsets: ["vietnamese"] });
// const myFont = localFont({ src: "./ui/Azonix.otf" });

export const metadata = {
  title: "Reras - The real time environment monitor system",
  description: "PNNM - 2024",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <body className={myFont.className}> */}
        <AppHeader />
        {children}
        {/* <Container>{children}</Container> */}
        <AppFooter />
      </body>
    </html>
  );
}
