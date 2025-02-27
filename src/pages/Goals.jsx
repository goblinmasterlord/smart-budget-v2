// src/pages/Goals.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, Plus, ChevronRight, Trash2, Edit, 
  DollarSign, Calendar, TrendingUp, Award, Check
} from 'lucide-react';

const Goals = () => {
  const [loading, setLoading] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  // Sample goals data
  const goals = [
    {
      id: 1,
      title: "Emergency Fund",
      targetAmount: 10000,
      currentAmount: 6500,
      deadline: "2025-06-30",
      color: "from-blue-400 to-blue-600",
      icon: DollarSign
    },
    {
      id: 2,
      title: "New Laptop",
      targetAmount: 2000,
      currentAmount: 800,
      deadline: "2025-04-15",
      color: "from-purple-400 to-purple-600",
      icon: Target
    },
    {
      id: 3,
      title: "Summer Vacation",
      targetAmount: 3500,
      currentAmount: 1200,
      deadline: "2025-07-01",
      color: "from-orange-400 to-orange-600",
      icon: Calendar
    }
  ];

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
          <h1 className="text-title font-display font-semibold">Goals</h1>
          <motion.div 
            className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <Award size={20} className="text-light-text/70" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Progress Summary */}
      <motion.div variants={itemVariants} className="mb-5">
        <div className="card bg-gradient-to-br from-dark-card/80 to-dark-card border border-white/5 p-4">
          <h2 className="text-subtitle font-medium mb-3">Overall Progress</h2>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-small text-light-text/70">Total Saved</span>
            <span className="text-body font-display font-semibold text-primary">
              ${goals.reduce((sum, goal) => sum + goal.currentAmount, 0).toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-small text-light-text/70">Total Goals</span>
            <span className="text-body font-display font-semibold text-accent">
              ${goals.reduce((sum, goal) => sum + goal.targetAmount, 0).toLocaleString()}
            </span>
          </div>
          
          {/* Overall progress bar */}
          <div className="bg-dark-elevated h-3 rounded-full overflow-hidden mb-2">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary-light to-primary rounded-full relative"
              initial={{ width: 0 }}
              animate={{ 
                width: `${(goals.reduce((sum, goal) => sum + goal.currentAmount, 0) / 
                  goals.reduce((sum, goal) => sum + goal.targetAmount, 0)) * 100}%` 
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-r from-transparent to-white/50"
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </motion.div>
          </div>
          
          <div className="flex justify-between">
            <span className="text-tiny text-light-text/60">
              {Math.round((goals.reduce((sum, goal) => sum + goal.currentAmount, 0) / 
                goals.reduce((sum, goal) => sum + goal.targetAmount, 0)) * 100)}% Complete
            </span>
            <span className="text-tiny text-light-text/60">
              ${(goals.reduce((sum, goal) => sum + goal.targetAmount, 0) - 
                goals.reduce((sum, goal) => sum + goal.currentAmount, 0)).toLocaleString()} Remaining
            </span>
          </div>
        </div>
      </motion.div>
      
      {/* Goals List */}
      <motion.div variants={itemVariants} className="mb-3">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-subtitle font-display font-semibold">Your Goals</h2>
          <motion.button 
            className="flex items-center text-small text-primary font-medium"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            View All <ChevronRight size={16} className="ml-1" />
          </motion.button>
        </div>
      </motion.div>
      
      {/* Goals Cards */}
      <AnimatePresence>
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          const progressPercentage = (goal.currentAmount / goal.targetAmount) * 100;
          const isCompleted = progressPercentage >= 100;
          
          return (
            <motion.div
              key={goal.id}
              variants={itemVariants}
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card bg-dark-card/80 backdrop-blur-sm border border-white/5 p-4 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30" />
                
                {/* Goal header */}
                <div className="flex justify-between items-start mb-3 relative">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${goal.color} flex items-center justify-center mr-3 flex-shrink-0 shadow-lg`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-body">{goal.title}</h3>
                      <p className="text-tiny text-light-text/60">Due by {new Date(goal.deadline).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <motion.button 
                      className="w-8 h-8 rounded-full bg-dark-elevated flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit size={14} className="text-light-text/70" />
                    </motion.button>
                    <motion.button 
                      className="w-8 h-8 rounded-full bg-dark-elevated flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={14} className="text-light-text/70" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Progress section */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-small text-light-text/70">Progress</span>
                    <div className="flex items-center">
                      {isCompleted && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-2"
                        >
                          <Check size={12} className="text-green-400" />
                        </motion.div>
                      )}
                      <span className={`text-small font-medium ${isCompleted ? 'text-green-400' : 'text-primary'}`}>
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="bg-dark-elevated h-2.5 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full relative ${
                        isCompleted 
                          ? 'bg-gradient-to-r from-green-400 to-green-500' 
                          : 'bg-gradient-to-r from-primary-light to-primary'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progressPercentage, 100)}%` }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 + index * 0.1 }}
                    >
                      {/* Animated glow effect */}
                      <motion.div
                        className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-r from-transparent to-white/50"
                        animate={{ 
                          x: ['-100%', '100%'],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Amount details */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-tiny text-light-text/60">Saved</span>
                    <p className="text-small font-medium text-primary">
                      ${goal.currentAmount.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-tiny text-light-text/60">Target</span>
                    <p className="text-small font-medium text-light-text">
                      ${goal.targetAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      {/* Add New Goal Button */}
      <motion.div
        variants={itemVariants}
        className="mt-6"
      >
        <motion.button
          className="w-full py-3.5 rounded-xl bg-dark-elevated border border-white/5 flex items-center justify-center"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus size={18} className="text-primary mr-2" />
          <span className="text-small font-medium text-primary">Add New Goal</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Goals;