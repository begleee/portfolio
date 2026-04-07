'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, ArrowUpRight } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { Button } from '@/components/ui/button'

export function Contact() {
  const { t } = useLocale()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono mb-4">05. {t.contact.title}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            {t.contact.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="mailto:beglee06@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                {t.contact.email}
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a
                href="https://github.com/begleee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
