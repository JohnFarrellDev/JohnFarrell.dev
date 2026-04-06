import { Footer } from '@/Components/Layout/Footer/Footer';
import { Navbar } from '@/Components/Layout/Navbar/Navbar';
import '@/globals.css';

export default function DefaultPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex min-h-svh flex-col bg-gray-50">
      <div className="print:hidden">
        <Navbar />
      </div>
      <main className="grow pb-8">{children}</main>
      <div className="print:hidden">
        <Footer />
      </div>
    </body>
  );
}
