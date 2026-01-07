'use client';

import { motion } from 'motion/react';
import { TrendingUp, Brain, LineChart, BookOpen } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'FinTech Solutions',
    description: 'Cutting-edge digital investment platforms designed for accessibility and growth across African markets.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Leverage artificial intelligence for smarter investment decisions and personalized wealth strategies.',
  },
  {
    icon: LineChart,
    title: 'Capital Markets',
    description: 'Access to diverse capital markets opportunities with expert guidance and risk management.',
  },
  {
    icon: BookOpen,
    title: 'Financial Literacy',
    description: 'Comprehensive education programs to empower African families with investment knowledge.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to bridge Africa's wealth gap
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
