import "./globals.css";
import CartShell from "../components/CartShell";

export const metadata = {
  title: "Ecolight – Modern Lighting Store",
  description:
    "Ecolight – premium modern lights, lamps and fixtures with elegant designs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <CartShell>{children}</CartShell>
      </body>
    </html>
  );
}


