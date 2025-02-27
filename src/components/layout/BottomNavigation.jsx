// src/components/layout/BottomNavigation.jsx

import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Target, Settings, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/transactions', icon: BarChart2, label: 'Transactions' },
    { to: '/goals', icon: Target, label: 'Goals' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed z-30 bottom-24 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-accent shadow-lg flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Plus size={28} className="text-white" strokeWidth={2.5} />
        <motion.div
          className="absolute inset-0 rounded-full bg-white"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        {/* Curved background with glass effect */}
        <div className="absolute inset-0 bg-dark-elevated/90 backdrop-blur-xl shadow-[0_-5px_25px_rgba(0,0,0,0.25)] rounded-t-3xl border-t border-white/5" />
        
        <nav className="container mx-auto max-w-md relative z-10">
          <ul className="flex justify-around items-center pt-2 pb-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              const Icon = item.icon;
              
              return (
                <li key={item.to} className="relative flex-1 flex justify-center">
                  <Link
                    to={item.to}
                    className="flex flex-col items-center py-3 px-2 relative"
                  >
                    <div className="relative flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute bg-gradient-to-r from-primary/90 to-accent/90 rounded-full w-12 h-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 500, 
                              damping: 30,
                              duration: 0.2
                            }}
                          />
                        )}
                      </AnimatePresence>
                      
                      {/* Icon with pulse effect when active */}
                      <div className="relative z-10">
                        <Icon 
                          size={24} 
                          className={`transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-light-text/60'
                          }`} 
                        />
                        
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-white/30"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0, 0.3]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </div>
                    </div>
                    
                    {/* Label with animated underline when active */}
                    <div className="mt-1 relative">
                      <span className={`text-tiny font-medium transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-light-text/60'
                      }`}>
                        {item.label}
                      </span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Extra padding for iOS home indicator */}
        <div className="h-6 bg-transparent"></div>
      </div>
    </>
  );
};

export default BottomNavigation;