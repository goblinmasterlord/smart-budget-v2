// src/components/layout/BottomNavigation.jsx

import { Link, useLocation } from 'react-router-dom';
import { Home, PieChart, Target, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/transactions', icon: PieChart, label: 'Transactions' },
    { to: '/goals', icon: Target, label: 'Goals' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-elevated border-t border-dark-card">
      <nav className="container mx-auto max-w-md">
        <ul className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;
            
            return (
              <li key={item.to} className="relative">
                <Link
                  to={item.to}
                  className={`flex flex-col items-center py-3 px-5 ${
                    isActive ? 'text-primary' : 'text-light-text'
                  }`}
                >
                  <Icon size={24} strokeWidth={2} />
                  <span className="text-tiny mt-1">{item.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="navigation-pill"
                      className="absolute top-0 w-12 h-1 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigation;