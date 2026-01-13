'use client';

import { motion } from 'motion/react';
import { Shield, Users, Brain, Leaf, Globe2, Award,Zap } from 'lucide-react';

// const advantages = [
//   {
//     icon: Shield,
//     text: 'Integrated investment + education + technology platform',
//   },
//   {
//     icon: Users,
//     text: 'Africa-first, family-focused wealth strategy',
//   },
//   {
//     icon: Brain,
//     text: 'AI-enabled decision support',
//   },
//   {
//     icon: Leaf,
//     text: 'Strong alignment with ESG and impact capital',
//   },
//   {
//     icon: Globe2,
//     text: 'Scalable across borders with minimal infrastructure',
//   },
// ];

// export function CompetitiveAdvantage() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
//             <Award className="w-5 h-5 text-purple-600" />
//             <span className="font-bold text-purple-600 text-sm uppercase tracking-wide">Competitive Advantage</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto">
//             Why We're Different
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A comprehensive ecosystem built specifically for African wealth creation
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {advantages.map((advantage, index) => (
//             <motion.div
//               key={advantage.text}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
//                 <advantage.icon className="w-7 h-7 text-white" />
//               </div>
//               <p className="text-gray-700 leading-relaxed text-lg">
//                 {advantage.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <div className="inline-block px-10 py-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl">
//             <p className="text-2xl sm:text-3xl font-bold text-white">
//               DIG is infrastructure, not just a product.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { Check, ArrowRight } from 'lucide-react';

const advantages = [
  'Integrated investment + education + technology platform',
  'Africa-first, family-focused wealth strategy',
  'AI-enabled decision support',
  'Strong alignment with ESG and impact capital',
  'Scalable across borders with minimal infrastructure',
];

export function CompetitiveAdvantage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="font-bold text-blue-600 text-sm uppercase tracking-wide">Competitive Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              DIG combines investment access, financial education, and AI-powered tools into a single, 
              comprehensive platform designed specifically for African families.
            </p>
            
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-600">
              <p className="text-2xl font-bold text-gray-900">
                DIG is infrastructure, not just a product.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Advantages List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pt-0.5">
                  {advantage}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}