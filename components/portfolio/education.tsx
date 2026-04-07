'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Languages } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { Badge } from '@/components/ui/badge'

export function Education() {
  const { t } = useLocale()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const languages = [
    { name: t.languages.turkmen, level: t.languages.native },
    { name: t.languages.russian, level: t.languages.native },
    { name: t.languages.english, level: t.languages.advanced },
  ]

  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-xl">04.</span>
            {t.education.title}
            <span className="flex-1 h-px bg-border" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t.education.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {t.education.university}
                  </p>
                  <Badge variant="outline" className="font-mono text-xs">
                    {t.education.period}
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Languages className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {t.languages.title}
                  </h3>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-foreground">{lang.name}</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                          {lang.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
