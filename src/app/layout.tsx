import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumina Reference | Planar Magnetic Headphones | Olyx Atelier",
  description:
    "Swiss minimalist planar magnetic headphones. 4Hz–48kHz. Obsidian finish, beryllium titanium drivers, Neodymium array. Handcrafted in Geneva.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-ivory font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
