// src/pages/Settings.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, Sun, Bell, Smartphone, Globe, 
  CreditCard, Lock, HelpCircle, LogOut, 
  ChevronRight, Zap, Sparkles, User
} from 'lucide-react';

const Settings = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [currency, setCurrency] = useState('USD');
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 30
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-14 h-14 rounded-full border-3 border-primary border-r-transparent"
        />
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pb-24"
    >
      <motion.div variants={itemVariants} className="mb-5">
        <div className="flex justify-between items-center">
          <h1 className="text-title font-display font-semibold">Settings</h1>
          <motion.div 
            className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <User size={20} className="text-light-text/70" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* App Preferences Section */}
      <motion.div variants={itemVariants} className="mb-2">
        <h2 className="text-subtitle font-display font-semibold mb-3">App Preferences</h2>
      </motion.div>
      
      {/* Preferences Items */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="card bg-dark-card/80 backdrop-blur-sm border border-white/5 p-1 divide-y divide-white/5">
          {/* Dark Mode Toggle */}
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-dark-elevated flex items-center justify-center mr-3">
                  {darkMode ? (
                    <Moon size={18} className="text-primary" />
                  ) : (
                    <Sun size={18} className="text-primary" />
                  )}
                </div>
                <span className="text-body">Dark Mode</span>
              </div>
              
              <motion.div 
                className={`w-12 h-6 rounded-full flex items-center p-0.5 cursor-pointer ${darkMode ? 'bg-primary' : 'bg-dark-elevated'}`}
                onClick={() => setDarkMode(!darkMode)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-5 h-5 rounded-full bg-white shadow-md"
                  animate={{ x: darkMode ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
          </div>
          
          {/* Notifications Toggle */}
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-dark-elevated flex items-center justify-center mr-3">
                  <Bell size={18} className="text-primary" />
                </div>
                <span className="text-body">Notifications</span>
              </div>
              
              <motion.div 
                className={`w-12 h-6 rounded-full flex items-center p-0.5 cursor-pointer ${notifications ? 'bg-primary' : 'bg-dark-elevated'}`}
                onClick={() => setNotifications(!notifications)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-5 h-5 rounded-full bg-white shadow-md"
                  animate={{ x: notifications ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
          </div>
          
          {/* Currency Selector */}
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-dark-elevated flex items-center justify-center mr-3">
                  <Globe size={18} className="text-primary" />
                </div>
                <span className="text-body">Currency</span>
              </div>
              
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-dark-elevated text-light-text/80 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all appearance-none pr-8"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em" }}
    >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="CAD">CAD ($)</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Account Section */}
      <motion.div variants={itemVariants} className="mb-2">
        <h2 className="text-subtitle font-display font-semibold mb-3">Account</h2>
      </motion.div>
      
      {/* Account Items */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="card bg-dark-card/80 backdrop-blur-sm border border-white/5 p-1 divide-y divide-white/5">
          {/* Profile */}
          <motion.div 
            className="p-3 flex items-center justify-between cursor-pointer"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-dark-elevated flex items-center justify-center mr-3">
                <User size={18} className="text-primary" />
              </div>
              <span className="text-body">Profile Information</span>
            </div>
            <ChevronRight size={18} className="text-light-text/50" />
          </motion.div>
          
          {/* Payment Methods */}
          <motion.div 
            className="p-3 flex items-center justify-between cursor-pointer"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-dark-elevated flex items-center justify-center mr-3">
                <CreditCard size={18} className="text-primary" />
              </div>
              <span className="text-body">Payment Methods</span>
            </div>
            <ChevronRight size={18} className="text-light-text/50" />
          </motion.div>
          
          {/* Security */}
          <motion.div 
            className="p-3 flex items-center justify-between cursor-pointer"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-dark-elevated flex items-center justify-center mr-3">
                <Lock size={18} className="text-primary" />
              </div>
              <span className="text-body">Security</span>
            </div>
            <ChevronRight size={18} className="text-light-text/50" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Premium Features */}
      <motion.div variants={itemVariants} className="mb-6">
        <motion.div 
          className="card bg-gradient-to-br from-accent/90 to-secondary/90 p-4 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated sparkles */}
          <motion.div 
            className="absolute top-2 right-2"
            animate={{ 
              rotate: [0, 15, -5, 0],
              scale: [1, 1.2, 0.9, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Sparkles size={20} className="text-white" />
          </motion.div>
          
          <div className="flex items-center">
            <div className="mr-4">
              <Zap size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-body font-medium text-white mb-1">Upgrade to Premium</h3>
              <p className="text-small text-white/80">Get advanced insights and exclusive features</p>
            </div>
            <motion.button 
              className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-small font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Upgrade
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Support Section */}
      <motion.div variants={itemVariants} className="mb-2">
        <h2 className="text-subtitle font-display font-semibold mb-3">Support</h2>
      </motion.div>
      
      {/* Support Items */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="card bg-dark-card/80 backdrop-blur-sm border border-white/5 p-1 divide-y divide-white/5">
          {/* Help Center */}
          <motion.div 
            className="p-3 flex items-center justify-between cursor-pointer"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-dark-elevated flex items-center justify-center mr-3">
                <HelpCircle size={18} className="text-primary" />
              </div>
              <span className="text-body">Help Center</span>
            </div>
            <ChevronRight size={18} className="text-light-text/50" />
          </motion.div>
          
          {/* App Info */}
          <motion.div 
            className="p-3 flex items-center justify-between cursor-pointer"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-dark-elevated flex items-center justify-center mr-3">
                <Smartphone size={18} className="text-primary" />
              </div>
              <span className="text-body">About App</span>
            </div>
            <span className="text-tiny text-light-text/50">v2.0.1</span>
          </motion.div>
      </div>
      </motion.div>
      
      {/* Logout Button */}
      <motion.div variants={itemVariants}>
        <motion.button 
          className="w-full py-3.5 rounded-xl bg-dark-elevated border border-white/5 flex items-center justify-center"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut size={18} className="text-red-400 mr-2" />
          <span className="text-small font-medium text-red-400">Log Out</span>
        </motion.button>
      </motion.div>
      
      {/* Onboarding Button (for development) */}
      <motion.div variants={itemVariants} className="mt-6">
        <motion.button 
          className="w-full py-3 rounded-xl bg-dark-elevated/50 border border-white/5 flex items-center justify-center"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-tiny font-medium text-light-text/50">Start Onboarding (Dev Only)</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Settings;