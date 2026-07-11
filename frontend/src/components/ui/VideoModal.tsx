import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  src?: string;
}

export default function VideoModal({
  open,
  onClose,
  src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
}: VideoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
        >
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl aspect-video bg-zinc-950 border border-white/10 rounded-lg overflow-hidden shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 text-white bg-black/55 hover:bg-black p-2.5 rounded-full hover:scale-105 transition-all outline-none"
              aria-label="Kapat"
            >
              <X size={20} />
            </button>
            <iframe
              title="D2 Grup Tanıtım Videosu"
              className="w-full h-full border-none"
              src={src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
