import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavMenuItem } from '../types';

const menuItems: NavMenuItem[] = [
  { label: 'ANASAYFA', href: '#' },
  { label: 'KURUMSAL', href: '#kurumsal' },
  { label: 'KATEGORİLER', href: '#kategoriler' },
  { label: 'MARKALAR', href: '#markalar' },
  { label: 'TEKNOLOJİLER', href: '#teknolojiler' },
  { label: 'KOZMETİK', href: '#kozmetik' },
  { label: 'İLETİŞİM', href: '#iletisim' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('ANASAYFA');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex flex-col items-center justify-center border-2 border-white bg-black/40 px-3 py-1.5 rounded-sm transition-transform duration-300 group-hover:scale-105">
            <span className="font-display font-extrabold text-2xl tracking-tighter text-white leading-none">D2</span>
            <span className="font-sans font-medium text-[8px] tracking-[0.3em] text-white/80 leading-none mt-0.5">GRUP</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className="relative text-xs font-semibold tracking-wider text-white/85 hover:text-white transition-colors duration-200 py-1"
            >
              {item.label}
              {activeItem === item.label && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Utility / CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 cursor-pointer text-white/85 hover:text-white transition-colors">
            <Globe size={13} className="text-white/65" />
            <span className="text-[11px] font-bold tracking-wider">TR</span>
            <ChevronDown size={12} className="text-white/50" />
          </div>

          {/* Dealer Login Button */}
          <a
            href="#bayi-girisi"
            className="text-[11px] font-bold tracking-widest text-white border border-white/30 hover:border-white px-5 py-2.5 rounded-none transition-all duration-300 uppercase hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/5"
          >
            BAYİ GİRİŞİ
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <div className="flex items-center gap-1 text-white">
            <Globe size={13} />
            <span className="text-[11px] font-bold">TR</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setIsOpen(false);
                    }}
                    className={`text-sm font-semibold tracking-wider py-1 ${
                      activeItem === item.label ? 'text-white border-l-2 border-white pl-3' : 'text-white/70 pl-3'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="h-[1px] bg-white/10 my-2" />

              <div className="flex flex-col gap-4">
                <a
                  href="#bayi-girisi"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-xs font-bold tracking-widest text-white border border-white/30 py-3 block hover:bg-white hover:text-black transition-all"
                >
                  BAYİ GİRİŞİ
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
