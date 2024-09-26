import type { Metadata } from 'next';
import './globals.css';
import WhatsappLive from '@/components/WhatsappLive';

export const metadata: Metadata = {
  title: 'Homes971',
  description: 'Transform your home in just 3 days',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <WhatsappLive />
      </body>
    </html>
  );
}
