import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/highlight.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    absolute: config.site.metadata.title.absolute,
    default: config.site.metadata.title.default,
    template: config.site.metadata.title.template,
  },
  description: config.site.metadata.description,
  openGraph: {
    title: config.site.metadata.title.default,
    description: config.site.metadata.description,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-6xl m-auto",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
