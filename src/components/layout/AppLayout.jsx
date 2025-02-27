// src/components/layout/AppLayout.jsx

import { Outlet, useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
import { motion, AnimatePresence } from 'framer-motion';

const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full bg-dark">
      <main className="flex-1 overflow-y-auto pb-24">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.8, y: -10 }}
            transition={{ 
              duration: 0.2,
              ease: "easeInOut"
            }}
            className="container mx-auto px-4 py-6 max-w-md"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default AppLayout;