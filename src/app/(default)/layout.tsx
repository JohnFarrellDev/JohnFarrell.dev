import { Footer } from '@/Components/Layout/Footer';
import { Navbar } from '@/Components/Layout/Navbar';
import '@/styles/globals.css';

export default function DefaultPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex min-h-svh flex-col bg-gray-50">
      <Navbar />
      <main className="grow pb-8">{children}</main>
      <Footer />
    </body>
  );
}
