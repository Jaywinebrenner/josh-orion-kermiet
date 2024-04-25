import { Inter } from "next/font/google";
import "./styles/app.scss"
import Navigation from "./components/Navigation";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josh Orion Kermiet",
  description: "Artist, Radio host, etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
        <div style={{padding: "0 10%"}}>
          <Navigation/>
        </div>
        {children}
        </body>
    </html>
  );
}
