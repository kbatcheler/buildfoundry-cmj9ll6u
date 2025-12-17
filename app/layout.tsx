import "../globals.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "AI Chatbot Integration",
  description: "An intelligent chatbot for customer service with AI capabilities."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}