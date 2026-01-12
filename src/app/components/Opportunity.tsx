import { motion } from 'motion/react';
import { Sparkles, Users, Smartphone, TrendingUp, BarChart3, Zap } from 'lucide-react';

const opportunities = [
  {
    icon: Users,
    text: 'Young, digitally native population',
  },
  {
    icon: Smartphone,
    text: 'Rapid fintech and mobile-money adoption',
  },
  {
    icon: TrendingUp,
    text: 'Rising middle class and diaspora capital',
  },
  {
    icon: BarChart3,
    text: 'Low penetration of structured wealth platforms',
  },
];

export function Opportunity() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-blue-600 text-sm uppercase tracking-wide">The Opportunity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
            Africa represents a multi-decade wealth creation opportunity:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <opportunity.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-700 leading-relaxed text-center">{opportunity.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl">
            <Zap className="w-7 h-7 text-green-600 flex-shrink-0" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              Gap: No integrated platform combining investment access, AI tools, and education
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
