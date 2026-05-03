import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: "Lucas Montenegro - Photographer & Filmmaker",
  description: "Portfolio of Lucas Montenegro, a passionate photographer and filmmaker specializing in visual storytelling, cinematography, and creative direction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
