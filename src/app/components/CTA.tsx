'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Start Building Your Generational Wealth Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of African families who are securing their financial future with DIVINU Investment Group.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white text-gray-900 border-0 h-12"
              />
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap h-12">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required. Start with as little as $100.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-700">
            <div>
              <div className="text-3xl font-bold">5 min</div>
              <div className="text-sm text-gray-400">Account Setup</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$100</div>
              <div className="text-sm text-gray-400">Min. Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold">0%</div>
              <div className="text-sm text-gray-400">Setup Fees</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
