// src/pages/Settings.jsx
import { motion } from 'framer-motion';

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-title font-display font-semibold mb-6">Settings</h1>
      
      <div className="space-y-6">
        <div className="card">
          <h2 className="text-subtitle font-medium mb-2">App Settings</h2>
          <button className="btn-primary w-full mt-4">Start Onboarding</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;