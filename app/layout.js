import { Inter } from "next/font/google";
import "./styles/app.scss"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josh Orion Kermiet",
  description: "Artist, Radio host, etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
