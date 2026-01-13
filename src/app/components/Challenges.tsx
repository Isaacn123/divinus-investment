'use client';

// import { motion } from 'motion/react';
// import { AlertCircle, TrendingDown, GraduationCap, Wallet, Users, Smartphone } from 'lucide-react';

// const challenges = [
//   {
//     icon: TrendingDown,
//     text: 'Limited access to global financial markets',
//   },
//   {
//     icon: GraduationCap,
//     text: 'Low financial literacy and investment confidence',
//   },
//   {
//     icon: Wallet,
//     text: 'Overreliance on single income sources',
//   },
//   {
//     icon: Users,
//     text: 'Minimal generational wealth transfer',
//   },
//   {
//     icon: Smartphone,
//     text: 'Rapid digital growth without structured guidance',
//   },
// ];

// export function Challenges() {
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
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
//             Africa's families face systemic barriers to wealth creation:
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {challenges.map((challenge, index) => (
//             <motion.div
//               key={challenge.text}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200"
//             >
//               <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <challenge.icon className="w-5 h-5 text-red-600" />
//               </div>
//               <p className="text-gray-700 leading-relaxed pt-1.5">{challenge.text}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl">
//             <AlertCircle className="w-7 h-7 text-red-600 flex-shrink-0" />
//             <p className="text-xl sm:text-2xl font-bold text-gray-900">
//               Result: Income is earned, but wealth is not built or preserved.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from 'motion/react';
import { X } from 'lucide-react';

const challenges = [
  'Limited access to global financial markets',
  'Low financial literacy and investment confidence',
  'Overreliance on single income sources',
  'Minimal generational wealth transfer',
  'Rapid digital growth without structured guidance',
];

export function Challenges() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Africa's families face systemic barriers to wealth creation:
            </h2>

            <div className="space-y-4 mb-10">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500 transition-colors">
                    <X className="w-3.5 h-3.5 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                    {challenge}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl"
            >
              <p className="text-xl sm:text-2xl font-bold">
                Result: Income is earned, but wealth is not built or preserved.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1669034750695-dfe5cad91d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjB3b3JyaWVkJTIwZmluYW5jaWFsfGVufDF8fHx8MTc2ODI2MTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial barriers in Africa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
