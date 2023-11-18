import Navbar from "../components/Navbar";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="my-5 py-5 container  justify-center  flex items-center">{children}</main>
      </body>
    </html>
  );
}
