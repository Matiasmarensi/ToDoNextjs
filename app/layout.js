import Navbar from "../components/Navbar";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto my-5 justify-center  flex items-center">{children}</body>
    </html>
  );
}
