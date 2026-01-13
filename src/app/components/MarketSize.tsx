'use client';

import { motion } from 'motion/react';
import { TrendingUp, Globe, Users, Building2, Briefcase, Plane, Target } from 'lucide-react';

const marketFactors = [
  {
    icon: Users,
    text: 'Millions of underserved African households',
  },
  {
    icon: TrendingUp,
    text: 'Expanding digital finance and fintech ecosystem',
  },
  {
    icon: Globe,
    text: 'Global investor interest in African digital platforms',
  },
];

const targetSegments = [
  {
    icon: Briefcase,
    title: 'Middle-income families',
    description: 'Building sustainable wealth for the next generation',
  },
  {
    icon: Building2,
    title: 'Young professionals and entrepreneurs',
    description: 'Fast-growing, digitally native wealth builders',
  },
  {
    icon: Plane,
    title: 'African diaspora',
    description: 'Cross-border wealth creation and remittances',
  },
  {
    icon: Target,
    title: 'Institutions seeking impact + returns',
    description: 'ESG-aligned capital deployment opportunities',
  },
];

export function MarketSize() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-blue-600 text-sm uppercase tracking-wide">Market Size & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto">
            A Massive Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving Africa's emerging wealth creation market
          </p>
        </motion.div>

        {/* Market Factors */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {marketFactors.map((factor, index) => (
            <motion.div
              key={factor.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl border border-blue-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <factor.icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                {factor.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Target Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Target Segments
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {targetSegments.map((segment, index) => (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <segment.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {segment.title}
                      </h4>
                      <p className="text-blue-100 leading-relaxed">
                        {segment.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
