import { Footer } from '../../Components/Layout/Footer';
import { Navbar } from '../../Components/Layout/Navbar';
import '../../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex min-h-svh flex-col bg-grey-1000">
      <Navbar className="bg-primary-1000" />
      <main className="grow pt-20">{children}</main>
      <Footer />
    </body>
  );
}
