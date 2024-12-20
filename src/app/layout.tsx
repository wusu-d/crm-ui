import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
});
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${jakartaSans.variable} ${dmSans.variable} antialiased`}
      >
        <div className="flex h-screen bg-white">
          <Sidebar />
          <div className="flex-1 flex flex-col h-full overflow-y-scroll">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
