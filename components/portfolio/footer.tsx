'use client'

import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            {t.footer.designed}
          </motion.p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/begleee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:beglee06@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
