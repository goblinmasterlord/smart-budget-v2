// src/pages/Dashboard.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, TrendingUp, AlertTriangle, PiggyBank, ArrowDownCircle, ArrowUpCircle, Coffee, ShoppingBag, Home as HomeIcon, Sparkles, Zap } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  
  // Simulate loading state with shorter duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Reduced from 1500ms to 800ms
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06 // Slightly faster staggering
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced y distance for faster animation
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 350, // Increased stiffness for faster animation
        damping: 30
      }
    }
  };

  const balance = 3259.42;
  const upcomingExpenses = 850.00;
  
  // Sample recent transactions
  const recentTransactions = [
    { 
      id: 1, 
      title: 'Coffee Shop', 
      category: 'Food',
      amount: -4.85, 
      date: new Date(2025, 1, 26, 9, 30), 
      icon: Coffee,
      iconBg: 'from-orange-400 to-orange-600' 
    },
    { 
      id: 2, 
      title: 'Salary', 
      category: 'Income',
      amount: 2400, 
      date: new Date(2025, 1, 25, 8, 0), 
      icon: TrendingUp,
      iconBg: 'from-green-400 to-green-600' 
    },
    { 
      id: 3, 
      title: 'Grocery Store', 
      category: 'Groceries',
      amount: -68.32, 
      date: new Date(2025, 1, 24, 17, 15), 
      icon: ShoppingBag,
      iconBg: 'from-blue-400 to-blue-600' 
    },
    { 
      id: 4, 
      title: 'Rent Payment', 
      category: 'Housing',
      amount: -1200, 
      date: new Date(2025, 1, 24, 10, 0), 
      icon: HomeIcon,
      iconBg: 'from-purple-400 to-purple-600' 
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2, // Faster loading animation
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
      {/* Header with greeting */}
      <motion.div
        variants={itemVariants}
        className="mb-5" // Reduced margin
      >
        <div className="flex justify-between items-center">
          <h1 className="text-title font-display font-bold">
            <span className="text-light-text/60">Hello,</span> User
          </h1>
          <motion.div 
            className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary font-bold">U</span>
          </motion.div>
        </div>
      </motion.div>

      {/* AI Insight - Redesigned without button */}
      <motion.div
        variants={itemVariants}
        className="mb-5" // Reduced margin
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative overflow-hidden rounded-2xl">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30">
            <motion.div 
              className="absolute inset-0 opacity-30"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
                backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 35%)'
              }}
            />
          </div>
          
          <div className="relative p-5">
            <div className="flex items-start">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4 flex-shrink-0">
                  <Sparkles size={22} className="text-white" />
                  
                  {/* Animated particles */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white"
                    animate={{ 
                      y: [0, -10, -5, -15],
                      x: [0, 5, 10, 15],
                      opacity: [1, 0.8, 0.6, 0],
                      scale: [1, 0.8, 0.6, 0.4]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut" 
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-white"
                    animate={{ 
                      y: [0, 10, 5, 15],
                      x: [0, -5, -10, -15],
                      opacity: [1, 0.8, 0.6, 0],
                      scale: [1, 0.8, 0.6, 0.4]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5
                    }}
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="font-display font-bold text-subtitle mb-1 text-white">Smart Insight</h3>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                    className="ml-2"
                  >
                    <Zap size={16} className="text-yellow-300" />
                  </motion.div>
                </div>
                <p className="text-white/90 text-small">You've spent <span className="font-bold text-white">15% less</span> on dining out this month compared to last month. Great job sticking to your budget!</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Balance & Expenses Cards - Side by side instead of carousel */}
      <motion.div
        variants={itemVariants}
        className="mb-5 grid grid-cols-2 gap-3" // Reduced margin
      >
        {/* Balance Card */}
        <div className="card relative h-[130px] flex flex-col justify-between p-4 overflow-hidden bg-gradient-to-br from-primary to-accent">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)'
              }}
            />
          </div>
          
          <div className="relative">
            <span className="text-white/80 text-tiny uppercase tracking-wider font-medium">Balance</span>
            <div className="flex items-center justify-between">
              <motion.div 
                className="mt-1"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <span className="text-subtitle font-display font-bold text-white">${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </motion.div>
            </div>
          </div>
          
          <div className="flex items-center mt-1 relative">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <TrendingUp size={12} className="text-white" />
            </div>
            <span className="text-tiny ml-2 text-white/80">Saved 12% this month</span>
          </div>
        </div>
        
        {/* Expenses Card */}
        <div className="card relative h-[130px] flex flex-col justify-between p-4 overflow-hidden bg-gradient-to-br from-secondary to-secondary-light">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
                backgroundImage: 'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%)'
              }}
            />
          </div>
          
          <div className="relative">
            <span className="text-white/80 text-tiny uppercase tracking-wider font-medium">Upcoming</span>
            <div className="flex items-center justify-between">
              <motion.div 
                className="mt-1"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <span className="text-subtitle font-display font-bold text-white">${upcomingExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </motion.div>
            </div>
          </div>
          
          <div className="flex items-center mt-1 relative">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <AlertTriangle size={12} className="text-white" />
            </div>
            <span className="text-tiny ml-2 text-white/80">Due in 3 days</span>
          </div>
        </div>
      </motion.div>

      {/* Budget Health Indicator */}
      <motion.div
        variants={itemVariants}
        className="mb-5" // Reduced margin
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="card bg-gradient-to-br from-dark-card/80 to-dark-card border border-white/5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-subtitle font-medium">Budget Health</h3>
            <span className="text-small font-medium px-2 py-0.5 rounded-full bg-primary/20 text-primary">Good</span>
          </div>
          <div className="bg-dark-elevated h-3 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary-light to-primary rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Faster animation
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
          <div className="flex justify-between mt-2">
            <span className="text-tiny text-light-text/60">3 categories over budget</span>
            <span className="text-tiny text-light-text/60">75% on track</span>
          </div>
        </div>
      </motion.div>

      {/* Recent Transactions - Redesigned */}
      <motion.div
        variants={itemVariants}
        className="mb-5" // Reduced margin
      >
        <div className="flex justify-between items-center mb-3"> {/* Reduced margin */}
          <h2 className="text-subtitle font-display font-semibold">Recent Transactions</h2>
          <motion.button 
            className="flex items-center text-small text-primary font-medium"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            See All <ChevronRight size={16} className="ml-1" />
          </motion.button>
        </div>
        
        <div className="space-y-2.5">
          <AnimatePresence>
            {recentTransactions.map((transaction, index) => {
              const Icon = transaction.icon;
              const isIncome = transaction.amount > 0;
              
              return (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.03, duration: 0.2 }} // Faster animation
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Card with glass effect */}
                  <div className="card p-3 flex items-center bg-dark-card/80 backdrop-blur-sm border border-white/5 relative overflow-hidden">
                    {/* Subtle gradient background based on transaction type */}
                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-r ${
                      isIncome ? 'from-green-500/30 to-transparent' : 'from-secondary/30 to-transparent'
                    }`} />
                    
                    {/* Icon with gradient background */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${transaction.iconBg} flex items-center justify-center mr-3 flex-shrink-0 shadow-lg`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-body truncate">{transaction.title}</h4>
                          <p className="text-tiny text-light-text/60">{transaction.category} • {formatDistanceToNow(transaction.date, { addSuffix: true })}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className={`font-display font-semibold ${isIncome ? 'text-green-400' : 'text-secondary'}`}>
                            {isIncome ? '+' : ''}{transaction.amount.toLocaleString('en-US', { 
                              style: 'currency', 
                              currency: 'USD',
                              minimumFractionDigits: 2
                            })}
                          </span>
                          
                          {/* Animated indicator for transaction type */}
                          <motion.div 
                            className={`text-tiny font-medium px-1.5 py-0.5 rounded-full mt-1 flex items-center ${
                              isIncome ? 'bg-green-500/20 text-green-400' : 'bg-secondary/20 text-secondary'
                            }`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 + index * 0.03 }} // Faster animation
                          >
                            {isIncome ? (
                              <ArrowUpCircle size={10} className="mr-1" />
                            ) : (
                              <ArrowDownCircle size={10} className="mr-1" />
                            )}
                            {isIncome ? 'Income' : 'Expense'}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;