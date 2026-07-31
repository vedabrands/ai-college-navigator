import "./globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "AI College Navigator",
  description: "Premium AI-powered admissions platform for Indian students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script src="https://cdn.tailwindcss.com"></script>
        <div className="min-h-screen overflow-hidden">
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,.28),_transparent_34%),linear-gradient(135deg,#eff6ff,#ffffff_45%,#e0f2fe)]" />
          <Sidebar />
          <main className="px-4 pb-12 sm:px-8 lg:ml-72">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
