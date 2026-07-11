import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsappButton from './WhatsappButton';

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans antialiased overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
