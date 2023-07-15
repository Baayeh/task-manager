import '@styles/globals.scss';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | TaskBuddy',
    default: 'TaskBuddy',
  },
  description: 'Your user friendly project management tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
