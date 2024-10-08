import { Footer } from '../../Components/Layout/Footer';
import { Navbar } from '../../Components/Layout/Navbar';
import '../../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="bg-article-yellow flex min-h-svh flex-col">
      <Navbar />
      <main className="grow pb-8 pt-14 md:pt-20">{children}</main>
      <Footer />
    </body>
  );
}
