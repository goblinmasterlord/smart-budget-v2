// src/pages/Onboarding.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  
  const totalSteps = 4;
  
  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      // Finish onboarding
      navigate('/', { replace: true });
    }
  };
  
  return (
    <div className="h-full flex flex-col">
      <motion.div 
        className="flex-1 flex flex-col justify-center items-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
            {/* Placeholder for animated logo/icon */}
            <span className="text-display font-bold text-white">B</span>
          </div>
        </div>
        
        {step === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h1 className="text-display font-display font-bold mb-4">Welcome to Budget</h1>
            <p className="text-body mb-8">The simplest way to manage your finances and achieve your financial goals.</p>
          </motion.div>
        )}
        
        {/* More steps will be added here */}
        
        <div className="w-full max-w-xs">
          <button 
            className="btn-primary w-full"
            onClick={handleNext}
          >
            {step === 0 ? 'Get Started' : 'Continue'}
          </button>
          
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index}
                className={`h-1 w-8 rounded-full mx-1 ${
                  index === step ? 'bg-primary' : 'bg-dark-elevated'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Onboarding;