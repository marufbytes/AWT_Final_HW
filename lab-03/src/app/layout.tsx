import { ThemeProvider } from "./context/ThemeContext";
import { StudentProvider } from "./context/StudentContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <StudentProvider>
            {children}
          </StudentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}