import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";

const OnsiteNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay so it catches attention
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm w-[calc(100%-3rem)] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden group"
        >
          {/* Subtle gold top border matching conference theme */}
          <div className="h-1 w-full gold-gradient" />
          
          <div className="p-5 flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 pr-2">
              <h3 className="font-serif font-bold text-foreground text-lg leading-tight mb-1">
                In-Person Event
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Please note that this is a fully onsite conference taking place in Rabat, Morocco.
              </p>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnsiteNotice;
