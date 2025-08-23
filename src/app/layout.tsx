import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Profile Canvas',
  description: 'A personal portfolio for showcasing skills and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${firaCode.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
