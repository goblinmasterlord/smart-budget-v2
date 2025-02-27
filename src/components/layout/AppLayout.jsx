// src/components/layout/AppLayout.jsx

import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
import { motion } from 'framer-motion';

const AppLayout = () => {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 overflow-y-auto pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 py-6 max-w-md"
        >
          <Outlet />
        </motion.div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default AppLayout;