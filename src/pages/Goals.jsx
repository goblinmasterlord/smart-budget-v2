// src/pages/Goals.jsx
import { motion } from 'framer-motion';

const Goals = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-title font-display font-semibold mb-6">Goals</h1>
      
      <div className="space-y-6">
        <div className="card">
          <h2 className="text-subtitle font-medium mb-2">Your Financial Goals</h2>
          <p className="text-light/70">Your goals will appear here.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Goals;