import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Lerato's Portfolio",
  description: "Lerato Mgwangqa's personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}