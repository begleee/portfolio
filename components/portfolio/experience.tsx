'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { Badge } from '@/components/ui/badge'

const techStack = [
  'JavaScript',
  'React',
  'Redux Toolkit',
  'React Router',
  'Next.js',
  'React Query',
  'REST API',
  'Git',
  'Tailwind CSS',
  'Framer Motion',
  'Material UI',
  'Shadcn UI',
]

export function Experience() {
  const { t } = useLocale()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-xl">02.</span>
            {t.experience.title}
            <span className="flex-1 h-px bg-border" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group relative"
          >
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t.experience.nazliperi.role}
                  </h3>
                  <p className="text-primary font-medium flex items-center gap-2">
                    {t.experience.nazliperi.company}
                    <ExternalLink className="h-4 w-4" />
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground font-mono">
                    {t.experience.nazliperi.period}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.experience.nazliperi.duration}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.experience.nazliperi.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-8 hidden lg:block">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
