import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-lg font-bold">AI Chatbot</a>
        <div className="space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
}