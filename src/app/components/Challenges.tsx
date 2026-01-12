'use client';

import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, GraduationCap, Wallet, Users, Smartphone } from 'lucide-react';

const challenges = [
  {
    icon: TrendingDown,
    text: 'Limited access to global financial markets',
  },
  {
    icon: GraduationCap,
    text: 'Low financial literacy and investment confidence',
  },
  {
    icon: Wallet,
    text: 'Overreliance on single income sources',
  },
  {
    icon: Users,
    text: 'Minimal generational wealth transfer',
  },
  {
    icon: Smartphone,
    text: 'Rapid digital growth without structured guidance',
  },
];

export function Challenges() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
            Africa's families face systemic barriers to wealth creation:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200"
            >
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <challenge.icon className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-gray-700 leading-relaxed pt-1.5">{challenge.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl">
            <AlertCircle className="w-7 h-7 text-red-600 flex-shrink-0" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              Result: Income is earned, but wealth is not built or preserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
