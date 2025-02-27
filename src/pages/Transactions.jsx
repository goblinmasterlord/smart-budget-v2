// src/pages/Transactions.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Coffee, ShoppingBag, Home as HomeIcon, Car, Smartphone, 
  Utensils, Gift, DollarSign, TrendingUp, Calendar, 
  ArrowDownCircle, ArrowUpCircle, Filter
} from 'lucide-react';
import { format, parseISO } from 'date-fns';

const Transactions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  // Sample transaction data
  const transactions = [
    { 
      id: 1, 
      title: 'Coffee Shop', 
      category: 'food',
      amount: -4.85, 
      date: '2025-02-26T09:30:00', 
      icon: Coffee,
      iconBg: 'from-orange-400 to-orange-600' 
    },
    { 
      id: 2, 
      title: 'Salary Deposit', 
      category: 'income',
      amount: 2400, 
      date: '2025-02-25T08:00:00', 
      icon: TrendingUp,
      iconBg: 'from-green-400 to-green-600' 
    },
    { 
      id: 3, 
      title: 'Grocery Store', 
      category: 'groceries',
      amount: -68.32, 
      date: '2025-02-24T17:15:00', 
      icon: ShoppingBag,
      iconBg: 'from-blue-400 to-blue-600' 
    },
    { 
      id: 4, 
      title: 'Rent Payment', 
      category: 'housing',
      amount: -1200, 
      date: '2025-02-24T10:00:00', 
      icon: HomeIcon,
      iconBg: 'from-purple-400 to-purple-600' 
    },
    { 
      id: 5, 
      title: 'Phone Bill', 
      category: 'utilities',
      amount: -45.99, 
      date: '2025-02-20T14:30:00', 
      icon: Smartphone,
      iconBg: 'from-indigo-400 to-indigo-600' 
    },
    { 
      id: 6, 
      title: 'Restaurant Dinner', 
      category: 'food',
      amount: -32.50, 
      date: '2025-02-19T19:45:00', 
      icon: Utensils,
      iconBg: 'from-orange-400 to-orange-600' 
    },
    { 
      id: 7, 
      title: 'Car Insurance', 
      category: 'transport',
      amount: -78.50, 
      date: '2025-02-15T11:20:00', 
      icon: Car,
      iconBg: 'from-cyan-400 to-cyan-600' 
    },
    { 
      id: 8, 
      title: 'Gift for Mom', 
      category: 'personal',
      amount: -25.00, 
      date: '2025-02-12T16:00:00', 
      icon: Gift,
      iconBg: 'from-pink-400 to-pink-600' 
    },
    { 
      id: 9, 
      title: 'Freelance Payment', 
      category: 'income',
      amount: 350.00, 
      date: '2025-02-10T09:15:00', 
      icon: DollarSign,
      iconBg: 'from-green-400 to-green-600' 
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All', icon: Filter, color: 'from-gray-400 to-gray-600' },
    { id: 'food', label: 'Food', icon: Utensils, color: 'from-orange-400 to-orange-600' },
    { id: 'groceries', label: 'Groceries', icon: ShoppingBag, color: 'from-blue-400 to-blue-600' },
    { id: 'housing', label: 'Housing', icon: HomeIcon, color: 'from-purple-400 to-purple-600' },
    { id: 'transport', label: 'Transport', icon: Car, color: 'from-cyan-400 to-cyan-600' },
    { id: 'utilities', label: 'Utilities', icon: Smartphone, color: 'from-indigo-400 to-indigo-600' },
    { id: 'personal', label: 'Personal', icon: Gift, color: 'from-pink-400 to-pink-600' },
    { id: 'income', label: 'Income', icon: TrendingUp, color: 'from-green-400 to-green-600' }
  ];

  // Filter transactions based on selected category
  const filteredTransactions = transactions.filter(transaction => {
    return selectedCategory === 'all' || transaction.category === selectedCategory;
  });

  // Group transactions by month and day
  const groupedTransactions = filteredTransactions.reduce((groups, transaction) => {
    const date = parseISO(transaction.date);
    const monthKey = format(date, 'MMMM yyyy');
    
    if (!groups[monthKey]) {
      groups[monthKey] = {};
    }
    
    const dayKey = format(date, 'EEEE, MMMM d');
    
    if (!groups[monthKey][dayKey]) {
      groups[monthKey][dayKey] = [];
    }
    
    groups[monthKey][dayKey].push(transaction);
    return groups;
  }, {});

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
          <h1 className="text-title font-display font-semibold">Transactions</h1>
          <motion.div 
            className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <Calendar size={20} className="text-light-text/70" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Improved Category Filter */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-dark-elevated rounded-full" />
          
          <div className="flex overflow-x-auto hide-scrollbar pb-3 -mx-1 px-1">
            <div className="flex space-x-1">
              {categories.map(category => {
                const isSelected = selectedCategory === category.id;
                const Icon = category.icon;
                
                return (
                  <motion.button
                    key={category.id}
                    className="relative flex flex-col items-center py-2 px-4 min-w-[80px]"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      isSelected 
                        ? 'bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20' 
                        : 'bg-gradient-to-br ' + category.color + ' opacity-70'
                    }`}>
                      <Icon size={20} className="text-white" />
                      
                      {/* Animated pulse effect when selected */}
                      {isSelected && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary"
                          initial={{ scale: 0.8, opacity: 0.8 }}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 0, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </div>
                    
                    <span className={`text-small font-medium whitespace-nowrap ${
                      isSelected ? 'text-primary' : 'text-light-text/70'
                    }`}>
                      {category.label}
                    </span>
                    
                    {/* Active indicator line */}
                    {isSelected && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        layoutId="categoryIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Transactions List Grouped by Month and Day */}
      <motion.div variants={itemVariants}>
        {Object.keys(groupedTransactions).length > 0 ? (
          Object.entries(groupedTransactions).map(([month, days]) => (
            <div key={month} className="mb-6">
              <motion.h2 
                className="text-subtitle font-display font-semibold mb-4 sticky top-0 bg-dark py-2 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {month}
              </motion.h2>
              
              {Object.entries(days).map(([day, dayTransactions]) => (
                <div key={day} className="mb-5">
                  <h3 className="text-small font-medium text-light-text/70 mb-3">{day}</h3>
                  <div className="space-y-3">
                    <AnimatePresence>
                      {dayTransactions.map((transaction, index) => {
                        const Icon = transaction.icon;
                        const isIncome = transaction.amount > 0;
                        const date = parseISO(transaction.date);
                        
                        return (
                          <motion.div
                            key={transaction.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: index * 0.03, duration: 0.2 }}
                            className="relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {/* Transaction Card */}
                            <div className="card p-3 flex items-center bg-dark-card/80 backdrop-blur-sm border border-white/5 relative overflow-hidden">
                              {/* Subtle gradient background based on transaction type */}
                              <div className={`absolute inset-0 opacity-10 bg-gradient-to-r ${
                                isIncome ? 'from-green-500/30 to-transparent' : 'from-secondary/30 to-transparent'
                              }`} />
                              
                              {/* Icon with gradient background */}
                              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${transaction.iconBg} flex items-center justify-center mr-3 flex-shrink-0 shadow-lg`}>
                                <Icon size={18} className="text-white" />
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h4 className="font-medium text-body truncate">{transaction.title}</h4>
                                    <p className="text-tiny text-light-text/60">
                                      {format(date, 'h:mm a')}
                                    </p>
                                  </div>
                                  <div className="flex flex-col items-end">
                                    <span className={`font-display font-semibold ${isIncome ? 'text-green-400' : 'text-secondary'}`}>
                                      {isIncome ? '+' : ''}{transaction.amount.toLocaleString('en-US', { 
                                        style: 'currency', 
                                        currency: 'USD',
                                        minimumFractionDigits: 2
                                      })}
                                    </span>
                                    
                                    {/* Category Tag */}
                                    <motion.div 
                                      className={`text-tiny font-medium px-2 py-0.5 rounded-full mt-1 flex items-center ${
                                        isIncome ? 'bg-green-500/20 text-green-400' : 'bg-secondary/20 text-secondary'
                                      }`}
                                      initial={{ scale: 0.8, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      transition={{ delay: 0.1 + index * 0.03 }}
                                    >
                                      {isIncome ? (
                                        <ArrowUpCircle size={10} className="mr-1" />
                                      ) : (
                                        <ArrowDownCircle size={10} className="mr-1" />
                                      )}
                                      {transaction.category.charAt(0).toUpperCase() + transaction.category.slice(1)}
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
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-16 h-16 rounded-full bg-dark-elevated flex items-center justify-center mb-4">
              <Filter size={24} className="text-light-text/40" />
            </div>
            <p className="text-light-text/60 text-center">No transactions found</p>
            <button 
              className="mt-4 text-primary font-medium"
              onClick={() => setSelectedCategory('all')}
            >
              Clear filters
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Transactions;