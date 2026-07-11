import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import BrandsPage from './pages/BrandsPage';
import CosmeticsPage from './pages/CosmeticsPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import DealerLoginPage from './pages/DealerLoginPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/urunler/kategori/:cat" element={<CategoryPage />} />
          <Route path="/urun/:slug" element={<ProductDetailPage />} />
          <Route path="/kurumsal" element={<AboutPage />} />
          <Route path="/cozumler" element={<ServicesPage />} />
          <Route path="/teknolojiler" element={<TechnologiesPage />} />
          <Route path="/markalar" element={<BrandsPage />} />
          <Route path="/kozmetik" element={<CosmeticsPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/sss" element={<FaqPage />} />
          <Route path="/bayi-girisi" element={<DealerLoginPage />} />
          <Route path="/gizlilik" element={<LegalPage docKey="gizlilik" />} />
          <Route path="/kullanim-kosullari" element={<LegalPage docKey="kullanim" />} />
          <Route path="/kvkk" element={<LegalPage docKey="kvkk" />} />
          <Route path="/cerez-politikasi" element={<LegalPage docKey="cerez" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
