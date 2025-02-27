// src/components/ui/LoadingScreen.jsx

import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="h-full flex items-center justify-center bg-dark">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary-light"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-transparent border-secondary"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <p className="mt-4 font-medium text-light">Loading...</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;