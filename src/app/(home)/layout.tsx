import { Footer } from '@/Components/Layout/Footer/Footer';
import { Navbar } from '@/Components/Layout/Navbar/Navbar';
import '@/globals.css';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex min-h-svh flex-col bg-gray-50">
      <Navbar className="bg-primary-100" />
      <main className="grow">{children}</main>
      <Footer />
    </body>
  );
}
