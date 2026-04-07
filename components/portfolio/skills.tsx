'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLocale } from '@/lib/locale-context'

const skillCategories = {
  frontend: [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'Redux Toolkit', level: 85 },
    { name: 'React Query', level: 80 },
    { name: 'React Router', level: 85 },
    { name: 'Astro.js', level: 70 },
  ],
  styling: [
    { name: 'CSS', level: 90 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Styled Components', level: 80 },
    { name: 'CSS Modules', level: 85 },
    { name: 'Material UI', level: 80 },
    { name: 'Shadcn UI', level: 85 },
    { name: 'Framer Motion', level: 75 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 85 },
    { name: 'REST API', level: 90 },
    { name: 'Axios', level: 90 },
    { name: 'Figma', level: 75 },
    { name: 'HTML', level: 95 },
  ],
}

export function Skills() {
  const { t } = useLocale()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-xl">03.</span>
            {t.skills.title}
            <span className="flex-1 h-px bg-border" />
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {t.skills.categories[category as keyof typeof t.skills.categories]}
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.3 }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground">{skill.name}</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.2, duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
