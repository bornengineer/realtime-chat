import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container
          maxWidth="md"
          sx={{
            minHeight: "90vh",
            display: "flex",
            border: "1px solid red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Container>
      </body>
    </html>
  );
}
