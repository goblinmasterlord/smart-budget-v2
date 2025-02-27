// src/pages/Transactions.jsx
import { motion } from 'framer-motion';

const Transactions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-title font-display font-semibold mb-6">Transactions</h1>
      
      <div className="space-y-6">
        <div className="card">
          <h2 className="text-subtitle font-medium mb-2">Recent Transactions</h2>
          <p className="text-light/70">Your transactions will appear here.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Transactions;